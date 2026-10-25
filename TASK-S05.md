# TASK-S05: Replace All Generic Icons and Emojis with Canonical Inline SVG Icons (Lucide/Tabler)

## 📌 Context & Objective
- **Directive**: User revision — "semua icon tidak boleh icon generik / bawaan sistem, gunakan icon seperti yang tampil di landing page".
- **Problem**: In `app-donatur.html`, `app-mitra.html`, `app-admin.html`, `login.html`, `daftar.html`, and `js/store.js`, several buttons, badges, categories, and floating switcher items use system emojis (e.g. 🥖, 🤲, 🛡️, 🎭, 🔄, 📦, 📍, 📞, ✉️, etc.) instead of canonical vector SVGs.
- **Goal**: Replace EVERY emoji and generic system icon across all files with clean vector SVG icons (`viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`) following the exact Tabler/Lucide pattern used in `index.html` and `fitur.html`.

---

## 🔍 Specific Replacements Required

### 1. `js/store.js`
- In `INITIAL_SEED` listings and demo switcher:
  * Replace category emoji tags or strings with pure text.
  * In `mountDemoSwitcher()`: Replace `🎭`, `🥖`, `🤲`, `🛡️`, `🔄` with inline SVG icons:
    - Mask/Demo icon: `<svg class="w-4 h-4" ...><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2z"/></svg>`
    - Donor icon (Chef/Store/Bowl): `<svg class="w-4 h-4" ...><path d="M3 21h18M5 21V7l8-4 8 4v14"/></svg>`
    - Partner/Handshake icon (Handshake/Heart-hand): `<svg class="w-4 h-4" ...><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
    - Admin/Shield icon: `<svg class="w-4 h-4" ...><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    - Refresh/Reset icon: `<svg class="w-4 h-4" ...><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>`

### 2. `login.html`
- In Quick Demo Access buttons:
  * Remove `🥖`, `🤲`, `🛡️` emojis.
  * Replace with styled SVG icon wrappers (Storefront, Handshake/Hands, Shield) matching the brand palette.

### 3. `app-donatur.html`
- Replace ALL emojis with clean Lucide SVGs:
  * Category pills & icons: Bread/Bakery, Cooked food/Bowl, Veggie/Leaf -> clean SVGs.
  * Header/Profile icons: Location pin, phone, verified check -> SVG.
  * Tab icons: Plus (`+`), Inbox/List, QR/Handover terminal -> SVG.
  * Star ratings: `<svg ... fill="currentColor">` stars instead of `★`.
  * Close / checkmark buttons: Clean SVG X and Checkmark instead of `✕` and `✓`.
  * Notice/Tip icons: Lightbulb SVG instead of `💡`.

### 4. `app-mitra.html`
- Replace ALL emojis with clean Lucide SVGs:
  * Category filters: All, Roti, Siap Santap, Sayur -> SVGs.
  * Distance/Location: Map pin SVG instead of `📍`.
  * Vehicle/Courier notes: Truck/Bike SVG instead of `🛵`, `🚚`.
  * Warning badges: Alert triangle SVG instead of `⚠️`.
  * Success checkmarks: Check circle SVG instead of `✅`, `✓`.
  * Ratings: SVG Stars instead of `★`.

### 5. `app-admin.html`
- Replace ALL emojis with clean Lucide SVGs:
  * Metric card icons: Bag/Box, Portions/Users, Shield/Success, Leaf/CO2e -> clean vector SVGs.
  * Tab icons: User-check/KYC, Audit/List, Users/Directory -> SVGs.
  * Action buttons: Approve check SVG, Reject X SVG.
  * Contact info: Phone SVG, Email SVG, Map pin SVG.

### 6. `daftar.html`
- Replace `🌱`, `🛡️`, `🤝` or any unicode symbols with canonical Lucide SVGs.

---

## 🛠️ Definition of Done
1. Zero emojis in `js/store.js`, `app-donatur.html`, `app-mitra.html`, `app-admin.html`, `login.html`, `daftar.html`.
   Verification command:
   ```bash
   python3 -c "import re, glob; files=['app-donatur.html','app-mitra.html','app-admin.html','login.html','daftar.html','js/store.js']; pat=re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27bf]'); [print(f, pat.findall(open(f).read())) for f in files if pat.findall(open(f).read())]"
   ```
   Must return ZERO matches.
2. All icon replacements use standard inline SVG (`stroke="currentColor"`, `stroke-width="2"`, `viewBox="0 0 24 24"`) matching the landing page.
3. Interactive functionality (store, demo switcher, forms, tabs) remains 100% intact.
4. Update `REPORT-S05.md`.
5. Git commit: `fix(icons): replace all emojis with canonical Lucide vector SVG icons across all portals`.
