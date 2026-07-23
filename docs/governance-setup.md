# Verdant Governance Setup

**Version:** 0.1  
**Stack:** Squads (treasury execution) + Realms (token voting)  
**Status:** Plan — fill signer tables before Devnet multisig creation

---

## Architecture

```text
VERD holders
    │  vote
    ▼
Realms (proposals, quorum, timelock)
    │  authorization / social + procedural binding
    ▼
Squads multisig (holds assets, executes transfers)
    │
    ├── Vault: Impact
    ├── Vault: Public Goods
    ├── Vault: Ops
    └── Vault: Contingency (+ VERD reserve accounts as needed)
```

**Principle:** Multisig is an **executor**, not a discretionary king. After Realms is live, material spends should map to passed proposals.

---

## Squads multisig

### Target configuration

| Parameter | v0.1 target |
|-----------|-------------|
| Members | 5–7 |
| Threshold | **4-of-7** or **5-of-7** (choose before create) |
| Networks | Devnet practice → Mainnet production |
| Public page | Roles published; wallets published |

### Signer roster (fill in)

| # | Role | Name / org | Devnet pubkey | Mainnet pubkey | Confirmed (Y/N) |
|---|------|------------|---------------|----------------|-----------------|
| 1 | Ops / coordinator | | | | N |
| 2 | Technical | | | | N |
| 3 | Technical backup | | | | N |
| 4 | Independent (non-founder) | | | | N |
| 5 | Impact / domain | | | | N |
| 6 | Community / public goods | | | | N |
| 7 | Optional seat | | | | N |

**Avoid:** 3-of-3 all founders.

### Signer policy

| Topic | Rule |
|-------|------|
| Add signer | Governance proposal + threshold of existing set |
| Remove signer | Governance proposal; emergency removal if key compromise (disclose in 72h) |
| Key hygiene | Hardware wallet preferred on mainnet; no shared hot seed |
| Availability | Signers respond to execution requests within agreed SLA (e.g. 72h) |

### Vault labels

| Vault | Purpose | Typical assets |
|-------|---------|----------------|
| **Impact** | Category A spends | USDC, SOL |
| **Public Goods** | Category B (+ C if useful) | USDC, SOL, streamed VERD |
| **Ops** | Category D | USDC, SOL (small) |
| **Contingency** | Emergency / legal / security | USDC, SOL; 5% VERD bucket custody |

### Ops / emergency caps (draft — finalize with numbers)

| Item | Draft rule |
|------|------------|
| Monthly ops without full vote | ≤ $X USDC (set X when treasury funded) |
| Emergency security move | Any size to cold/safe venue; disclose 72h |
| Impact buys without vote | **Not allowed** |

---

## Realms configuration

### Realm

| Field | Value |
|-------|--------|
| Name | Verdant |
| Governing token | VERD mint |
| Community type | Token-weighted |

### Draft parameters (tune on Devnet)

| Parameter | Starting suggestion | Notes |
|-----------|---------------------|--------|
| Min tokens to create proposal | 0.5%–1% of votable supply | Anti-spam; lower later |
| Voting duration | 3–7 days | Shorter for pure ops if council used |
| Quorum | 5%–10% of votable | Revisit at milestones |
| Approval threshold | Majority of yes vs yes+no (as Realms allows) | Document exact Realms setting |
| Timelock / hold-up | 24–72h for large spends | Encode in process even if manual |

### Council (optional first 90 days)

| Option | When to use |
|--------|-------------|
| **A. No council** | Pure token DAO from day one |
| **B. Temporary council** | Fast parameter fixes, not discretionary impact spending |

If **B**: publish council wallets, powers, and **sunset date**. Council must not replace V-001 legitimacy.

**Decision:** _[ ] A  [ ] B — choose before mainnet_

### Proposal categories (tags)

- `impact` — Category A  
- `public-goods` — Category B  
- `integrity` — Category C  
- `ops` — Category D  
- `policy` — Charter, spend policy, params  
- `emergency` — Retroactive ratification  

---

## Lifecycle of a spend

1. Author opens discussion + `proposals/V-XXX-*.md`  
2. Realms proposal created with template summary  
3. Vote passes (quorum + threshold)  
4. Timelock if large  
5. Squads members execute transfer(s) with memo `V-XXX`  
6. Proof published to `proofs/V-XXX/` within 14 days  
7. Monthly snapshot updated  

---

## Housekeeping proposals (first mainnet votes)

| ID | Title |
|----|--------|
| **V-000** | Ratify Charter v0.1 + Spend Policy v0.1 + Claims Policy v0.1 |
| **V-001** | First verifiable impact or public-goods action (see `proposals/V-001-draft.md`) |

---

## Public artifacts to publish at go-live

- [ ] Multisig address + threshold + member roles  
- [ ] Realms realm link  
- [ ] VERD mint + metadata URI  
- [ ] Vault addresses  
- [ ] This document (finalized params)  

---

## Addresses (fill after create)

| Item | Devnet | Mainnet |
|------|--------|---------|
| Squads multisig | | |
| Impact vault | | |
| Public Goods vault | | |
| Ops vault | | |
| Contingency vault | | |
| Realms realm | | |
| Realms governance program accounts | | |

---

## Amendments

Governance parameters change via **Policy** proposals. Update this file and bump version after each change.
