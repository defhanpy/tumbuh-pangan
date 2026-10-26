# TASK-S15: Full-Width Container Optimization, Enrich Demo Seed Data, and Remove Floating Bottom Role Switcher

## 📌 Context & Directive
- **User Feedback**:
  1. "masi ada sisi kosong itu di kanan, full in aja biar ke isi" -> Remove artificial width constraints (`max-w-4xl`, `max-w-5xl`, etc.) on form containers, tabs, and card grids across `app-donatur.html`, `app-mitra.html`, and `app-admin.html` so the content expands across the full width with balanced padding.
  2. "sama dummy nya banyakin biar konten lebih padat" -> Expand seed dummy data in `js/store.js` (add more surplus food listings, more claims, more transaction history, and more registered merchants/shelters) so every dashboard tab looks active, rich, and well-utilized.
  3. "terus ganti peran di bawah itu hapus aja, cukup ganti peran yang di topbar aja" -> Remove the floating bottom role switcher toolbar (`#demo-switcher-bar` / `TPStore.renderDemoSwitcher`) entirely from all pages (`app-donatur.html`, `app-mitra.html`, `app-admin.html`), relying 100% on the clean topbar "Ganti Peran" dropdown.

---

## 🛠️ Step-by-Step Implementation Plan

### 1. Remove Floating Bottom Role Switcher Completely
- In `app-donatur.html`, `app-mitra.html`, `app-admin.html`:
  * Remove JS block that creates/mounts `switcherMount` and calls `TPStore.renderDemoSwitcher(...)`.
  * In `body` tags, change `pb-6 lg:pb-28` to standard `pb-10`.
- In `js/store.js`:
  * Deprecate or remove `renderDemoSwitcher` HTML generation.

### 2. Full-Width Container & Grid Expansion (Fill the Right Side)
- In `app-donatur.html`:
  * Tab 2 (Catat Makanan): Expand form container to full width (`w-full bg-white rounded-3xl p-6 sm:p-10 border border-border-color shadow-card`), use a balanced 2-column or 3-column layout on wide screens so inputs stretch naturally without awkward right-side void.
  * Tab 3 (Sedang Tayang): Grid responsive `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`.
  * Tab 4 (Permohonan Masuk): Grid responsive `grid grid-cols-1 lg:grid-cols-2 gap-6 w-full`.
  * Tab 5 (Serah Terima): 1:1 layout container stretches to `w-full max-w-6xl` or `w-full`.
  * Tab 6 (Riwayat): Full width table / card list.
- In `app-mitra.html`:
  * Tab 2 (Cari Makanan / Katalog): `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`.
  * Tab 3 (Permohonan Saya): `grid grid-cols-1 lg:grid-cols-2 gap-6 w-full`.
  * Tab 4 (Siap Kamu Ambil): 1:1 handover container stretches full width.
  * Tab 5 (Riwayat Selesai): Full width list.
- In `app-admin.html`:
  * Expand tables, user directories, and activity cards to fill full available width (`w-full`).

### 3. Enrich Seed Dummy Data (`js/store.js`)
- **Add more listings** (Total 6-8 listings covering diverse categories: Roti Gandum, Nasi Kotak Ayam Bakar, Sup Sayur Segar & Tahu, Aneka Dimsum & Bakpao, Buah Potong Segar, dll.).
- **Add more claims** (3-4 claims with different statuses: Menunggu Donatur, Siap Jemput, Selesai).
- **Add more completed history** (5-6 completed transactions with ratings & reviews).
- **Add more organizations** (Resto Padang Sederhana, Warung Katering Berkah, Hotel Aston Jember, Panti Asuhan Kasih Ibu, Dapur Lansia Sejahtera, dll.).

---

## 📋 Definition of Done
1. Floating bottom switcher bar is gone from all dashboard views.
2. Forms and card grids occupy the full width of the main canvas on desktop (no large empty right gap).
3. Seed data is dense, lively, and realistic across all tabs.
4. Create `REPORT-S15.md` and commit to git.
