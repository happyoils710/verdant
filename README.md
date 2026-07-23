# Verdant (VERD)

**Verdant** is a Solana governance token for a transparent community treasury that funds:

1. **Verifiable sustainability actions** (high-integrity credits, RECs, biodiversity, on-chain climate protocols)
2. **Solana ecosystem public goods** with real environmental co-benefits (tools, open-source climate infrastructure, relevant DePIN, education)

VERD is a **governance token**. Impact comes only from approved, executed treasury spends with public proof — not from holding the token.

> Status: **Draft v0.1** — public docs for review; on-chain ratification via proposal **V-000**.  
> Repo: https://github.com/happyoils710/verdant

---

## Quick links

| Doc | Purpose |
|-----|---------|
| [DECISIONS.md](./DECISIONS.md) | Locked product decisions |
| [CHECKLIST.md](./CHECKLIST.md) | Immediate launch checklist |
| [docs/charter.md](./docs/charter.md) | Mission and principles |
| [docs/tokenomics.md](./docs/tokenomics.md) | Supply and allocations |
| [docs/spend-policy.md](./docs/spend-policy.md) | What the treasury may fund |
| [docs/claims-policy.md](./docs/claims-policy.md) | What we never claim |
| [docs/proposal-template.md](./docs/proposal-template.md) | Required proposal fields |
| [docs/governance-setup.md](./docs/governance-setup.md) | Squads + Realms plan |
| [docs/devnet-runbook.md](./docs/devnet-runbook.md) | Devnet ceremony steps |
| [docs/mainnet-runbook.md](./docs/mainnet-runbook.md) | Mainnet ceremony (after Devnet) |
| [docs/signer-invite.md](./docs/signer-invite.md) | Multisig recruiter template |
| [docs/NEXT-STEPS.md](./docs/NEXT-STEPS.md) | Ordered work remaining |
| [docs/signer-recruitment.md](./docs/signer-recruitment.md) | How to fill the multisig |
| [docs/fund-plan.md](./docs/fund-plan.md) | Seed USDC/SOL for V-001 |
| [scripts/devnet-mint.sh](./scripts/devnet-mint.sh) | Automated Devnet mint + revoke |
| [docs/devnet-addresses.md](./docs/devnet-addresses.md) | Live Devnet mint + tx signatures |
| [docs/squads-realms-walkthrough.md](./docs/squads-realms-walkthrough.md) | Squads + Realms practice steps |
| [docs/metadata-walkthrough.md](./docs/metadata-walkthrough.md) | Token metadata notes |
| [docs/signer-recruitment.md](./docs/signer-recruitment.md) | Multisig recruitment |
| [proposals/V-000-ratify-charter.md](./proposals/V-000-ratify-charter.md) | Ratify policies (first vote) |
| [proposals/V-001-draft.md](./proposals/V-001-draft.md) | First impact action draft |
| [metadata/token.json](./metadata/token.json) | On-chain metadata template |
| [proofs/](./proofs/) | Post-execution proof packages |

---

## What VERD is

- A **fixed-supply** SPL token used for **governance**
- Control surface for a **transparent treasury** (Squads multisig + Realms voting)
- A coordination tool for **ecosystem health spending** with sustainability outcomes

## What VERD is not

- Not a claim that Solana or the token is “carbon neutral”
- Not automatic offsets from holding or trading VERD
- Not a promise of profit, yield, or investment return
- Not a substitute for regulated environmental markets without proper counterparties and proof

See [docs/claims-policy.md](./docs/claims-policy.md).

---

## Core parameters (summary)

| Parameter | Value |
|-----------|--------|
| Name | Verdant |
| Ticker | VERD |
| Chain | Solana |
| Standard | SPL Token |
| Decimals | 6 |
| Total supply | 100,000,000 (fixed) |
| Mint after genesis | Revoked |
| Primary treasury | 40% of supply |
| Governance | Realms (or equivalent) |
| Treasury execution | Squads multisig |

Full detail: [docs/tokenomics.md](./docs/tokenomics.md).

---

## How to propose (once live)

1. Read the [charter](./docs/charter.md) and [spend policy](./docs/spend-policy.md).
2. Fill out the [proposal template](./docs/proposal-template.md).
3. Submit via the Verdant Realms realm (link TBD).
4. If passed, execution is via Squads; proof is published under [`proofs/`](./proofs/).

---

## Addresses (fill after deploy)

| Item | Network | Address |
|------|---------|---------|
| Devnet payer | Devnet | `7BQBEgo7RwGhrpa71FED1FQhiGQBPfEH6dGADGuGLjBi` |
| VERD mint (canonical) | Devnet | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Metadata PDA | Devnet | `DAr4dr6QgJ6dsd3S7tD5pUVCSygVc8BWukeHBZRrUdnr` |
| Token account (full supply) | Devnet | `FtEXuBZn6vSwtPbPvDQZXBxXXikxzqfBviFFwRveuRdg` |
| Metadata URI | — | [metadata/token.json](https://raw.githubusercontent.com/happyoils710/verdant/main/metadata/token.json) |
| VERD mint | Mainnet | _TBD_ |
| Squads multisig | Devnet | _TBD_ — see [walkthrough](./docs/squads-realms-walkthrough.md) |
| Squads multisig | Mainnet | _TBD_ |
| Realms realm | Devnet | `91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay` (on-chain; V2 UI has no Devnet) |
| Governance | Devnet | `nYMAhcGy5bNZDkxdMTmgt5TrihkddEvfbF157Zfh9vs` |
| Realms realm | Mainnet | _TBD_ |

**Devnet mint explorer:**  
https://explorer.solana.com/address/9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD?cluster=devnet  

Mint authority: **revoked**. Metadata: **attached**. Supply: **100,000,000** VERD (6 decimals).  
Full log: [docs/devnet-addresses.md](./docs/devnet-addresses.md).

---

## Disclaimer

This repository describes a **community governance design** for a Solana token and treasury. Nothing here is financial, legal, tax, or investment advice. Verdant documents do not guarantee environmental outcomes. Only executed, proven treasury actions constitute impact. Seek professional advice before launching, distributing tokens, or making public fundraising claims in your jurisdiction.

---

## License

Documentation in this repo: **CC0-1.0** (public domain dedication) unless noted otherwise.  
Code (when added): specify per file or `LICENSE`.
