# Verdant — Next Steps

**Repo root:** `Desktop/Verdant`  
**Last updated:** 2026-07-23

Ordered work after docs scaffold. Check off as you go; detail lives in `CHECKLIST.md`.

---

## Done

- [x] Lock brand: Verdant / VERD  
- [x] Tokenomics + decisions  
- [x] Charter, spend policy, claims policy  
- [x] Proposal template  
- [x] Governance setup outline  
- [x] Devnet runbook  
- [x] Mainnet runbook  
- [x] V-000 policy proposal draft  
- [x] V-001 first-action draft (needs track + budget)  
- [x] Metadata JSON template  
- [x] Flattened repo at `Desktop/Verdant`

---

## Now (human actions)

### 1. Publish the repo

```bash
cd ~/Desktop/Verdant
# create empty GitHub repo "verdant" (or verdant-dao), then:
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

- [ ] Remote added and pushed  
- [ ] Repo is **public** (legitimacy)  
- [ ] Update `metadata/token.json` GitHub URLs after push  

### 2. Recruit signers (blocker for real treasury)

- [ ] List 5–7 candidates  
- [ ] Send `docs/signer-invite.md`  
- [ ] Fill table in `docs/governance-setup.md`  
- [ ] Choose threshold (4-of-7 or 5-of-7)  
- [ ] Decide council vs pure token for first 90 days  

### 3. Pick V-001 track

Open `proposals/V-001-draft.md`:

- [ ] Track A (retire credits/RECs) **or** Track B (OSS/public goods grant)  
- [ ] Set USDC/SOL max budget  
- [ ] Name counterparty + proof type  
- [ ] Confirm &lt;30 day feasibility  

### 4. Devnet rehearsal

Follow `docs/devnet-runbook.md` end-to-end:

- [ ] Mint → metadata → revoke → Squads → Realms → sample spend  
- [ ] Paste addresses into runbook + README  
- [ ] Log footguns  

### 5. Fund path for real impact (not VERD-only)

V-001 needs **USDC or SOL** in a vault. Plan how that cash enters the treasury (personal seed, raise, grant, etc.) **without** forbidden claims.

- [ ] Written plan for initial USDC/SOL  
- [ ] Ops vs Impact split clear  

---

## Then (mainnet)

1. Pre-flight `docs/mainnet-runbook.md`  
2. Ceremony: mint, allocate, **revoke**, metadata, Squads, Realms, modest LP  
3. Publish addresses same day  
4. Pass **V-000**, then **V-001**  
5. Publish `proofs/V-001/`  

---

## Optional polish (anytime)

- [ ] Logo / token image → upload + fix `metadata/token.json`  
- [ ] Simple static site (charter + addresses + proofs)  
- [ ] Git tag `docs-v0.1` when V-000 passes  
- [ ] Counsel review of public distribution language  
- [ ] Quarterly report template  

---

## Do not do yet

- Mainnet mint before Devnet success  
- Paid “100x green” marketing  
- Impact claims without `proofs/`  
- Single-founder 1-of-1 treasury control presented as a DAO
