# Verdant Spend Policy

**Version:** 0.1 (Draft)  
**Status:** To be ratified with Charter as **V-000**  
**Applies to:** Community Treasury and related DAO vaults

---

## Purpose

Define what the Verdant Treasury may fund, what proof is required, and how proposals must be structured — so spends are hard to greenwash and easy to audit.

---

## Spending categories

### A — Verifiable sustainability actions

**In scope**

- Purchase and **retirement** (or equivalent permanent claim) of high-integrity environmental instruments  
- Renewable Energy Certificates (RECs) with clear vintage/registry  
- Biodiversity or nature credits **only** if methodology and MRV are public and acceptable under Eligible Assets  
- Grants to on-chain climate protocols with defined milestones and open reporting  

**Required proof (minimum)**

- Counterparty and instrument type  
- Registry name + **serials / certificate IDs** (or protocol-native proof)  
- Evidence of retirement or final delivery  
- Payment transaction signature(s)  
- Short public write-up in `proofs/V-XXX/`  

### B — Solana public goods with sustainability co-benefits

**In scope**

- Open-source tools, libraries, dashboards  
- Climate- or energy-related infrastructure that benefits Solana users/builders  
- Relevant DePIN pilots with measurable deliverables  
- Education and documentation that improve ecosystem capacity  

**Required proof (minimum)**

- Recipient + wallet  
- Scope, milestones, acceptance criteria  
- Public repo or deliverable links  
- Payment tx(s)  
- Milestone completion note in `proofs/V-XXX/`  

### C — Integrity infrastructure

**In scope**

- Measurement, reporting, verification tooling  
- Treasury transparency dashboards  
- Process reviews / independent checks of impact spends  

**Required proof:** same spirit as B (public deliverables).

### D — Operations (capped)

**In scope**

- Legal, security reviews, essential hosting, multisig ops costs  

**Required proof**

- Invoice or engagement summary (redact sensitive personal data if needed)  
- Payment tx  
- Category labeled **Ops** — never marketed as “impact”

---

## Indicative annual mix (guidance, not hard code)

Use as a **reporting target**, adjustable by governance:

| Category | Indicative share of annual outflow |
|----------|-------------------------------------|
| A — Verifiable sustainability | 40–60% |
| B — Public goods + co-benefits | 25–40% |
| C — Integrity infrastructure | 10–20% |
| D — Ops | ≤ 10% |

If a year is ops-heavy (e.g. launch legal), explain in the quarterly report.

---

## Eligible assets (v0.1)

**Principle:** Prefer instruments and grantees where a skeptical third party can verify delivery.

### v0.1 allow posture

| Type | Allowed if |
|------|------------|
| Carbon credits | Named registry; methodology disclosed; **retirement** (or equivalent) documented; additionality/MRV concerns addressed in proposal |
| RECs | Named tracking system; vintage and volume clear; claim use disclosed |
| Biodiversity / nature | Stronger scrutiny; public methodology; do not treat as fungible “easy offset” without justification |
| Protocol grants | Open roadmap, milestones, wallet, kill criteria if missed |
| OSS / education | Public IP or public materials; no pure private closed work without DAO exception |

### Explicitly discouraged / reject by default

- “Mystery offsets” with no serials  
- Screenshot-only donations  
- Projects that only improve token marketing  
- Double-counting the same retirement across multiple claims  
- Anything requiring Verdant to claim **network-wide neutrality** for Solana  

**Expanding eligibility:** requires a **Policy** proposal updating this document.

---

## Proposal requirements

Every spend proposal must use [proposal-template.md](./proposal-template.md) and include:

1. Category (A/B/C/D)  
2. Amount and asset (USDC, SOL, etc.)  
3. Recipient / counterparty  
4. Expected outcome  
5. Verification method and proof plan  
6. Links to supporting docs  
7. Conflict of interest disclosure  

### Size thresholds (defaults — tune on Devnet / by vote)

| Size | Extra rules |
|------|-------------|
| Small (define e.g. ≤ $1,000 USDC) | Standard proposal + proof |
| Medium | Longer discussion period preferred |
| Large | Timelock 24–72h; consider independent review for first large impact buy |

Exact USD thresholds should be set in Realms config notes once treasury cash size is known.

---

## Execution rules

1. Prefer **USDC/SOL** for impact purchases and grants — not unstructured VERD dumps to unknown markets.  
2. VERD grants only with **vesting or milestones** when used for ecosystem work.  
3. Every execution tx should include a **memo** referencing proposal ID (e.g. `V-001`).  
4. Within **14 days** of execution, publish proof package under `proofs/V-XXX/`.  
5. Multisig must not execute material spends that lack a matching passed proposal (except Emergency — below).  

---

## Emergency policy (narrow)

Squads may spend **without** a completed public vote only if:

- Required to secure funds (exploit, key compromise response), or  
- Pre-defined ops limit in `governance-setup.md` (e.g. monthly ops cap), and  
- Full public disclosure within **72 hours** with retroactive ratification proposal when possible  

Emergency is **not** a shortcut for impact marketing spends.

---

## Forbidden spend framings

Do not approve proposals whose primary output is a marketing claim such as:

- “Make VERD carbon negative”  
- “Offset all Solana emissions”  
- “Holders are climate positive”

Fund real instruments and public goods; let proof speak.

---

## Reporting

| Report | Content |
|--------|---------|
| Monthly snapshot | Balances by vault; major txs |
| Quarterly | Spends by category; proof links; mix vs guidance; lessons |
| Per spend | `proofs/V-XXX/README.md` |

---

## Amendments

Change this policy via governance **Policy** proposal. Version bump and changelog required.
