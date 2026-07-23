# Devnet addresses (auto-written by scripts/devnet-mint.sh)

**Network:** devnet  
**Generated:** 2026-07-23T17:33:37Z

| Item | Value |
|------|--------|
| Payer | `7BQBEgo7RwGhrpa71FED1FQhiGQBPfEH6dGADGuGLjBi` |
| VERD mint | `Co3Zir8MhuFMFwxBMCXPwRE6hYLBQMoLNijLaudjgstH` |
| Supply | 100000000 |
| Decimals | 6 |
| Mint authority | **revoked** |
| Explorer (mint) | https://explorer.solana.com/address/Co3Zir8MhuFMFwxBMCXPwRE6hYLBQMoLNijLaudjgstH?cluster=devnet |

## Transaction signatures

| Step | Signature |
|------|-----------|
| Create mint | `37oK7VPMujL5io6dYUiaPiaENS6dQnuox37896B4gtdsAuv358KxK53cWmJZVPMpDLoGc9KcFbghPdkn4cXySQnv` |
| Create token account | `5YBLxWv4mygTGV7tvnew8786xkoC4qhjYGgktkPjm68mWFDxD4UrWwWEFdjMbPYgJRd9ox8H9oGgxyxSLBUTZUSC` |
| Mint 100M | `51M2GKpfGJxKBUJMtaUCNp6ty1MUBNnqscw8c2nnTcrWUqBECVhpj9AWFZNHg7A7dFpDuygA26PSkgMv313BWYUa` |
| Revoke mint authority | `23vM8TX1ynozVKGeRPgrytcRFQow4Zxqv11y2RqWQFcFrbQMKeDtuX48SNck7VJ1UJbXznacE1TnXQYhKSfa5XvR` |

## Token account

| Item | Value |
|------|--------|
| ATA / token account | `FyszpE8opZt2WCRMFnDzg5L6jM8aGwN7hG4H69m6zmEM` |
| Holds | 100,000,000 VERD (full supply for rehearsal) |

## Next (manual / UI)

1. Attach Metaplex metadata (name Verdant, symbol VERD, URI → metadata/token.json hosted)
2. Create Squads multisig on Devnet; practice transfer with memo `V-001-test`
3. Create Realms realm governed by this mint
4. Record Squads + Realms IDs in README and this file

## Footguns

- Public RPC airdrop often 429 — use https://faucet.solana.com with GitHub login
- Do not commit `keys/*.json`
