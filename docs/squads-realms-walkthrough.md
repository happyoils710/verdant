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

### Important (July 2026): Realms V2 has **no Devnet**

- https://v2.realms.today is the current UI and appears **mainnet-only** (no network switch).  
- Old links like `app.realms.today?cluster=devnet` **redirect into V2** and drop Devnet.  
- **You are not missing a setting** — Devnet is not exposed in V2 right now.

### What we did instead

Created the **Verdant** realm **on-chain on Devnet** via script:

| Item | Address |
|------|---------|
| Realm | `91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay` |
| Governance | `nYMAhcGy5bNZDkxdMTmgt5TrihkddEvfbF157Zfh9vs` |
| Native treasury | `Bm42KJ8Q1EWEC7FWQ12atrxH5WhPZBrnV7TuLedc7p1` |
| Community mint | `9ztetjHjtMrywnLasPtowMn6HivydUQ2uTaLocBscbZD` |

Explorer:  
https://explorer.solana.com/address/91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay?cluster=devnet

Script: `scripts/governance-tool/create-realm-devnet.mjs`

### What you should do in the browser

1. **Skip Realms UI on Devnet** for now.  
2. Finish **Squads** on https://devnet.squads.so/squads (that UI *does* support Devnet).  
3. On **mainnet later**, create/use the realm in **https://v2.realms.today** after the mainnet mint ceremony.

### Optional later

If Realms restores Devnet UI, search for realm name **Verdant** on Devnet or open by address  
`91hFR9ZK1RzDtHWb3866xCNWMubUqZFRXCMoGV9ZKmay`.

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
