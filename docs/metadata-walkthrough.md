# Token Metadata Walkthrough

Attach **Metaplex Token Metadata** so wallets show **Verdant / VERD** instead of an unknown mint.

**Devnet mint:** `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`

---

## Files in this repo

| File | Role |
|------|------|
| `metadata/token.json` | Off-chain metadata JSON |
| `metadata/verdant.svg` | Token image (simple leaf mark) |
| `scripts/metadata-tool/` | Optional Node script to create on-chain metadata |

---

## Recommended Devnet URIs (GitHub raw)

After push to `main`:

**Image:**

```text
https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/verdant.svg
```

**JSON:** host `metadata/token.json` the same way once image URLs inside it point at the SVG above:

```text
https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/token.json
```

> Note: some wallets prefer PNG/JPEG over SVG. For mainnet, export a 512×512 PNG and upload to Arweave/IPFS.

---

## Option 1 — Script (preferred when tooling works)

```bash
export PATH="$HOME/.local/node/node-v20.18.1-darwin-x64/bin:$HOME/.local/solana/solana-release/bin:$PATH"
cd ~/Desktop/Verdant
node scripts/metadata-tool/create-metadata.mjs
```

Requires Devnet SOL on `keys/devnet-payer.json` (update authority = payer for Devnet).

---

## Option 2 — Manual / UI

Tools that can create fungible metadata (interfaces change):

- Metaplex / community token metadata UIs  
- Solana token creators that support “add metadata” for existing mint  

Use:

| Field | Value |
|-------|--------|
| Mint | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Name | Verdant |
| Symbol | VERD |
| URI | raw `token.json` URL above |
| Update authority | Devnet: payer; Mainnet: **Squads** |

---

## After creation

Record in `docs/devnet-addresses.md`:

| Item | Value |
|------|--------|
| Metadata account | |
| Metadata URI | |
| Create metadata tx | |

Verify in a Devnet-capable explorer/wallet that name **Verdant** and symbol **VERD** appear.

---

## Mainnet notes

1. Prefer **immutable** JSON on Arweave once finalized.  
2. Transfer **update authority** to Squads immediately.  
3. Do not put price promises or greenwash in `description` — use claims-safe one-liner only.
