# Verdant — Immediate Checklist

Track the pre-mainnet week. Do not start mainnet mint, paid marketing, or impact claims until the exit gates below are green.

```text
[x] 0.x Decisions locked (DECISIONS.md)
[x] 1.x Tokenomics + claims policy published
[x] 2.x Repo docs: charter, spend-policy, proposal-template (+ V-000, mainnet runbook)
[ ] 3.x Squads signers confirmed + Realms params written
[x] 4.x Devnet mint + revoke (metadata/Squads/Realms still open)
[ ] 5.x V-001 counterparty + fund Impact vault
```

See also: [docs/NEXT-STEPS.md](./docs/NEXT-STEPS.md).

---

## 0. Decisions locked

| # | Task | Status | Notes |
|---|------|--------|--------|
| 0.1 | Name/ticker Verdant / VERD | [x] | See DECISIONS.md |
| 0.2 | Supply 100M, 6 decimals, fixed | [x] | |
| 0.3 | Allocations confirmed | [x] | |
| 0.4 | Mint revoked; freeze none/revoked | [x] | |
| 0.5 | Squads + Realms stack | [x] | |

**Exit gate:** `DECISIONS.md` stable.

---

## 1. Brand + tokenomics docs

| # | Task | Status | Notes |
|---|------|--------|--------|
| 1.1 | Tokenomics table published | [x] | `docs/tokenomics.md` |
| 1.2 | Vesting rules written | [x] | |
| 1.3 | What VERD is / isn’t | [x] | README + claims |
| 1.4 | Forbidden claims list | [x] | `docs/claims-policy.md` |

**Exit gate:** Single source of truth; no conflicting % tables.

---

## 2. Charter + spend policy on GitHub

| # | Task | Status | Notes |
|---|------|--------|--------|
| 2.1 | Repo structure created | [x] | Root: `Desktop/Verdant` |
| 2.2 | Charter | [x] | `docs/charter.md` |
| 2.3 | Spend policy v0.1 | [x] | `docs/spend-policy.md` |
| 2.4 | Eligible-assets note | [x] | In spend policy |
| 2.5 | README | [x] | |
| 2.6 | Disclaimer | [x] | README |
| 2.7 | V-000 policy proposal | [x] | `proposals/V-000-ratify-charter.md` |
| 2.8 | Mainnet runbook | [x] | `docs/mainnet-runbook.md` |
| 2.9 | Signer invite template | [x] | `docs/signer-invite.md` |
| 2.10 | Push public GitHub remote | [x] | https://github.com/happyoils710/verdant |

**Exit gate:** Public links ready; mark **Draft v0.1 — ratify as V-000**.

---

## 3. Squads signers + Realms admin

| # | Task | Status | Notes |
|---|------|--------|--------|
| 3.1 | List 5–7 candidate signers | [ ] | Fill `docs/governance-setup.md` |
| 3.2 | Role mix (ops, tech, independent, impact) | [ ] | |
| 3.3 | Threshold chosen | [ ] | e.g. 4-of-7 |
| 3.4 | Signer add/remove policy | [ ] | Draft in governance-setup |
| 3.5 | Collect Devnet + Mainnet pubkeys | [ ] | |
| 3.6 | Public signer roles page | [ ] | |
| 3.7 | Realm authority named | [ ] | |
| 3.8 | Draft governance params | [x] | Defaults in governance-setup; tune on Devnet |
| 3.9 | Council vs pure token (90 days) | [ ] | Decide |
| 3.10 | Proposal categories | [x] | In spend-policy / template |

**Exit gate:** Every signer has said yes and provided a pubkey.

---

## 4. Devnet full loop

| # | Task | Status | Notes |
|---|------|--------|--------|
| 4.1 | Devnet SOL funded | [ ] | |
| 4.2 | Tooling installed | [ ] | solana, spl-token, wallets |
| 4.3 | Runbook ready | [x] | `docs/devnet-runbook.md` |
| 4.4 | Create mint (6 decimals) | [x] | Canonical: `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| 4.5 | Mint 100M to test allocations | [x] | Account `FtEXuBZn6vSwtPbPvDQZXBxXXikxzqfBviFFwRveuRdg` |
| 4.6 | Attach metadata | [x] | PDA `DAr4dr6QgJ6dsd3S7tD5pUVCSygVc8BWukeHBZRrUdnr` |
| 4.7 | Revoke mint authority | [x] | After metadata |
| 4.8 | Freeze authority none/revoked | [x] | Never set |
| 4.9 | Create Squads multisig | [ ] | |
| 4.10 | Labeled vaults | [ ] | Impact / Public Goods / Ops |
| 4.11 | Practice transfer + memo | [ ] | |
| 4.12 | Practice rejection | [ ] | |
| 4.13 | Create Realms realm | [ ] | |
| 4.14 | Deposit/vote with test VERD | [ ] | |
| 4.15 | Pass policy proposal | [ ] | |
| 4.16 | Pass spend proposal | [ ] | |
| 4.17 | Fail a bad proposal | [ ] | |
| 4.18 | Fill runbook with addresses | [ ] | |
| 4.19 | Note footguns | [ ] | |
| 4.20 | Time the ceremony | [ ] | |

**Exit gate:** Mint → metadata → revoke → Squads → Realms → sample spend works end-to-end.

---

## 5. Define V-001

| # | Task | Status | Notes |
|---|------|--------|--------|
| 5.1 | Choose track A or B | [ ] | See `proposals/V-001-draft.md` |
| 5.2 | Set USDC/SOL budget | [ ] | |
| 5.3 | Name counterparty + proof type | [ ] | |
| 5.4 | Full proposal from template | [ ] | |
| 5.5 | Feasibility &lt; 30 days | [ ] | |

**Exit gate:** One concrete action, priced in USDC/SOL, with a public proof plan.

---

## Explicitly not this week

- [ ] Mainnet mint — **blocked** until 0–5 complete  
- [ ] Paid marketing / KOL blasts  
- [ ] CEX conversations as a priority  
- [ ] Complex ve-tokenomics  
- [ ] Large credit portfolios  
- [ ] Claiming impact before V-001 is executed and proven  

---

## Definition of complete

You can answer **yes** to all:

1. Tokenomics and claims policy are public and consistent.  
2. Charter + spend policy v0.1 are in this repo.  
3. Multisig roster + threshold + Realms params are written; signers confirmed.  
4. Devnet loop works and addresses are recorded.  
5. V-001 is one concrete action with budget and proof plan.
