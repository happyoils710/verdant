# V-001 counterparty guide

**Goal:** One boring, fully provable retirement (or REC claim) for ≤ **$500 USDC**.  
**Not the goal:** Net-zero Solana, portfolio of offsets, or marketing volume.

---

## Choose instrument type

| Type | Pros | Cons | Prefer if… |
|------|------|------|------------|
| **Carbon credit retirement** | Familiar proof (serials) | Quality varies wildly | You can name registry + methodology |
| **RECs** | Clear energy claim | Different claim type; don’t call them “carbon offsets” | You want electricity-attribute story |

Pick **one** for V-001. Don’t mix.

---

## Minimum acceptance criteria

Vendor/registry must provide **all** of:

1. **Named registry** (or tracking system)  
2. **Unique serials / certificate IDs**  
3. **Retirement (or equivalent final claim)** in Verdant’s name or “on behalf of Verdant Treasury”  
4. Document you can publish (PDF/screenshot of registry + redacted personal data OK)  
5. Delivery in **≤ 30 days** after payment  
6. Price works within **$500** (including fees)

If any item fails → **walk away**.

---

## Where to look (starting points)

Research these categories yourself and shortlist **two** options (markets change; verify live):

1. **Established registries’ retail / small-purchase channels** (carbon or REC) that issue public serials  
2. **On-chain climate protocols** on Solana/other chains that produce **verifiable retirement receipts** you can link  
3. **Brokers** that explicitly deliver retirement certificates for small tickets  

**Avoid for V-001:**

- “We’ll plant trees” without registry serials  
- Mystery bundles with no IDs  
- Projects that forbid public disclosure  
- Anything that requires you to claim network-wide neutrality  

---

## Vendor email template

**Subject:** Small public retirement purchase (~$500) — serials required

Hi,

I’m with **Verdant**, a Solana community treasury (https://github.com/happyoils710/verdant).

We want to purchase and **retire** a small amount of [carbon credits / RECs], budget **up to $500 USD**, for a **public proof package** (serials + retirement certificate will be published on GitHub).

Please confirm:

1. Can you fulfill ≤ $500?  
2. What registry / tracking system?  
3. Will we receive unique serials and a retirement certificate we can publish?  
4. Timeline from payment to retirement proof?  
5. Payment methods (USDC, wire, card)?  

We will **not** market this as making a token or blockchain “carbon neutral” — only as this specific retirement.

Thanks,  
[name]

---

## Fill into V-001 when ready

Update `proposals/V-001-draft.md` section 3:

| Field | Example shape |
|-------|----------------|
| Name | Vendor legal/project name |
| Payment rail | USDC to X / invoice URL |
| Registry | e.g. named registry |
| Instrument | vintage, project type, volume |
| Proof | “serial list + retirement cert PDF” |

---

## After purchase (mainnet)

Publish under `proofs/V-001/`:

- Payment tx  
- Serials  
- Retirement certificate  
- Short README using **claims-safe** language only  

Allowed:  
> “Verdant Treasury retired [volume] via [registry]. Proof: [link].”

Forbidden:  
> “VERD is carbon negative” / “we offset Solana.”
