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

## SPL Governance realm (Devnet) — created via CLI

> **Why CLI?** Realms V2 (`v2.realms.today`) has **no Devnet network option** and redirects away from the old `?cluster=devnet` UI. Squads still has Devnet UI; Realms practice is on-chain for now.

| Item | Value |
|------|--------|
| Realm name | `Verdant` |
| Realm address | `91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay` |
| Governance | `nYMAhcGy5bNZDkxdMTmgt5TrihkddEvfbF157Zfh9vs` |
| Native treasury | `Bm42KJ8Q1EWEC7FWQ12atrxH5WhPZBrnV7TuLedc7p1` |
| Community mint | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Governance program | `GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw` |
| Create realm tx | `2cQ8i4JHeqLSEQF85LVg5fb4ugavyh1DvK4hPfMQhF599ZN63ZEy7VFVfszo8kh34FbErc1SDguMTF1TYRGVrp62` |
| Deposit + TOR tx | `Ctbk6wXtAjZqvmso3ihVCnJ8qdjYHgJfam4KMJWr84hWnGdL9KYFV8dn98Cz6GxgD1rwX7UM6pm3PmMmVA5wQVW` |
| Governance + treasury tx | `4buiRnYaGKuHKz9zTBiLyC5AxoTFVKRDFVc5oGT1k7Y9tEsmY5KisevEKsTX7jgDjrLgASdc8W3T8vW3nyArFVpR` |

### Explorer

- Realm: https://explorer.solana.com/address/91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay?cluster=devnet
- Governance: https://explorer.solana.com/address/nYMAhcGy5bNZDkxdMTmgt5TrihkddEvfbF157Zfh9vs?cluster=devnet

### What this means for you

1. **You are not missing a hidden Devnet button** — V2 simply does not expose Devnet.
2. Focus browser work on **Squads Devnet**: https://devnet.squads.so/squads
3. **Mainnet Realms**: use https://v2.realms.today after mainnet mint (with Devnet lesson applied).
4. On-chain Devnet realm already exists for Verdant (see table above).

## Squads (Devnet) — practice complete

| Item | Value |
|------|--------|
| Status | **User executed a transaction successfully** |
| UI | https://devnet.squads.so/squads |
| Wallet | Solflare Devnet `5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3` |
| Squad address | `BGXpoH7Z7m6ABQmzMnTvoTbCCayeVgJ1KxBvJ5Z9rWeJ` |
| Practice execute tx | _paste explorer link if saved_ |

**Meaning:** Multisig create + approve/execute path works. Production mainnet will use **4-of-7** with real signers (not 1-of-1).
| Explorer (Squads) | https://explorer.solana.com/address/BGXpoH7Z7m6ABQmzMnTvoTbCCayeVgJ1KxBvJ5Z9rWeJ?cluster=devnet |
