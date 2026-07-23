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

- [x] Remote added and pushed — https://github.com/happyoils710/verdant  
- [x] Repo is **public** (legitimacy)  
- [x] Update `metadata/token.json` GitHub URLs after push  

### 2. Recruit signers (blocker for real treasury)

- [x] Threshold locked: **4-of-7**  
- [x] No council (pure token DAO)  
- [x] Recruitment runbook: `docs/signer-recruitment.md`  
- [ ] List 7+ candidates in scratchpad  
- [ ] Send `docs/signer-invite.md`  
- [ ] Fill table in `docs/governance-setup.md`  

### 3. Pick V-001 track

- [x] **Track A** selected (retire credits/RECs)  
- [x] Budget max **$500 USDC**  
- [x] Fund plan: `docs/fund-plan.md`  
- [ ] Name counterparty + registry before vote  
- [ ] Confirm &lt;30 day feasibility with vendor  

### 4. Devnet rehearsal

- [x] Solana CLI installed (`~/.local/solana/solana-release`)  
- [x] Devnet payer created: `7BQBEgo7RwGhrpa71FED1FQhiGQBPfEH6dGADGuGLjBi`  
- [x] Mint script: `scripts/devnet-mint.sh`  
- [x] Funded via faucet (5 SOL)  
- [x] Canonical mint (metadata + revoke): `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`  
- [x] Metadata PDA: `DAr4dr6QgJ6dsd3S7tD5pUVCSygVc8BWukeHBZRrUdnr`  
- [x] Addresses in README + `docs/devnet-addresses.md`  
- [x] Walkthroughs for Squads/Realms + signer invite  
- [ ] **You:** Squads multisig practice (browser)  
- [ ] **You:** Realms realm practice (browser)  
- [ ] **You:** Send signer invites

### 5. Fund path for real impact (not VERD-only)

- [x] Written plan: `docs/fund-plan.md`  
- [ ] Actually seed Impact vault ≥ $500 USDC before V-001 execution

---

## Then (mainnet)

1. Pre-flight `docs/mainnet-runbook.md`  
2. Ceremony: mint, metadata, allocate, **revoke mint**, Squads, Realms, modest LP  
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
