# Verdant Tokenomics

**Version:** 0.1  
**Token:** Verdant (VERD)  
**Status:** Draft — aligned with `DECISIONS.md`

---

## Supply

| Parameter | Value |
|-----------|--------|
| Name | Verdant |
| Symbol | VERD |
| Chain | Solana |
| Standard | SPL Token |
| Decimals | 6 |
| Total supply | **100,000,000** VERD |
| Mint schedule | **100% at genesis** |
| Inflation | **None** |
| Mint authority post-genesis | **Revoked** |
| Freeze authority | **None / revoked** |

**Base units:** 100,000,000 × 10^6 = 100,000,000,000,000 raw units.

---

## Allocation

| Bucket | % | VERD | Unlock / vesting | Custody intent |
|--------|---|------|------------------|----------------|
| **Community Treasury** | 40% | 40,000,000 | Available for governance spends per spend policy | Squads: Impact + Public Goods vaults (as USDC/SOL after any conversion policy; VERD may be held for grants) |
| **Ecosystem & grants stream** | 15% | 15,000,000 | Linear over **36–48 months** (epoch or streaming) | Squads / streaming program under DAO |
| **Community distribution** | 15% | 15,000,000 | **12–24 months**; contribution-weighted preferred | Multisig or distribution contracts; public criteria |
| **Team & core contributors** | 15% | 15,000,000 | **12-month cliff**, then linear over **24–36 months** | Vesting wallets; addresses published |
| **Strategic partners / advisors** | 5% | 5,000,000 | Same or **stricter** than team | Vesting; only real impact/infra partners |
| **Liquidity & market ops** | 5% | 5,000,000 | Per published LP policy | DAO-owned LP positions preferred |
| **Insurance / contingency** | 5% | 5,000,000 | Strict emergency / legal / security policy | Squads Ops / Contingency vault |

**Total:** 100%

---

## Design rationale

| Choice | Why |
|--------|-----|
| Large treasury (40%) | Governance must control real capital for impact + public goods |
| No inflation | Avoid “print tokens to buy green assets” optics and dilution games |
| Long team vest | Alignment; reduces dump accusations |
| Modest LP bucket (5%) | Participation liquidity, not launch hype |
| Separate grants stream | Multi-year ecosystem funding without raiding the impact vault |

---

## Governance weight

- **Launch:** 1 VERD = 1 vote (via Realms deposit/vote mechanics as configured).  
- **Later (optional, by proposal only):** vote-escrow or lock boosts — not required for v0.1.  
- **No** treasury-funded staking yield at launch.

---

## Liquidity policy (v0.1 intent)

1. Seed a **modest** VERD–SOL and/or VERD–USDC pool from the liquidity bucket.  
2. LP tokens held by **DAO multisig** where possible.  
3. Document initial depth and any rebalancing in monthly snapshots.  
4. Team/partner tokens remain under vesting; not used as hidden sell pressure narrative.

---

## Community distribution principles

Prefer:

- Builders, documentation, verification work, governance participation  
- Impact partners who deliver proof packages  
- Transparent eligibility rules published before major drops  

Avoid:

- Pure speculation airdrops with no contribution  
- Hidden insider allocations labeled “community”

---

## Address registry (fill post-deploy)

| Bucket | Devnet | Mainnet | Vesting notes |
|--------|--------|---------|---------------|
| Community Treasury | | | |
| Ecosystem & grants | | | |
| Community distribution | | | |
| Team | | | |
| Partners | | | |
| Liquidity | | | |
| Contingency | | | |

---

## What tokenomics does *not* do

- Does not encode carbon retirement  
- Does not guarantee any environmental outcome  
- Does not create a claim on treasury assets as a pro-rata redeemable share unless a future legal structure explicitly says so (v0.1 assumes **governance control**, not equity)

---

## Amendments

Supply is fixed. Allocation *unlock schedules* and custody addresses may be refined before mainnet via PR + `DECISIONS.md` update. After mainnet, material economic policy changes require governance.
