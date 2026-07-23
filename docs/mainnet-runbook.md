# Verdant Mainnet Runbook

**Version:** 0.1  
**Network:** `mainnet-beta`  
**Prerequisite:** Devnet runbook completed successfully (`docs/devnet-runbook.md`) and `CHECKLIST.md` sections 0–5 green.

> **Do not run this ceremony until Devnet rehearsal is done and all signers are confirmed.**

---

## Ceremony principles

1. **Cold process** — hardware wallets for mint authority and multisig signers where possible.  
2. **Scripted order** — no improvisation on ceremony day.  
3. **Revoke mint same session** as genesis minting.  
4. **Two-person check** — every address read aloud / compared before send.  
5. **Public within hours** — mint, multisig, realm, metadata URI on README + socials.

---

## Pre-flight (T-7 to T-1 days)

- [ ] Devnet E2E complete; footguns logged  
- [ ] Mainnet SOL funded for fees (payer + buffer)  
- [ ] Allocation destination addresses finalized and double-checked  
- [ ] Vesting plan documented (team/partners/community)  
- [ ] Squads member mainnet pubkeys collected  
- [ ] Metadata JSON + image uploaded (Arweave or IPFS); URI final  
- [ ] `metadata/token.json` placeholders replaced  
- [ ] Communication draft ready (claims-policy compliant)  
- [ ] Legal/counsel check if any public distribution language is used  
- [ ] Dry-read this runbook with at least one other person  

### Address sheet (fill before ceremony)

| Role | Address | Verified by |
|------|---------|-------------|
| Ceremony payer | | |
| Mint (created day-of) | | |
| Community Treasury | | |
| Ecosystem & grants | | |
| Community distribution | | |
| Team vesting | | |
| Partners vesting | | |
| Liquidity | | |
| Contingency | | |

---

## Phase 1 — Create mint and supply

```bash
solana config set --url https://api.mainnet-beta.solana.com
solana config get
solana balance
```

1. [ ] Create mint with **6 decimals**  
2. [ ] Create token accounts for each allocation bucket  
3. [ ] Mint **exactly** 100,000,000 VERD total  
4. [ ] Transfer to allocation accounts per `docs/tokenomics.md`  
5. [ ] Verify balances sum to 100,000,000  

```bash
# Illustrative — use your verified keypairs and addresses only
spl-token create-token --decimals 6
spl-token create-account <MINT>
spl-token mint <MINT> 100000000
# transfers to vaults / vesting accounts...
spl-token display <MINT>
```

- [ ] Record mint address → README  

---

## Phase 2 — Revoke authorities (same session)

```bash
spl-token authorize <MINT> mint --disable
# freeze never set, or:
# spl-token authorize <MINT> freeze --disable
spl-token display <MINT>
```

- [ ] Mint authority: **disabled** (explorer screenshot + tx)  
- [ ] Freeze authority: **none / disabled**  

**Stop if revoke fails.** Do not proceed to marketing or LP until revoke is confirmed.

---

## Phase 3 — Metadata

1. [ ] Create Metaplex (or chosen) metadata: name `Verdant`, symbol `VERD`, URI → final JSON  
2. [ ] Verify on explorer / Solscan  
3. [ ] Set **update authority** to Squads multisig (after Squads exists — order: create Squads first if needed, or temporary authority then transfer)  

**Recommended order if update authority must be multisig:**

1. Create Squads  
2. Create metadata with update authority = Squads (or transfer immediately after)  

---

## Phase 4 — Squads treasury

1. [ ] Create mainnet Squads with full signer set + chosen threshold  
2. [ ] Create labeled vaults: Impact, Public Goods, Ops, Contingency  
3. [ ] Move treasury USDC/SOL (when raised/funded) and VERD buckets per plan  
4. [ ] Publish multisig address + member roles (not seed phrases)  

---

## Phase 5 — Realms

1. [ ] Create Verdant realm governed by VERD mint  
2. [ ] Set parameters (proposal min, voting duration, quorum) per `governance-setup.md`  
3. [ ] Deposit governance tokens for proposers as needed  
4. [ ] Publish realm link  

---

## Phase 6 — Liquidity (modest)

1. [ ] From **liquidity** bucket only, seed modest VERD–SOL and/or VERD–USDC pool  
2. [ ] Prefer LP ownership by DAO multisig  
3. [ ] Record pool address + initial depth in monthly snapshot notes  
4. [ ] No hype price targets in launch posts  

---

## Phase 7 — First governance

1. [ ] **V-000** — Ratify charter + spend + claims (`proposals/V-000-ratify-charter.md`)  
2. [ ] After V-000: finalize and pass **V-001** (`proposals/V-001-draft.md`)  
3. [ ] Execute V-001 via Squads with memo `V-001`  
4. [ ] Publish `proofs/V-001/` within 14 days  

---

## Phase 8 — Public publish (same day)

Update README address table:

- [ ] VERD mint  
- [ ] Metadata URI  
- [ ] Squads multisig + vaults  
- [ ] Realms realm  
- [ ] Explorer links  

Post claims-safe announcement only (see `docs/claims-policy.md`).

---

## Mainnet address registry

| Item | Address / URI | Tx / notes |
|------|----------------|------------|
| VERD mint | | |
| Metadata URI | | |
| Metadata account | | |
| Squads multisig | | |
| Impact vault | | |
| Public Goods vault | | |
| Ops vault | | |
| Contingency vault | | |
| Realms realm | | |
| LP pool | | |
| Mint revoke tx | | |

---

## Abort criteria

Stop the ceremony and do not promote the token if:

- Mint authority cannot be revoked  
- Allocation addresses are wrong or unverified  
- Multisig threshold leaves single-person control  
- Metadata URI is broken or contains forbidden claims  

---

## Post-ceremony (T+1 to T+30)

- [ ] Monthly snapshot process owner named  
- [ ] V-000 vote live or completed  
- [ ] V-001 feasibility confirmed (USDC/SOL in vault)  
- [ ] Signer SLA reminder  
- [ ] No forbidden marketing claims in ecosystem posts  

---

## Related

- Devnet practice: `docs/devnet-runbook.md`  
- Tokenomics: `docs/tokenomics.md`  
- Governance: `docs/governance-setup.md`  
- Checklist: `CHECKLIST.md`
