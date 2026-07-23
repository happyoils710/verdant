# Squads + Realms Walkthrough (Devnet → Mainnet)

Use this after the Devnet mint exists. Goal: practice the full governance loop before mainnet.

**Devnet mint (canonical, with metadata):** `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`  
**Explorer:** https://explorer.solana.com/address/9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD?cluster=devnet  
**Repo:** https://github.com/happyoils710/verdant

---

## Part A — Wallet prep

1. Install a Solana wallet (Phantom or Solflare).  
2. Create or import a **Devnet** account (enable Devnet / testnet mode in settings).  
3. Fund it via https://faucet.solana.com (Devnet).  
4. Optional: import the ceremony payer only if you accept that risk — better to use a **fresh Devnet wallet** and transfer a small VERD amount for voting tests.

### Transfer practice VERD to your browser wallet

```bash
export PATH="$HOME/.local/solana/solana-release/bin:$PATH"
cd ~/Desktop/Verdant
solana config set --url https://api.devnet.solana.com
solana config set --keypair "$(pwd)/keys/devnet-payer.json"

# Replace with your Phantom Devnet address:
RECIPIENT="<YOUR_DEVNET_WALLET>"
spl-token transfer 9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD 1000000 "$RECIPIENT" --fund-recipient
```

That sends **1,000,000 VERD** (enough for governance practice).

---

## Part B — Squads (treasury executor)

### B1. Create multisig (Devnet)

1. Open Squads: https://v4.squads.so (or current Squads app; switch network to **Devnet** if available).  
2. If the app is mainnet-only in the UI, use Squads docs/CLI for Devnet or practice the same flow on mainnet **only after** dry-run checklist is green — prefer Devnet.  
3. Create a new Squad / multisig.  
4. Add members (start with 2–3 wallets you control if co-signers are not ready).  
5. Set threshold (practice: 2-of-3; production target: **4-of-7**).  

### B2. Label vaults (mental model)

Even if the UI uses one vault first, track labels off-chain:

| Label | Purpose |
|-------|---------|
| Impact | Category A spends |
| Public Goods | Category B/C |
| Ops | Category D |
| Contingency | Emergency |

### B3. Practice transfer + memo

1. Deposit a tiny amount of Devnet SOL (and optionally VERD) into the Squad.  
2. Create a transfer to a known wallet.  
3. Put memo / note: `V-001-test DEVNET — NOT REAL IMPACT`.  
4. Collect signatures to threshold; confirm on explorer.  
5. Create a second transfer and **reject/cancel** it.  

### B4. Record

Paste into `docs/devnet-addresses.md`:

| Item | Value |
|------|--------|
| Squads multisig | |
| Practice spend tx | |

---

## Part C — Realms (token voting)

### C1. Create realm

1. Open https://app.realms.today  
2. Connect wallet; set cluster to **Devnet** (network toggle / URL if required).  
3. Create a new DAO / realm.  
4. Community token mint: `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`  
5. Name: **Verdant**  
6. Use draft params from `docs/governance-setup.md`:  
   - Min tokens to propose: ~1% of votable (can start lower on Devnet for ease, e.g. 1000 VERD)  
   - Voting time: shorter on Devnet (e.g. 10–30 minutes) for practice  
   - Quorum: low on Devnet for testing  

### C2. Deposit tokens & vote weight

1. In the realm, deposit VERD into governance (or follow Realms deposit UI).  
2. Confirm voting power appears.  

### C3. Three practice proposals

| # | Type | Expected result |
|---|------|-----------------|
| 1 | Policy: “Ratify charter v0.1 (Devnet test)” | **Pass** |
| 2 | Spend note: “Authorize test transfer memo V-001-test” | **Pass** → then execute via Squads |
| 3 | Junk / under-threshold | **Fail** |

Link proposal 2’s discussion to the Squads tx after execution.

### C4. Record

| Item | Value |
|------|--------|
| Realms realm URL | |
| Governance account | |
| Sample proposal URL | |

---

## Part D — End-to-end proof habit

Create `proofs/V-001-test/README.md`:

```markdown
# V-001-test (DEVNET — NOT REAL IMPACT)

- Realm proposal:
- Squads tx:
- Notes: rehearsal only
```

---

## Part E — Mainnet differences

| Devnet | Mainnet |
|--------|---------|
| Any practice keys | Hardware wallets |
| 2-of-3 OK | **4-of-7** full roster |
| Fake proposals | **V-000** then **V-001** only with real USDC |
| Short voting | 5-day votes (locked default) |
| Optional low quorum | 5% quorum default |

Do **not** reuse Devnet payer keypair for mainnet.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Wallet on wrong cluster | Switch to Devnet in wallet + app |
| Token not showing | Add mint manually: `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |
| Can’t propose | Deposit VERD; lower min-tokens on Devnet |
| Squads network mismatch | Confirm Devnet support or use documented Devnet entrypoint |
| Realms can’t find mint | Ensure mint is on Devnet explorer first |

---

## Checklist

- [ ] Browser wallet on Devnet funded  
- [ ] Received practice VERD  
- [ ] Squads created + practice transfer + reject path  
- [ ] Realms realm created  
- [ ] Pass + fail proposals observed  
- [ ] Addresses written to `docs/devnet-addresses.md`  
- [ ] `proofs/V-001-test/` note committed  
