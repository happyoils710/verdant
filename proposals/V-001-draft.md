# V-001 — First Treasury Action (Draft)

**Status:** Draft — choose Track A or B, fill amounts, then finalize  
**Category:** _TBD — A or B_  
**Author:** _TBD_  
**Date:** _TBD_

> **Rule:** First action must be small, boring, completable in &lt; 30 days, and fully provable. Budget in **USDC or SOL**, not unstructured VERD market dumps.

---

## Decision: pick one track

### Track A — Verifiable sustainability (recommended for “impact first” narrative)

| Field | Draft |
|-------|--------|
| Action | Purchase and **retire** a small volume of high-integrity carbon credits **or** RECs |
| Why first | Proves proof pipeline (serials, retirement, payment tx) |
| Risk | Low quality credit markets — mitigate by naming registry + methodology up front |

### Track B — Public goods with co-benefits (recommended for “builders first” narrative)

| Field | Draft |
|-------|--------|
| Action | Small milestone-based grant to open-source climate/Solana tooling or education |
| Why first | Strengthens ecosystem; proof = public repo + milestones |
| Risk | Non-delivery — mitigate with 50% upfront / 50% on milestone |

**Selection:** [ ] Track A    [ ] Track B  

---

## 1. Summary

_One paragraph after track is chosen._

Example (Track A):  
> V-001 authorizes the Verdant Impact vault to spend up to **$___ USDC** to purchase and retire **___** [credits/RECs] via **[registry/vendor]**, and to publish full serials, retirement proof, and transaction signatures under `proofs/V-001/`.

Example (Track B):  
> V-001 authorizes the Public Goods vault to grant **$___ USDC** to **[project]** for **[milestone 1 deliverable]**, paid to **[wallet]**, with public acceptance criteria and proof under `proofs/V-001/`.

---

## 2. Amount and asset

| Field | Value |
|-------|--------|
| Amount (max) | $______ USDC (or ______ SOL) |
| Asset | USDC / SOL |
| Source vault | Impact (A) / Public Goods (B) |
| One-time or streaming | One-time |

**Guidance:** Prefer a budget you can execute and prove without stretching ops — e.g. hundreds to low thousands USD equivalent for a first action, scaled to actual treasury cash.

---

## 3. Recipient / counterparty

| Field | Value |
|-------|--------|
| Name | |
| Wallet / payment rail | |
| Registry or repo | |
| Website | |

---

## 4. Expected outcome

| Field | Value |
|-------|--------|
| Deliverable | |
| Timeline | ≤ 30 days from execution |
| Success criteria | |

**Track A success:** Retirement certificate + serials public.  
**Track B success:** Milestone checklist green + public artifact.

---

## 5. Verification and proof plan

| Artifact | Location |
|----------|----------|
| Proposal + vote link | Realms (TBD) |
| Payment tx | Explorer link |
| Retirement cert / serials OR grant report | `proofs/V-001/` |
| Short write-up | `proofs/V-001/README.md` |

Proof published within **14 days** of payment.

---

## 6. Charter fit

- Mandate: sustainability (A) or public goods (B)  
- Anti-greenwash: we claim **only** this specific executed action, not token-wide neutrality  
- Alternatives considered: _TBD_  

---

## 7. Conflicts of interest

_None known_ / _disclose_

---

## 8. Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Counterparty delay | Cap timeline; partial payment structure (B) |
| Low-integrity instrument (A) | Pre-declare registry standards; reject if serials unavailable |
| Overclaim in socials | Claims policy; proof-first comms |

---

## 9. Execution plan

1. Finalize this draft → `proposals/V-001-<slug>.md`  
2. Fund Impact/Public Goods vault with USDC/SOL (not only VERD)  
3. Pass Realms vote  
4. Squads execute with memo `V-001`  
5. Publish `proofs/V-001/`  
6. Optional: short public note linking proof (no hype)

---

## 10. Feasibility checklist

- [ ] Counterparty can deliver proof in &lt; 30 days  
- [ ] Payment method works from Squads  
- [ ] Someone owns write-up + `proofs/` PR  
- [ ] Budget is USDC/SOL on hand  
- [ ] No forbidden claims in announcement draft  

---

## Realms short description (when ready)

```text
V-001: [Track A retire credits/RECs | Track B grant]

Amount: [x] USDC
Vault: [Impact | Public Goods]
Proof: serials+retirement | public milestone deliverable
```

---

## Notes

- Do **not** combine A and B into one oversized first proposal.  
- V-000 (ratify charter/policies) should pass **before** or **with** V-001.  
- Label any Devnet rehearsal as **TEST — NOT REAL IMPACT**.
