# Phase 2 — From Devnet success to mainnet legitimacy

**Status:** Active  
**Devnet complete:** mint, metadata, Squads execute, on-chain realm  
**Do not mainnet-mint until the gate below is green.**

---

## Devnet snapshot (done)

| Component | Value |
|-----------|--------|
| VERD mint | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Squads | `BGXpoH7Z7m6ABQmzMnTvoTbCCayeVgJ1KxBvJ5Z9rWeJ` |
| Realms realm | `91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay` |
| Your practice wallet | `5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3` |
| Repo | https://github.com/happyoils710/verdant |

---

## Workstream A — Multisig signers (blocker for real treasury)

**Target:** 7 seats, **4-of-7**, public roles.

| Seat | Role | Your candidate | Sent? | Reply |
|------|------|----------------|-------|-------|
| 1 | Ops / coordinator | **You** | — | Confirmed |
| 2 | Technical | | | |
| 3 | Technical backup | | | |
| 4 | Independent | | | |
| 5 | Impact / domain | | | |
| 6 | Community / public goods | | | |
| 7 | Security / legal ops | | | |

**Minimum before mainnet ceremony:** **5 confirmed** including you + 1 independent + 1 tech.  
**Ideal:** full 7.

**Actions this week**

1. List 10 names (expect ~half yes).  
2. Send private messages from `docs/signer-invites-ready-to-send.md`.  
3. Post public call from `docs/signer-recruitment-public-post.md` (X + 1–2 Discords).  
4. Collect Devnet + Mainnet pubkeys.  
5. Fill `docs/governance-setup.md` roster.  
6. Optional: add 1–2 people to Devnet Squad for a multi-signer drill.

---

## Workstream B — V-001 counterparty (blocker for real impact)

**Locked:** Track A · max **$500 USDC** · proof = serials + retirement.

| Task | Status |
|------|--------|
| Choose instrument type (carbon **or** RECs) | [ ] |
| Shortlist 2 vendors/registries | [ ] |
| Confirm: can buy ≤ $500, get public retirement IDs in ≤ 30 days | [ ] |
| Payment rail (card/ACH/USDC/wire) works for a DAO/multisig later | [ ] |
| Fill section 3 of `proposals/V-001-draft.md` | [ ] |

**Guide:** `docs/v001-counterparty-guide.md`

**Rule:** If serials cannot be public, **reject** the vendor.

---

## Workstream C — Cash seed (blocker for V-001 execution)

| Task | Status |
|------|--------|
| Choose seed source (recommend founder personal seed) | [ ] |
| Set Impact seed ≥ **$500 USDC** | [ ] |
| Set Ops buffer ~**$200–500** | [ ] |
| Plan: seed **after** mainnet Squads exists (not to a random EOA long-term) | [ ] |

See `docs/fund-plan.md`.

---

## Workstream D — Mainnet ceremony (only after A has ≥5 signers)

**Order (learned on Devnet):**

1. Create mint (6 decimals)  
2. **Metadata** (name/symbol/URI)  
3. Mint 100M → allocation wallets / Squads vaults  
4. **Revoke mint authority**  
5. Mainnet Squads **4-of-7**  
6. Realms V2 realm (mainnet UI works)  
7. Modest LP from 5% bucket  
8. Publish all addresses same day  
9. **V-000** ratify policies  
10. **V-001** when USDC in Impact vault  

Full steps: `docs/mainnet-runbook.md`  
Script reference: `scripts/metadata-tool/full-devnet-ceremony.mjs` (same order)

---

## Mainnet go / no-go gate

All must be **yes**:

- [ ] ≥ 5 multisig signers confirmed with mainnet pubkeys  
- [ ] Threshold **4-of-7** (or 3-of-5 interim, documented)  
- [ ] V-001 counterparty shortlisted (can be finalized after mint, before V-001 vote)  
- [ ] Seed plan written (who pays USDC, when)  
- [ ] Claims policy still the only public language  
- [ ] Devnet ceremony footguns reviewed (metadata before revoke)  
- [ ] No hype launch marketing planned  

**Optional but wise:** counsel glance at public distribution language.

---

## This week’s priority order

```text
1. Send 5–10 signer invites
2. Shortlist V-001 vendors (even if buy is post-mainnet)
3. Decide seed amount/source
4. Only then schedule mainnet ceremony day
```

---

## Explicitly still not now

- Mainnet mint “just to have a coin”  
- Paid influencer campaigns  
- Claiming climate impact before `proofs/V-001/`  
- 1-of-1 mainnet Squad marketed as a DAO  
