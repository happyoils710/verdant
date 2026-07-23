/**
 * Create Verdant SPL Governance realm on Devnet (bypasses Realms V2 UI).
 * Realms V2 currently has no Devnet toggle — this creates the on-chain realm.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import BN from "bn.js";
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import {
  withCreateRealm,
  withCreateGovernance,
  withCreateNativeTreasury,
  withCreateTokenOwnerRecord,
  withDepositGoverningTokens,
  MintMaxVoteWeightSource,
  VoteThreshold,
  VoteThresholdType,
  VoteTipping,
  GovernanceConfig,
  getGovernanceProgramVersion,
  getRealm,
  getTokenOwnerRecordAddress,
} from "@solana/spl-governance";
import {
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const KEYPAIR_PATH = path.join(ROOT, "keys/devnet-payer.json");
const OUT = path.join(ROOT, "docs/devnet-addresses.md");

// Shared SPL Governance program (same on mainnet & devnet)
const GOVERNANCE_PROGRAM_ID = new PublicKey(
  "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw"
);

const COMMUNITY_MINT = new PublicKey(
  "9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD"
);
const REALM_NAME = "Verdant";

// Your Solflare Devnet wallet — will receive deposit instructions guidance
const USER_WALLET = new PublicKey(
  "5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3"
);

function loadKeypair(file) {
  return Keypair.fromSecretKey(
    Uint8Array.from(JSON.parse(fs.readFileSync(file, "utf8")))
  );
}

async function main() {
  const payer = loadKeypair(KEYPAIR_PATH);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  console.log("Payer:", payer.publicKey.toBase58());
  console.log("Balance:", (await connection.getBalance(payer.publicKey)) / 1e9, "SOL");
  console.log("Community mint:", COMMUNITY_MINT.toBase58());

  const programVersion = await getGovernanceProgramVersion(
    connection,
    GOVERNANCE_PROGRAM_ID
  );
  console.log("Governance program version:", programVersion);

  // min tokens to create governance: 1000 VERD (6 decimals)
  const minCommunityWeightToCreateGovernance = new BN(1000).mul(
    new BN(10).pow(new BN(6))
  );

  const instructions = [];
  const realmPk = await withCreateRealm(
    instructions,
    GOVERNANCE_PROGRAM_ID,
    programVersion,
    REALM_NAME,
    payer.publicKey, // realm authority
    COMMUNITY_MINT,
    payer.publicKey,
    undefined, // no council mint
    MintMaxVoteWeightSource.FULL_SUPPLY_FRACTION,
    minCommunityWeightToCreateGovernance
  );
  console.log("Realm PDA:", realmPk.toBase58());

  // Create token owner record for payer (needed for governance create)
  await withCreateTokenOwnerRecord(
    instructions,
    GOVERNANCE_PROGRAM_ID,
    programVersion,
    realmPk,
    payer.publicKey,
    COMMUNITY_MINT,
    payer.publicKey
  );

  // Deposit some VERD from payer so we can create a governance
  // (requires payer to hold VERD ATA — ceremony wallet holds supply)
  const payerAta = getAssociatedTokenAddressSync(
    COMMUNITY_MINT,
    payer.publicKey
  );
  const depositAmount = new BN(100_000).mul(new BN(10).pow(new BN(6))); // 100k VERD

  await withDepositGoverningTokens(
    instructions,
    GOVERNANCE_PROGRAM_ID,
    programVersion,
    realmPk,
    payerAta,
    COMMUNITY_MINT,
    payer.publicKey,
    payer.publicKey,
    payer.publicKey,
    depositAmount,
    TOKEN_PROGRAM_ID
  );

  const tokenOwnerRecord = await getTokenOwnerRecordAddress(
    GOVERNANCE_PROGRAM_ID,
    realmPk,
    COMMUNITY_MINT,
    payer.publicKey
  );

  // Governance config — short voting for Devnet practice
  const yesThreshold = new VoteThreshold({
    type: VoteThresholdType.YesVotePercentage,
    value: 60,
  });
  const disabled = new VoteThreshold({
    type: VoteThresholdType.Disabled,
  });

  const config = new GovernanceConfig({
    communityVoteThreshold: yesThreshold,
    minCommunityTokensToCreateProposal: new BN(1000).mul(
      new BN(10).pow(new BN(6))
    ),
    minInstructionHoldUpTime: 0,
    baseVotingTime: 60 * 60, // 1 hour on Devnet
    communityVoteTipping: VoteTipping.Strict,
    councilVoteThreshold: disabled,
    councilVetoVoteThreshold: disabled,
    communityVetoVoteThreshold: disabled,
    councilVoteTipping: VoteTipping.Strict,
    votingCoolOffTime: 0,
    depositExemptProposalCount: 10,
  });

  const governancePk = await withCreateGovernance(
    instructions,
    GOVERNANCE_PROGRAM_ID,
    programVersion,
    realmPk,
    undefined, // governed account optional
    config,
    tokenOwnerRecord,
    payer.publicKey,
    payer.publicKey
  );
  console.log("Governance PDA:", governancePk.toBase58());

  const treasuryPk = await withCreateNativeTreasury(
    instructions,
    GOVERNANCE_PROGRAM_ID,
    programVersion,
    governancePk,
    payer.publicKey
  );
  console.log("Native treasury:", treasuryPk.toBase58());

  // May need multiple txs if instruction limit hit
  const tx = new Transaction().add(...instructions);
  const { blockhash } = await connection.getLatestBlockhash();
  tx.recentBlockhash = blockhash;
  tx.feePayer = payer.publicKey;

  // Split if too large
  let sig;
  try {
    sig = await sendAndConfirmTransaction(connection, tx, [payer], {
      commitment: "confirmed",
    });
  } catch (e) {
    console.error("Single-tx failed, trying split...", e.message);
    // Split: realm first, then rest
    const tx1 = new Transaction().add(instructions[0], instructions[1]);
    const sig1 = await sendAndConfirmTransaction(connection, tx1, [payer]);
    console.log("Tx1 (realm + TOR):", sig1);
    const tx2 = new Transaction().add(...instructions.slice(2));
    sig = await sendAndConfirmTransaction(connection, tx2, [payer]);
  }

  console.log("Signature:", sig);

  // Verify
  const realm = await getRealm(connection, realmPk);
  console.log("Realm name:", realm.account.name);
  console.log("Community mint:", realm.account.communityMint.toBase58());

  const note = `

## SPL Governance realm (Devnet) — created via CLI

> Realms V2 UI has **no Devnet network switch** (as of this write-up).  
> Realm was created on-chain with \`scripts/governance-tool/create-realm-devnet.mjs\`.

| Item | Value |
|------|--------|
| Realm name | \`${REALM_NAME}\` |
| Realm address | \`${realmPk.toBase58()}\` |
| Governance | \`${governancePk.toBase58()}\` |
| Native treasury | \`${treasuryPk.toBase58()}\` |
| Community mint | \`${COMMUNITY_MINT.toBase58()}\` |
| Governance program | \`${GOVERNANCE_PROGRAM_ID.toBase58()}\` |
| Create/deposit tx | \`${sig}\` |
| Realm authority (temp) | \`${payer.publicKey.toBase58()}\` |

### Explorer

- Realm: https://explorer.solana.com/address/${realmPk.toBase58()}?cluster=devnet
- Tx: https://explorer.solana.com/tx/${sig}?cluster=devnet

### How you use it without Realms V2 Devnet UI

1. Finish **Squads** on https://devnet.squads.so/squads (UI works on Devnet).
2. Treat this realm as the on-chain governance object; voting/proposals can be done via scripts or when a UI supports Devnet again.
3. Mainnet: use **https://v2.realms.today** (mainnet only) with a new mainnet mint ceremony.

### User Solflare wallet

\`${USER_WALLET.toBase58()}\` — has practice VERD; can be deposited into this realm via a follow-up deposit script if needed.
`;

  let existing = "";
  if (fs.existsSync(OUT)) existing = fs.readFileSync(OUT, "utf8");
  if (!existing.includes(realmPk.toBase58())) {
    fs.writeFileSync(OUT, existing.trimEnd() + "\n" + note);
  }
  console.log("Updated", OUT);
  console.log("DONE");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
