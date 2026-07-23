# Verdant Devnet Runbook

**Version:** 0.1  
**Purpose:** Rehearse mainnet genesis: mint → metadata → revoke → Squads → Realms → sample spend  
**Network:** `devnet`

Complete this runbook before any mainnet ceremony. Record real addresses in the tables at the bottom.

---

## Prerequisites

- [x] Solana CLI installed (local: `~/.local/solana/solana-release/bin`, v2.1.21)  
- [x] `spl-token` CLI available  
- [ ] Wallet funded with Devnet SOL ([faucet.solana.com](https://faucet.solana.com) — **GitHub login often required**; public RPC airdrop often returns 429)  
- [ ] Browser wallets ready for Squads / Realms UIs  
- [ ] `metadata/token.json` content staged (host URI or upload to IPFS/Arweave)  
- [ ] Signer pubkeys listed in `governance-setup.md`  

**Automated mint path:** after funding, run:

```bash
export PATH="$HOME/.local/solana/solana-release/bin:$PATH"
cd ~/Desktop/Verdant
./scripts/devnet-mint.sh
```

Devnet payer pubkey (safe to share):

```text
7BQBEgo7RwGhrpa71FED1FQhiGQBPfEH6dGADGuGLjBi
```

```bash
export PATH="$HOME/.local/solana/solana-release/bin:$PATH"
solana config set --url https://api.devnet.solana.com
solana config set --keypair ~/Desktop/Verdant/keys/devnet-payer.json
solana config get
solana balance
```

---

## Phase 1 — Create mint

### 1.1 Create token mint (6 decimals)

```bash
# Create mint; adjust keypair paths to your practice keys
spl-token create-token --decimals 6
```

- [ ] Mint address recorded → `DEVNET_MINT` below  

### 1.2 Create token account(s) and mint supply

```bash
spl-token create-account <MINT>
spl-token mint <MINT> 100000000
spl-token account-info <TOKEN_ACCOUNT>
```

For allocation practice, create separate accounts per bucket (treasury, team test, etc.) and transfer.

- [ ] Total supply 100,000,000 VERD  
- [ ] Allocation test transfers done  

### 1.3 Authorities (critical)

```bash
# Inspect
spl-token display <MINT>

# After all minting is complete — REVOKE MINT AUTHORITY
spl-token authorize <MINT> mint --disable

# Ensure freeze is disabled / never set
# spl-token authorize <MINT> freeze --disable   # if freeze was set
```

- [ ] Mint authority: **disabled**  
- [ ] Freeze authority: **none / disabled**  

---

## Phase 2 — Metadata

Use Metaplex Token Metadata (or your chosen current standard). Goal:

| Field | Value |
|-------|--------|
| name | Verdant |
| symbol | VERD |
| uri | URL to JSON (see `metadata/token.json`) |

### Checklist

- [ ] Upload `metadata/token.json` (+ image) to IPFS/Arweave or temporary HTTPS host  
- [ ] Create metadata account for mint  
- [ ] Verify name/symbol/uri on explorer  
- [ ] Plan: metadata **update authority** → Squads on mainnet (on Devnet, practice transfer of update authority if applicable)  

**Image:** professional mark; avoid “planet saved” cliché art for official metadata if possible.

---

## Phase 3 — Squads multisig

Use [Squads](https://squads.so) (or current Squads app for Devnet).

### Steps

1. [ ] Create multisig with practice members (threshold e.g. 2-of-3 is OK on Devnet if full set unavailable; mainnet uses full roster)  
2. [ ] Label vaults: **Impact**, **Public Goods**, **Ops**  
3. [ ] Deposit small Devnet SOL/USDC (if available) or VERD test amounts  
4. [ ] Create transfer with memo text: `V-001-test proof-hash-demo`  
5. [ ] Reach threshold; confirm tx on explorer  
6. [ ] Create a second transfer and **reject/cancel** it (practice failure path)  

### Record

| Item | Address |
|------|---------|
| Multisig | |
| Impact vault | |
| Public Goods vault | |
| Ops vault | |

---

## Phase 4 — Realms

Use [Realms](https://app.realms.today) (Devnet).

### Steps

1. [ ] Create realm **Verdant** governed by VERD mint  
2. [ ] Configure draft params (proposal min, voting time, quorum) — see `governance-setup.md`  
3. [ ] Deposit VERD into governance / obtain vote weight  
4. [ ] Proposal 1 (policy): “Ratify charter v0.1 (Devnet test)” → **pass**  
5. [ ] Proposal 2 (spend): “Test transfer $x with memo V-001-test” → **pass** → execute via Squads  
6. [ ] Proposal 3: intentionally under-threshold or no-quorum → **fail** (understand UX)  

### Record

| Item | Value |
|------|--------|
| Realm | |
| Governance account | |
| Notes on params | |

---

## Phase 5 — End-to-end proof package (practice)

Create `proofs/V-001-test/README.md`:

- [ ] Proposal link / ID  
- [ ] Squads tx signature  
- [ ] Dummy “retirement cert” or grant note (clearly labeled **DEVNET TEST — NOT REAL IMPACT**)  
- [ ] Lessons learned  

---

## Phase 6 — Ceremony timing

| Step | Elapsed (fill) |
|------|----------------|
| Mint + supply | |
| Metadata | |
| Revoke authorities | |
| Squads setup | |
| Realms setup | |
| First full proposal cycle | |
| **Total** | |

Use this to schedule mainnet day with signers online.

---

## Footguns log

| Issue | Cause | Fix |
|-------|--------|-----|
| `airdrop request failed` / RPC 429 | Public Devnet faucet dry or rate-limited | Use https://faucet.solana.com with GitHub login |
| Official `agave-install` aborts on macOS | Missing `libusb` / broken Homebrew | Use release tarball under `~/.local/solana/solana-release` |
| Keys almost committed | Local keypair in repo | `keys/` is gitignored; never force-add |

---

## Devnet address registry

| Item | Address / URI |
|------|----------------|
| VERD mint | |
| Metadata URI | |
| Metadata account | |
| Primary token account | |
| Squads multisig | |
| Impact vault | |
| Public Goods vault | |
| Ops vault | |
| Realms realm | |
| Sample spend tx | |
| Sample proposal | |

---

## Mainnet gate

Do **not** proceed to mainnet until:

- [ ] All Phase 1–5 checkboxes done once successfully  
- [ ] Mint revoke verified on explorer  
- [ ] Signers confirmed in `governance-setup.md`  
- [ ] `CHECKLIST.md` sections 0–5 complete  
- [ ] Written mainnet runbook copied from this file with mainnet URLs and real keys plan (cold ceremony)

---

## Mainnet notes (do not execute here)

- Use hardware wallets  
- Script allocation transfers offline; double-check addresses  
- Revoke mint in the **same session** as genesis minting  
- Publish all addresses in README within hours of launch  
- First real votes: **V-000** then **V-001**
