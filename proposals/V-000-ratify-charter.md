# V-000 — Ratify Charter, Spend Policy, and Claims Policy v0.1

**Status:** Ready for discussion → Realms vote after mainnet go-live  
**Category:** Policy  
**Author:** Verdant core (draft)  
**Date:** 2026-07-23  

---

## 1. Summary

This proposal asks VERD holders to **ratify** the Verdant constitutional documents at version **0.1**, establishing the official rules for treasury purpose, spending, and public claims until amended by later governance.

Documents ratified:

| Document | Path |
|----------|------|
| Charter | `docs/charter.md` |
| Spend policy | `docs/spend-policy.md` |
| Claims policy | `docs/claims-policy.md` |
| Tokenomics (reference) | `docs/tokenomics.md` |
| Locked decisions (reference) | `DECISIONS.md` |

Tokenomics and fixed supply are **already enforced on-chain** by mint authority revocation; this proposal does not re-mint or reallocate genesis supply. It establishes **policy legitimacy** for how the DAO spends and communicates.

---

## 2. Amount and asset

| Field | Value |
|-------|--------|
| Amount | **None** (policy only) |
| Asset | N/A |
| Source vault | N/A |

---

## 3. Recipient / counterparty

N/A — no payment.

---

## 4. Expected outcome

1. Charter v0.1 is the official mission statement of Verdant DAO.  
2. Spend Policy v0.1 governs treasury categories, proof requirements, and eligible-asset posture.  
3. Claims Policy v0.1 binds official channels against greenwashing language.  
4. Future material changes require a new **Policy** proposal with a version bump.  

---

## 5. Verification and proof plan

| Artifact | Location |
|----------|----------|
| Vote result | Realms proposal link (fill after) |
| Document commit / tag | Git tag `docs-v0.1` (recommended at ratification) |
| Proof package | `proofs/V-000/README.md` — link to commit SHA + Realms URL |

No environmental claim is made by V-000 itself.

---

## 6. Charter fit

Housekeeping required before **V-001** impact or public-goods spends. Establishes “proof over claims” as binding policy.

---

## 7. Conflicts of interest

None for policy ratification. Authors of v0.1 drafts should still disclose if they are multisig signers when voting.

---

## 8. Risks

| Risk | Mitigation |
|------|------------|
| Docs later diverge from vote | Tag git at ratification; amend only via proposal |
| Ambiguity in v0.1 | Prefer under-claim; refine via follow-up Policy proposals |
| Legal characterization of DAO | Seek counsel; V-000 is governance process, not legal entity formation |

---

## 9. Execution plan

1. Publish this proposal and open discussion (Discord/GitHub as available).  
2. Create Realms proposal with this summary.  
3. On pass:  
   - Record Realms URL + commit SHA in `proofs/V-000/README.md`  
   - Optionally `git tag docs-v0.1`  
   - Update README status line from “Draft” to “Ratified v0.1 (V-000)”  
4. Proceed to **V-001** only after V-000 passes (or in same voting window if community prefers sequential execution).  

---

## 10. Links

- Charter: `docs/charter.md`  
- Spend policy: `docs/spend-policy.md`  
- Claims policy: `docs/claims-policy.md`  
- Proposal template: `docs/proposal-template.md`  

---

## Realms short description

```text
V-000: Ratify Verdant Charter, Spend Policy, and Claims Policy v0.1

Amount: none (policy)
Effect: bind official treasury purpose, spend rules, and anti-greenwash claims
Next: enables V-001 first proven treasury action
```

---

## Voting recommendation (non-binding)

**Yes** if you agree Verdant should operate as a governance + transparent treasury project under these documents.  
**No** if you want material edits first — open a PR/discussion and re-propose as v0.2.
