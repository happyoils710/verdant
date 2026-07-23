#!/usr/bin/env bash
# Verdant Devnet mint ceremony (Phases 1–2 of docs/devnet-runbook.md)
# Prerequisites: Solana CLI on PATH, Devnet SOL in keys/devnet-payer.json
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="${HOME}/.local/solana/solana-release/bin:${PATH}"
KEYPAIR="${ROOT}/keys/devnet-payer.json"
OUT="${ROOT}/docs/devnet-addresses.md"

if [[ ! -f "$KEYPAIR" ]]; then
  echo "Missing $KEYPAIR — run: solana-keygen new -o keys/devnet-payer.json"
  exit 1
fi

solana config set --url https://api.devnet.solana.com >/dev/null
solana config set --keypair "$KEYPAIR" >/dev/null

PAYER=$(solana-keygen pubkey "$KEYPAIR")
BAL=$(solana balance | awk '{print $1}')
echo "Payer: $PAYER"
echo "Balance: $BAL SOL"

need=$(echo "$BAL" | awk '{print ($1 < 0.5) ? 1 : 0}')
if [[ "$need" == "1" ]]; then
  echo ""
  echo "Need Devnet SOL. Fund this address, then re-run:"
  echo "  $PAYER"
  echo "  https://faucet.solana.com (network: Devnet)"
  exit 2
fi

echo "Creating mint (6 decimals)..."
MINT_OUT=$(spl-token create-token --decimals 6)
echo "$MINT_OUT"
MINT=$(echo "$MINT_OUT" | awk '/Creating token/{print $3}')
if [[ -z "${MINT:-}" ]]; then
  MINT=$(echo "$MINT_OUT" | grep -Eo '[1-9A-HJ-NP-Za-km-z]{32,44}' | head -1)
fi
echo "Mint: $MINT"

echo "Creating account + minting 100,000,000 VERD..."
spl-token create-account "$MINT"
spl-token mint "$MINT" 100000000

echo "Revoking mint authority..."
spl-token authorize "$MINT" mint --disable

echo "Display:"
spl-token display "$MINT"

# Supply check
SUPPLY=$(spl-token supply "$MINT" | awk '{print $1}')
echo "Supply: $SUPPLY"

cat > "$OUT" <<EOF
# Devnet addresses (auto-written by scripts/devnet-mint.sh)

**Network:** devnet  
**Generated:** $(date -u +%Y-%m-%dT%H:%M:%SZ)

| Item | Value |
|------|--------|
| Payer | \`$PAYER\` |
| VERD mint | \`$MINT\` |
| Supply | $SUPPLY |
| Decimals | 6 |
| Mint authority | **revoked** |
| Explorer (mint) | https://explorer.solana.com/address/${MINT}?cluster=devnet |

## Next (manual / UI)

1. Attach Metaplex metadata (name Verdant, symbol VERD, URI → metadata/token.json hosted)
2. Create Squads multisig on Devnet; practice transfer with memo \`V-001-test\`
3. Create Realms realm governed by this mint
4. Record Squads + Realms IDs in README and this file

## Footguns

- Public RPC airdrop often 429 — use https://faucet.solana.com with GitHub login
- Do not commit \`keys/*.json\`
EOF

echo ""
echo "Wrote $OUT"
echo "Done."
