# V-001 — First Treasury Action (Draft → recommended)

**Status:** Recommended defaults locked — replace counterparty blanks before vote  
**Category:** **A — Verifiable sustainability**  
**Author:** Verdant core (draft)  
**Date:** 2026-07-23  

> **Rule:** First action must be small, boring, completable in &lt; 30 days, and fully provable. Budget in **USDC or SOL**, not unstructured VERD market dumps.

---

## Decision: track selection

| Option | Status |
|--------|--------|
| **Track A — Verifiable sustainability** | **SELECTED (recommended)** |
| Track B — Public goods grant | Deferred to V-002+ |

**Why Track A first:** Proves the full anti-greenwash pipeline (proposal → payment → serials/retirement → `proofs/V-001/`) before larger narrative. Track B remains excellent for V-002 once the proof habit exists.

---

## 1. Summary

V-001 authorizes the Verdant **Impact** vault to spend up to **$500 USDC** (or SOL equivalent at execution) to **purchase and retire** a small volume of high-integrity environmental instruments (carbon credits **or** RECs) from a named registry/vendor, and to publish full serials, retirement proof, and transaction signatures under `proofs/V-001/`.

No claim will be made that VERD or Solana is carbon-neutral. The only claim is: **this specific retirement occurred**, with public proof.

---

## 2. Amount and asset

| Field | Value |
|-------|--------|
| Amount (max) | **$500 USDC** (or SOL equivalent) |
| Asset | USDC preferred; SOL if USDC rail unavailable |
| Source vault | **Impact** |
| One-time or streaming | One-time |
| Underspend OK? | Yes — spend only what the instrument costs; return remainder |

**Why $500:** Large enough to complete a real registry purchase; small enough to execute quickly and absorb learning without reputational risk.

---

## 3. Recipient / counterparty

| Field | Value |
|-------|--------|
| Name | _TBD — fill before Realms vote_ |
| Wallet / payment rail | _TBD_ |
| Registry or platform | _Must be named_ (e.g. a recognized carbon or REC tracking system) |
| Website | _TBD_ |
| Instrument type | Carbon credit retirement **or** REC retirement (choose one) |
| Methodology / vintage | Disclosed in final proposal |

**Acceptance rule:** If serials or retirement certificate cannot be obtained, **do not execute**.

---

## 4. Expected outcome

| Field | Value |
|-------|--------|
| Deliverable | Permanent retirement (or equivalent final claim) of purchased instrument volume |
| Timeline | ≤ **30 days** from execution payment |
| Success criteria | Public serials + retirement proof + payment tx(s) in `proofs/V-001/` |

---

## 5. Verification and proof plan

| Artifact | Location |
|----------|----------|
| Proposal + vote link | Realms (after mainnet) |
| Payment tx | Explorer link |
| Retirement cert / serials | `proofs/V-001/` |
| Short write-up | `proofs/V-001/README.md` |

Proof published within **14 days** of payment.

**Announcement language (allowed):**  
> “Verdant Treasury executed V-001: retired [volume] via [registry]. Proof: [link].”

**Forbidden:** “VERD is carbon negative,” “we offset Solana,” “holders are climate positive.”

---

## 6. Charter fit

- Mandate: **verifiable sustainability** (Category A)  
- Anti-greenwash: claim is limited to this executed retirement  
- Alternatives considered: Track B OSS grant — deferred so first proposal trains the proof pipeline  

---

## 7. Conflicts of interest

_None known_ — update if any signer or author is affiliated with the vendor/registry.

---

## 8. Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Low-integrity credits | Name registry + methodology before vote; reject if serials unavailable |
| Vendor delay | 30-day cap; report partial failure publicly rather than invent proof |
| Overclaim in socials | Claims policy; proof-first wording only |
| No USDC in vault yet | Block execution until Impact vault funded (see fund plan) |

---

## 9. Execution plan

1. Fund Impact vault with ≥ $500 USDC (or SOL buffer)  
2. Finalize counterparty section of this file → rename to `V-001-retire-<slug>.md`  
3. Pass Realms vote (after V-000)  
4. Squads execute with memo `V-001`  
5. Publish `proofs/V-001/` within 14 days  
6. Optional short public note linking only to proof  

---

## 10. Feasibility checklist

- [ ] Counterparty identified and can deliver serials/retirement in &lt; 30 days  
- [ ] Payment method works from Squads  
- [ ] Owner assigned for `proofs/V-001/` write-up  
- [ ] ≥ $500 USDC (or SOL) in Impact vault  
- [ ] Announcement draft uses claims-safe language  

---

## Funding note (pre-mainnet)

V-001 **does not** spend VERD from thin air. Core / community must seed the Impact vault with stablecoins or SOL via a disclosed, non-hype transfer (e.g. personal seed labeled “treasury seed for V-001”). Document seed tx in monthly snapshot.

---

## Realms short description (when ready)

```text
V-001: Retire high-integrity credits/RECs (max $500 USDC)

Vault: Impact
Proof: registry serials + retirement cert + payment tx
No network-wide neutrality claims
```

---

## Track B parking lot (V-002+)

Small milestone grant to open-source climate/Solana tooling — use after V-001 proof pack exists.
