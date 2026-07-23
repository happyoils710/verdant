# Devnet addresses

**Network:** devnet  
**Generated:** 2026-07-23T17:39:43.007Z  
**Ceremony:** mint → metadata → supply → revoke mint authority

## Canonical Devnet mint (with metadata)

| Item | Value |
|------|--------|
| Payer | `7BQBEgo7RwGhrpa71FED1FQhiGQBPfEH6dGADGuGLjBi` |
| VERD mint | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Metadata PDA | `DAr4dr6QgJ6dsd3S7tD5pUVCSygVc8BWukeHBZRrUdnr` |
| Metadata URI | `https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/token.json` |
| Token account (full supply) | `FtEXuBZn6vSwtPbPvDQZXBxXXikxzqfBviFFwRveuRdg` |
| Supply | 100000000 |
| Decimals | 6 |
| Mint authority | **revoked** |
| Freeze authority | **none** |
| Explorer (mint) | https://explorer.solana.com/address/9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD?cluster=devnet |
| Explorer (metadata) | https://explorer.solana.com/address/DAr4dr6QgJ6dsd3S7tD5pUVCSygVc8BWukeHBZRrUdnr?cluster=devnet |

## Transaction signatures

| Step | Signature |
|------|-----------|
| Create mint | `4erY4p4bw6Kx752F6xfiE7jBb5E1qBhc3iKMrYxrubUdwzDupM5gNpqPL1urVhh7Me7vGejwUQRPYbCLmkcgiMD6` |
| Create metadata | `21rMu9qyxdF2S1S15Pa8qVvkaVAzJ6rR1GF1nobkhAczHYHeA553PsGahfck9iEXzD3FKCudgooZP5dC6u23SRio` |
| ATA + mint 100M | `3hKyAaLXH5pzDtPzRZ5usKmUSexNyRK4MecjdT8uqhy7NqKQfLHhN1DFvEd11CcD97JWN8tHdhYcQhKwfugckteq` |
| Revoke mint authority | `3nnsMrHUcG8JCJWavKL3jVMSpQaVQ5fhRtvn1ML4ss7nc4qKwmykgajjkUXDEtBH2QShCdhc62pbJkhRj8PD6aLH` |

## Earlier rehearsal mint (supply-only; no metadata)

Mint authority was revoked before metadata could be attached — kept for history.

| Item | Value |
|------|--------|
| Mint | `Co3Zir8MhuFMFwxBMCXPwRE6hYLBQMoLNijLaudjgstH` |
| Token account | `FyszpE8opZt2WCRMFnDzg5L6jM8aGwN7hG4H69m6zmEM` |
| Note | Lesson: always create metadata **before** revoking mint authority |

## Next

1. Squads multisig practice — see `docs/squads-realms-walkthrough.md`
2. Realms realm practice — same doc
3. Mainnet: same order (metadata before revoke); update authority → Squads

## Footguns

- Public RPC airdrop 429 → https://faucet.solana.com
- Do not commit `keys/*.json`
- Create metadata **before** mint authority revoke
