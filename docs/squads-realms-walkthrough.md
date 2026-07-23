# Squads + Realms Walkthrough (Solflare · Devnet)

**Your wallet (Devnet):** `5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3`  
**VERD mint:** `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`  
**You should have:** ~1,000,000 VERD + Devnet SOL  

Explorer mint:  
https://explorer.solana.com/address/9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD?cluster=devnet

---

## Before you start (Solflare)

1. Open **Solflare**.  
2. Network must be **Devnet** (Settings → Network → Devnet).  
3. Confirm you see **SOL** and **Verdant (VERD)**.  
   - If no VERD: **Manage tokens** → add mint `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD`  
4. Keep Solflare unlocked while using browser dApps.  
5. When a site asks to connect, pick **Solflare** (or Wallet Standard → Solflare).

---

# Part 1 — Squads (multisig treasury)

Squads holds assets and executes spends. On Devnet the UI options differ slightly from mainnet.

### Recommended Devnet URLs (try in order)

| Priority | URL | Notes |
|----------|-----|--------|
| 1 | https://devnet.squads.so/squads | Official **Devnet** UI (often Squads v3 — fine for practice) |
| 2 | https://backup.app.squads.so/ | v4-style backup UI; set RPC to Devnet in settings if needed |
| 3 | https://app.squads.so / https://v4.squads.so | Main product; may be **mainnet-only** — don’t use for this rehearsal |

### Step-by-step (Devnet Squad)

1. Open **https://devnet.squads.so/squads**  
2. Click **Connect wallet** → **Solflare** → approve.  
3. Confirm the site is on **Devnet** (same network as Solflare).  
4. Click **Create Squad** / **Create multisig**.  
5. **Name:** `Verdant Treasury (Devnet)`  
6. **Members:** add your address  
   `5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3`  
   - For solo practice: **1-of-1** is OK on Devnet only.  
   - For real structure practice: add a second Solflare account and use **2-of-2**.  
7. **Threshold:** match members (1-of-1 or 2-of-2 for practice; production target is **4-of-7**).  
8. Review fees → **Create** → approve in Solflare.  
9. Copy the **Squad address** and save it (paste into notes / `docs/devnet-addresses.md`).

### Practice spend (critical)

1. Open your new Squad.  
2. **Deposit** a tiny amount of Devnet SOL into the Squad vault (e.g. 0.1 SOL) from Solflare.  
3. Create a **transaction** / **transfer**:  
   - Send ~0.01 SOL back to yourself: `5Hh5P9qxxWhfBADnWKjAv5g2ZuvVR2bqkAYDrKtpz9L3`  
   - Memo / note if available: `V-001-test DEVNET — NOT REAL IMPACT`  
4. **Approve / execute** until the transfer confirms.  
5. Optional: create a second transfer and **reject/cancel** it.  
6. Save the explorer tx link.

### If create fails

| Symptom | Fix |
|---------|-----|
| Wallet on wrong network | Solflare → Devnet; refresh page |
| Infinite connect loop | Disconnect site in Solflare → reconnect; try another browser |
| Mainnet-only error | Use https://devnet.squads.so/squads only |
| Not enough SOL | You should have ~5 SOL; check Solflare Devnet |

---

# Part 2 — Realms (token voting)

Realms is where VERD holders create and vote on proposals.

### URL (Devnet — important)

Use the **cluster query param**:

**https://app.realms.today/realms?cluster=devnet**

(Also try: https://v2.realms.today with Devnet if the UI offers a network toggle.)

### Step-by-step create DAO

1. Open **https://app.realms.today/realms?cluster=devnet**  
2. **Connect** Solflare → approve.  
3. Confirm **Devnet** in the UI (URL should include `cluster=devnet`).  
4. Click **Create DAO** / **Create Realm**.  
5. Choose **Community Token DAO** (token holders vote — not NFT DAO).  
6. **DAO name:** `Verdant`  
7. **Community mint** (existing token): paste  

```text
9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD
```

8. **Do not** create a new mint — use the existing VERD mint above.  
9. **Council:** for Devnet practice choose **no council** (or skip) to match our mainnet plan (pure token DAO).  
10. **Min tokens to create proposal:** use something low for Devnet, e.g. **1000** or **10000** VERD (you have 1M).  
11. **Yes vote threshold / quorum:** keep defaults or set low for practice (e.g. 1–5%).  
12. Review → **Create** → approve all Solflare popups (there may be several).  

### Deposit VERD for voting power

1. Open your new Verdant realm.  
2. Find **Deposit** / **My governance power** / **Account**.  
3. Deposit some VERD (e.g. **100,000** VERD) into the realm.  
4. Approve in Solflare.  
5. Confirm voting power shows &gt; 0.

### Three practice proposals

| # | Title | Goal |
|---|--------|------|
| 1 | `V-000-test: Ratify charter (Devnet)` | **Pass** a policy-style proposal |
| 2 | `V-001-test: Authorize practice spend` | **Pass** — then mirror with a Squads transfer |
| 3 | Junk / empty | Let it **fail** or cancel to learn UX |

For each:

1. **New proposal** → description can be short.  
2. On Devnet, instructions can be empty/text-only if the UI allows “discussion” style; if it requires an instruction, use a no-op or small SOL transfer from a realm wallet if one exists.  
3. Vote **Yes** with your deposited VERD.  
4. Wait for voting period (Devnet may be short or configurable).  
5. Finalize / execute if the UI asks.

### Link Squads + Realms (habit)

After proposal 2 passes:

1. Execute a Squads transfer with memo `V-001-test`.  
2. Create `proofs/V-001-test/README.md` with both links (even on Devnet, labeled **NOT REAL IMPACT**).

---

# Part 3 — What to send back when stuck

Paste:

1. Which step (Squads create / deposit / Realms create / deposit / proposal)  
2. Exact error text or screenshot description  
3. Whether Solflare was on **Devnet**  
4. URL you used  

---

# Part 4 — Record when done

Fill into `docs/devnet-addresses.md` or reply here:

```text
Squads address:
Squads practice tx:
Realms URL:
Realm deposit OK (Y/N):
Sample proposal URL:
```

---

# Mainnet reminder (later)

| Devnet practice | Mainnet production |
|-----------------|-------------------|
| 1-of-1 OK | **4-of-7** real signers |
| Low proposal min | ~1% votable |
| Fake proposals | **V-000** then **V-001** only |
| Devnet.squads.so | Production Squads app + hardware wallets |

Never reuse Devnet ceremony keys for mainnet.
