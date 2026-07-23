# Verdant — Locked Decisions

**Version:** 0.1  
**Last updated:** 2026-07-23  
**Status:** Locked. Devnet complete; Phase 2 = signers + V-001 vendor + mainnet gate (`docs/PHASE-2.md`).

These decisions close the “immediate checklist” gate: no mainnet ceremony until this file is stable.

---

## Brand

| Decision | Value |
|----------|--------|
| Name | **Verdant** |
| Ticker | **VERD** |
| Narrative frame | Governance over a transparent impact + ecosystem-health treasury |
| Avoid | Meme carbon coin, “offset Solana by holding,” yield-from-green hype |

---

## Token

| Decision | Value |
|----------|--------|
| Chain | Solana |
| Standard | Classic **SPL Token** at launch (Token-2022 only if a later proposal requires it) |
| Decimals | **6** |
| Total supply | **100,000,000** VERD |
| Inflation / emissions | **None** |
| Mint authority after genesis | **Revoked** |
| Freeze authority | **Never set**, or **revoked** at genesis |
| Vote model at launch | **1 VERD = 1 vote** |
| Staking yield from treasury | **None** at launch |

---

## Allocations (100M VERD)

| Bucket | % | Tokens | Notes |
|--------|---|--------|--------|
| Community Treasury | 40% | 40,000,000 | Primary spend vault (impact + ecosystem health) |
| Ecosystem & grants stream | 15% | 15,000,000 | 3–4 year linear / epoch unlock under DAO |
| Community distribution | 15% | 15,000,000 | Contributors / partners; 12–24 months; not pure speculation drop |
| Team & core contributors | 15% | 15,000,000 | 12-month cliff, then 24–36 month linear vest |
| Strategic partners / advisors | 5% | 5,000,000 | Real impact/infra only; same or stricter vest |
| Liquidity & market ops | 5% | 5,000,000 | DAO-owned LP policy; transparent |
| Insurance / contingency | 5% | 5,000,000 | Legal, ops, security; strict policy |

---

## Governance stack

| Decision | Value |
|----------|--------|
| Voting | **Realms** (or equivalent SPL governance) |
| Treasury execution | **Squads** multisig |
| Target signer set | **5–7** signers |
| Example threshold | **4-of-7** or **5-of-7** (finalize in governance-setup) |
| Temporary council | Optional first **90 days** for parameter tuning only; document if used |
| Timelock (large spends) | **24–72 hours** after pass |

---

## Impact & integrity

| Decision | Value |
|----------|--------|
| Impact mechanism | Treasury spends only — never “holding = impact” |
| First action | **V-001** — one small, fully verifiable spend (USDC/SOL budget) |
| Proof standard | Public proof package under `proofs/` for every material spend |
| Reporting | Monthly treasury snapshot; quarterly impact & spend report |
| Greenwash policy | See `docs/claims-policy.md` |

---

## Network path

| Decision | Value |
|----------|--------|
| Order | **Devnet full loop → then mainnet** |
| Mainnet gate | Checklist in `CHECKLIST.md` fully complete |

---

## Explicit non-goals (v0.1)

- No transfer tax / reflection mechanics at launch  
- No ve-tokenomics at launch  
- No CEX-first or influencer “100x green” launch  
- No unaudited “we planted trees” as sole proof  
- No mint reserved for future “impact printing”

---

## Amendment log

| Date | Change | Author |
|------|--------|--------|
| 2026-07-23 | Initial locked decisions | Verdant draft |
