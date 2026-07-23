# Proofs

Public proof packages for executed Verdant treasury actions.

## Layout

```text
proofs/
  README.md                 ← this file
  V-001/
    README.md               ← summary: proposal, txs, outcomes, links
    ... supporting files    ← certificates, exports, reports (or links)
  V-001-test/               ← Devnet only; label NOT REAL IMPACT
```

## Rules

1. Every material spend gets a folder `V-XXX` matching the proposal ID.  
2. `README.md` inside must include: amount, asset, recipient, explorer tx links, and verification artifacts.  
3. Prefer open formats (PDF/PNG for certs, markdown for reports). Large files may be linked (Arweave/IPFS) with content hashes noted.  
4. Never claim impact without a folder here (or an immutable equivalent link recorded in the quarterly report).  
5. Devnet rehearsals must say **DEVNET TEST — NOT REAL IMPACT** in the first line.

## Template for `proofs/V-XXX/README.md`

```markdown
# V-XXX Proof Package

**Status:** Complete / Partial  
**Date executed:** YYYY-MM-DD  
**Category:** A / B / C / D

## Summary
[2–4 sentences]

## Payment
- Asset/amount:
- From vault:
- Tx signature(s):
- Memo:

## Delivery / verification
- [serials, retirement ID, repo, report…]

## Links
- Proposal:
- Discussion:

## Notes
[limitations, lessons]
```
