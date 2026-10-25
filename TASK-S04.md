# TASK-S04: Full Interactive Frontend Prototype (3 Portals, Shared LocalStore & Demo Switcher)

## 📌 Context & Objective
- **Event**: FunDev International Competition 2026 (USU)
- **Directive**: Backend Go & PostgreSQL is TEMPORARILY SKIPPED. Build a complete, functional, 100% interactive frontend prototype using client-side reactive state (`localStorage` + seed mock data).
- **Core Requirement**: The end-to-end food rescue journey MUST WORK IN REAL-TIME in the browser without server dependency:
  `Donatur Post Surplus -> Listing Appears on Mitra Catalog -> Mitra Submits Claim -> Donatur Reviews & Approves -> System Issues QR & 4-Digit PIN -> Mitra/Donatur Verifies PIN -> Transaction Status COMPLETED -> Admin Impact Metrics Increment Automatically`.
- **Target Deadline**: Must be rock-solid, bug-free, and demo-ready by morning.

---

## 🏛️ Deliverables & Architecture

### 1. Shared State Engine: `js/store.js`
Create a clean, reactive, standalone storage module managing `localStorage`:
- **Initial Seed Data**:
  * Donatur accounts: e.g. "Roti Nusantara Artisan" (Bakery, Kaliwates), "Grand Heritage Hotel" (Hotel, Sumbersari), "Katering Barokah" (Katering, Patrang).
  * Mitra accounts: e.g. "Panti Asuhan Al-Ikhlas" (35 anak, Kaliwates), "Dapur Relawan Berkah" (Komunitas, Sumbersari), "Yayasan Kasih Lansia" (25 lansia).
  * Admin account: "Admin Pusat Tumbuh Pangan".
  * Active surplus listings (with category, portions, storage condition, expiry countdown).
  * Claim requests (pending, approved).
  * Handover transactions (scheduled, completed, with dynamic 4-digit PIN e.g. `7429` and QR mock).
  * Aggregated impact metrics: Total Kg, Total Portions, Success Rate, CO2e reduction (1 kg = 2.5 kg CO2e).
  * Pending KYC registrations (seeded with 2 pending submissions).
- **Public Store Methods**:
  * `getSurplusListings()`, `createSurplusListing(data)`
  * `getClaims(listingId)`, `createClaim(data)`, `approveClaim(claimId)`, `rejectClaim(claimId)`
  * `verifyHandover(transactionId, pin)` -> marks completed, logs audit, increments impact
  * `getImpactMetrics()`
  * `getPendingUsers()`, `verifyUser(userId, action)`
  * `resetDemoData()` -> restores fresh seed data
  * `getCurrentUser()`, `switchUserRole(role)`

### 2. Portal Donatur: `app-donatur.html`
- **Header**: Logo, user profile ("Roti Nusantara Artisan", status: Terverifikasi), link to Beranda & Portal Switcher.
- **KPI Summary**: Porsi Diselamatkan (angka nyata dari store), Batch Aktif, Rating Mitra (4.9 / 5).
- **Tab/View 1: Buat Listing Surplus**:
  * Form terstruktur: Judul makanan, kategori (Roti & Pastry, Siap Santap, Sayur & Buah), jumlah porsi & estimasi kg, jam dimasak, batas waktu jemput (min. 10 menit), kondisi simpan (Suhu Ruang / Chiller / Warmer), catatan penjemputan.
  * Tombol submit: Menambah listing ke store dan langsung terbit di katalog Mitra.
- **Tab/View 2: Kelola Listing & Klaim Masuk**:
  * Menampilkan listing aktif donatur.
  * Menampilkan daftar mitra yang mengajukan klaim dengan rekomendasi sistem (jarak km, kapasitas porsi, waktu pengajuan).
  * Tombol "Setujui Mitra Ini" (menerbitkan status approval dan kode QR/PIN) & tombol "Tolak".
- **Tab/View 3: Terminal Serah Terima (Handover)**:
  * Kartu penjemputan aktif: Nama mitra penjemput, kontak, estimasi tiba.
  * Tampilan **QR Code transaksi** dan **PIN 4 Digit** (misal: `8391`).
  * Hitung mundur waktu sisa penjemputan.
  * Opsi input PIN verifikasi jika mitra menyebutkan kode secara lisan.
  * Status auto-update ke "Selesai (Completed)" dengan badge hijau dan konfirmasi sukses.

### 3. Portal Mitra Penyalur: `app-mitra.html`
- **Header**: Logo, user profile ("Panti Asuhan Al-Ikhlas", kapasitas 35 anak), link to Beranda & Portal Switcher.
- **Katalog Surplus Terdekat**:
  * Filter kategori (Semua, Roti, Siap Santap, Sayur), filter radius, dan pencarian.
  * Kartu surplus aktif: Foto makanan, nama donatur, sisa waktu penjemputan, porsi tersedia.
