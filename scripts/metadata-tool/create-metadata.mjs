/**
 * Create Metaplex Token Metadata for Verdant (VERD) on Devnet.
 *
 * Usage:
 *   export PATH="$HOME/.local/node/node-v20.18.1-darwin-x64/bin:$HOME/.local/solana/solana-release/bin:$PATH"
 *   node scripts/metadata-tool/create-metadata.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Connection,
  Keypair,
  PublicKey,
  clusterApiUrl,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import {
  createCreateMetadataAccountV3Instruction,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

const MINT = new PublicKey("Co3Zir8MhuFMFwxBMCXPwRE6hYLBQMoLNijLaudjgstH");
const METADATA_URI =
  "https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/token.json";

const KEYPAIR_PATH = path.join(ROOT, "keys/devnet-payer.json");

function loadKeypair(file) {
  const secret = JSON.parse(fs.readFileSync(file, "utf8"));
  return Keypair.fromSecretKey(Uint8Array.from(secret));
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
  if (!fs.existsSync(KEYPAIR_PATH)) {
    console.error("Missing keypair:", KEYPAIR_PATH);
    process.exit(1);
  }

  const payer = loadKeypair(KEYPAIR_PATH);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const balance = await connection.getBalance(payer.publicKey);
  console.log("Payer:", payer.publicKey.toBase58());
  console.log("Balance:", balance / 1e9, "SOL");
  console.log("Mint:", MINT.toBase58());

  if (balance < 0.05 * 1e9) {
    console.error("Need more Devnet SOL for fees");
    process.exit(2);
  }

  const metadataPda = findMetadataPda(MINT);
  console.log("Metadata PDA:", metadataPda.toBase58());

  const existing = await connection.getAccountInfo(metadataPda);
  if (existing) {
    console.log("Metadata account already exists. Nothing to create.");
    console.log(
      "Explorer:",
      `https://explorer.solana.com/address/${metadataPda.toBase58()}?cluster=devnet`
    );
    return;
  }

  const ix = createCreateMetadataAccountV3Instruction(
    {
      metadata: metadataPda,
      mint: MINT,
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
  );

  // Note: mint authority was revoked — create metadata requires mint authority
  // for some flows. If this fails, metadata must be created BEFORE revoke on
  // mainnet, or use a different path. On Devnet we already revoked; try anyway
  // in case update path differs.

  const tx = new Transaction().add(ix);
  try {
    const sig = await sendAndConfirmTransaction(connection, tx, [payer]);
    console.log("Success. Signature:", sig);
    console.log(
      "Explorer:",
      `https://explorer.solana.com/tx/${sig}?cluster=devnet`
    );
  } catch (err) {
    console.error("Create metadata failed:", err.message || err);
    console.error(
      "\nLikely cause: mint authority was already revoked (correct for supply safety)."
    );
    console.error(
      "On mainnet: create metadata BEFORE revoking mint authority, then transfer update authority to Squads."
    );
    console.error(
      "Devnet fix options: (1) mint a new rehearsal mint with metadata-before-revoke script, or (2) attach metadata via a UI that supports existing mints without mint authority if available."
    );
    process.exit(3);
  }
}

main();
