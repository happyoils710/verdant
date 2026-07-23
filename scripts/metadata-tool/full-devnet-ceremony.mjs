/**
 * Full Devnet ceremony: create mint → metadata → mint 100M → revoke mint authority.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMint2Instruction,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
  createSetAuthorityInstruction,
  getAssociatedTokenAddressSync,
  getMinimumBalanceForRentExemptMint,
  AuthorityType,
} from "@solana/spl-token";
import {
  createCreateMetadataAccountV3Instruction,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const KEYPAIR_PATH = path.join(ROOT, "keys/devnet-payer.json");
const OUT = path.join(ROOT, "docs/devnet-addresses.md");

const METADATA_URI =
  "https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/token.json";
const DECIMALS = 6;
const SUPPLY_UI = 100_000_000;
const SUPPLY_RAW = BigInt(SUPPLY_UI) * BigInt(10 ** DECIMALS);

function loadKeypair(file) {
  return Keypair.fromSecretKey(
    Uint8Array.from(JSON.parse(fs.readFileSync(file, "utf8")))
  );
}

function findMetadataPda(mint) {
  const [pda] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );
  return pda;
}

async function main() {
  const payer = loadKeypair(KEYPAIR_PATH);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  console.log("Payer:", payer.publicKey.toBase58());
  console.log("Balance:", (await connection.getBalance(payer.publicKey)) / 1e9, "SOL");

  const mintKeypair = Keypair.generate();
  const mint = mintKeypair.publicKey;
  const metadataPda = findMetadataPda(mint);
  const ata = getAssociatedTokenAddressSync(mint, payer.publicKey);

  const lamports = await getMinimumBalanceForRentExemptMint(connection);

  // 1) Create mint account + initialize
  const tx1 = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: mint,
      space: MINT_SIZE,
      lamports,
      programId: TOKEN_PROGRAM_ID,
    }),
    createInitializeMint2Instruction(
      mint,
      DECIMALS,
      payer.publicKey,
      null // no freeze authority
    )
  );
  const sig1 = await sendAndConfirmTransaction(connection, tx1, [
    payer,
    mintKeypair,
  ]);
  console.log("Mint created:", mint.toBase58(), sig1);

  // 2) Metadata (while mint authority still held)
  const tx2 = new Transaction().add(
    createCreateMetadataAccountV3Instruction(
      {
        metadata: metadataPda,
        mint,
        mintAuthority: payer.publicKey,
        payer: payer.publicKey,
        updateAuthority: payer.publicKey,
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: "Verdant",
            symbol: "VERD",
            uri: METADATA_URI,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      }
    )
  );
  const sig2 = await sendAndConfirmTransaction(connection, tx2, [payer]);
  console.log("Metadata created:", metadataPda.toBase58(), sig2);

  // 3) ATA + mint supply
  const tx3 = new Transaction().add(
    createAssociatedTokenAccountInstruction(
      payer.publicKey,
      ata,
      payer.publicKey,
      mint
    ),
    createMintToInstruction(mint, ata, payer.publicKey, SUPPLY_RAW)
  );
  const sig3 = await sendAndConfirmTransaction(connection, tx3, [payer]);
  console.log("Minted supply to:", ata.toBase58(), sig3);

  // 4) Revoke mint authority
  const tx4 = new Transaction().add(
    createSetAuthorityInstruction(
      mint,
      payer.publicKey,
      AuthorityType.MintTokens,
      null
    )
  );
  const sig4 = await sendAndConfirmTransaction(connection, tx4, [payer]);
  console.log("Mint authority revoked:", sig4);

  const content = `# Devnet addresses

**Network:** devnet  
**Generated:** ${new Date().toISOString()}  
**Ceremony:** mint → metadata → supply → revoke mint authority

## Canonical Devnet mint (with metadata)

| Item | Value |
|------|--------|
| Payer | \`${payer.publicKey.toBase58()}\` |
| VERD mint | \`${mint.toBase58()}\` |
| Metadata PDA | \`${metadataPda.toBase58()}\` |
| Metadata URI | \`${METADATA_URI}\` |
| Token account (full supply) | \`${ata.toBase58()}\` |
| Supply | ${SUPPLY_UI} |
| Decimals | ${DECIMALS} |
| Mint authority | **revoked** |
| Freeze authority | **none** |
| Explorer (mint) | https://explorer.solana.com/address/${mint.toBase58()}?cluster=devnet |
| Explorer (metadata) | https://explorer.solana.com/address/${metadataPda.toBase58()}?cluster=devnet |

## Transaction signatures

| Step | Signature |
|------|-----------|
| Create mint | \`${sig1}\` |
| Create metadata | \`${sig2}\` |
| ATA + mint 100M | \`${sig3}\` |
| Revoke mint authority | \`${sig4}\` |

## Earlier rehearsal mint (supply-only; no metadata)

Mint authority was revoked before metadata could be attached — kept for history.

| Item | Value |
|------|--------|
| Mint | \`Co3Zir8MhuFMFwxBMCXPwRE6hYLBQMoLNijLaudjgstH\` |
| Token account | \`FyszpE8opZt2WCRMFnDzg5L6jM8aGwN7hG4H69m6zmEM\` |
| Note | Lesson: always create metadata **before** revoking mint authority |

## Next

1. Squads multisig practice — see \`docs/squads-realms-walkthrough.md\`
2. Realms realm practice — same doc
3. Mainnet: same order (metadata before revoke); update authority → Squads

## Footguns

- Public RPC airdrop 429 → https://faucet.solana.com
- Do not commit \`keys/*.json\`
- Create metadata **before** mint authority revoke
`;

  fs.writeFileSync(OUT, content);
  console.log("Wrote", OUT);
  console.log("DONE. Mint:", mint.toBase58());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