- **Modal Ajukan Klaim**:
  * Form klaim: Input jumlah porsi yang sanggup diserap (bisa sebagian atau seluruhnya), catatan armada penjemput, estimasi menit tiba.
  * Submit: Mengirim klaim ke store dan status berubah "Menunggu Persetujuan Donatur".
- **Tab/View Penjemputan Saya**:
  * Menampilkan status klaim: Menunggu Persetujuan / Disetujui Siap Dijemput / Selesai.
  * Saat disetujui: Menampilkan tombol "Buka Scanner QR / Tunjukkan PIN" untuk serah terima di outlet donatur.
  * Form verifikasi PIN 4-digit: Begitu PIN diverifikasi, transaksi selesai seketika.
- **Modal Ulasan Dua Arah (Rating & Review)**:
  * Setelah serah terima selesai, popup ulasan muncul: Bintang 1–5, aspek higienitas & ketepatan waktu, komentar singkat. Disimpan ke profil donatur.

### 4. Portal Admin Platform: `app-admin.html`
- **Header**: Logo, badge "Admin Verifikator Pusat", time display, link to Beranda & Reset Demo.
- **Impact Dashboard Terintegrasi**:
  * Total Kg Pangan Diselamatkan, Total Porsi Terdistribusi, Rasio Penyerapan (%), Emisi CO2e Dicegah (Kg).
  * Angka ini bereaksi secara dinamis saat transaksi baru diselesaikan di browser!
- **Tab 1: Antrean Verifikasi Akun Baru (KYC Gate)**:
  * Daftar pendaftar Donatur & Mitra berstatus `PENDING_VERIFICATION` (termasuk yang disubmit via `daftar.html`).
  * Tombol aksi: "Verifikasi / ACC" (status berubah `VERIFIED`) dan "Tolak".
- **Tab 2: Audit Log & Transaksi Real-Time**:
  * Tabel riwayat semua transaksi dengan timestamp, donatur, mitra, volume kg, status (`SCHEDULED`, `COMPLETED`, `NO_SHOW`).
- **Tab 3: Manajemen Pengguna & Mitra Aktif**:
  * Daftar seluruh donatur dan mitra yang aktif dengan reputasi score dan badge.

### 5. Demo Floating Switcher Bar (Wajib Ada di Semua Halaman App)
- Fixed bottom/top floating bar yang ringkas dan elegan:
  `[ 🎭 Mode Demo ] [ Donatur: Roti Nusantara ] [ Mitra: Panti Al-Ikhlas ] [ Admin: Pusat ] [ 🔄 Reset Data Demo ]`
- Memungkinkan presenter video demo atau juri beralih akun dalam 1 klik tanpa harus logout dan login ulang.

### 6. Integrasi Halaman Existing:
- **`login.html`**:
  * Tambahkan 3 tombol "Masuk Cepat Demo":
    1. *Masuk sebagai Donatur (Roti Nusantara Artisan)* -> redirect to `app-donatur.html`
    2. *Masuk sebagai Mitra Penyalur (Panti Asuhan Al-Ikhlas)* -> redirect to `app-mitra.html`
    3. *Masuk sebagai Admin Verifikator* -> redirect to `app-admin.html`
- **`daftar.html`**:
  * Saat user submit form pendaftaran, datanya langsung dimasukkan ke `localStorage` store antrean verifikasi Admin, dan diarahkan ke pesan: "Pendaftaran berhasil dikirim! Silakan buka Portal Admin untuk melihat proses verifikasinya."

---

## 🎨 Design & Quality Standards
- Design tokens sesuai `DESIGN.md` (Forest `#14532D`, Primary `#27864B`, Soft Mint `#F5FAF5`, Light Green `#E8F5E9`, dll).
- Font: Plus Jakarta Sans & JetBrains Mono untuk PIN dan angka metrik.
- Tone bahasa: Ramah, santai, akrab, jelas, dan lugas khas Indonesia.
- Zero em-dash (`—` kecuali pada placeholder kosong).
- Responsive mobile 375px–430px dan desktop dashboard.

---

## 🛠️ Definition of Done
1. `js/store.js` dibuat dan mengelola seluruh siklus data di `localStorage`.
2. `app-donatur.html`, `app-mitra.html`, `app-admin.html` dibuat dan terhubung 100% secara reaktif.
3. Alur lengkap Donatur post -> Mitra claim -> Donatur approve -> PIN/QR verified -> Impact updated berfungsi tanpa error console.
4. Demo Floating Bar switcher berfungsi di ketiga portal.
5. `login.html` dan `daftar.html` terintegrasi dengan store.
6. Buat `REPORT-S04.md`.
7. Git commit dengan pesan: `feat(app): implement complete interactive frontend prototype for donor, partner, and admin portals`.
