# TASK-S10: Full Multi-Module Redesign for Super Admin, Mitra, and Donatur Portals

## 📌 Context & Objective
- **Directive**: Build a complete, intuitive, non-technical dashboard experience across all three portals (`app-admin.html`, `app-donatur.html`, `app-mitra.html`).
- **Target Users**: Non-technical ordinary people (F&B store owners, orphanage caretakers, social volunteers, platform coordinators). Avoid technical jargon (no "API", "microservices", "hash", "JWT", "SQL"). Use everyday human language.
- **Visual Foundation**:
  * Dark Forest Green Sidebar (`bg-[#104028]` with crisp white text, active pill in vibrant green `bg-[#27864B]`).
  * Warm Off-White Canvas (`bg-[#F4F6F0]`), Pure White cards with large rounded corners (`rounded-3xl`), subtle border (`border-[#DCE9DE]`), generous breathing room.
  * Canonical Lucide SVG icons (Zero emojis, zero generic AI icons).
  * Gojek-style warm, clear, concise conversational Indonesian ("Kamu", "Yuk", "Siap", "Beres").
  * 100% FE only (`localStorage` via `js/store.js`). No backend required.

---

## 🛠️ Portal Module Specifications

### 1. `app-admin.html` (Pusat Kendali Pengawasan Tumbuh Pangan)
Sidebar Modules:
1. `dashboard`: **Ringkasan Aktivitas** (Metrik porsi & kg terselamatkan, total donatur & mitra aktif, grafik tren mingguan ramah mata, kabar donasi terbaru).
2. `mitra`: **Daftar Lembaga Sosial** (Panti, yayasan, dapur umum, status verifikasi akun, kapasitas anak asuh, tombol setujui/tinjau pendaftar baru).
3. `donatur`: **Daftar Toko & Usaha** (Resto, bakery, hotel yang bergabung, rating kebersihan, total makanan dibagikan).
4. `surplus`: **Pantau Makanan Hari Ini** (Daftar makanan yang sedang tersedia di sekitar kota, status apakah sudah dijemput atau belum).
5. `penyaluran`: **Jejak Penyaluran** (Catatan serah terima makanan, siapa yang memberi, siapa yang mengambil, waktu serah terima, status selesai).
6. `laporan`: **Laporan Kebaikan & Lingkungan** (Rangkuman sederhana berapa kg emisi gas buang yang berhasil dicegah, opsi cetak ringkasan ramah printer).
7. `pengaturan`: **Pengaturan Komunitas** (Nama pengelola, kontak bantuan tim `defhanpy@gmail.com`, setelan batas waktu jemput sederhana).

### 2. `app-donatur.html` (Portal Usaha Pangan / Donatur)
Sidebar Modules:
1. `dashboard`: **Ringkasan Toko** (Porsi yang diselamatkan toko, kilogram makanan terbagi, bintang ulasan dari panti, status makanan hari ini).
2. `create`: **Catat Makanan Lebih** (Formulir ramah awam: nama makanan, porsi, pilihan waktu jemput, kondisi simpan, checklist kebersihan).
3. `manage`: **Makanan yang Sedang Tayang** (Kartu makanan aktif, waktu hitung mundur sisa aman, status apakah sudah ada yang minta).
4. `claims`: **Permohonan Masuk** (Daftar panti/komunitas yang mengajukan diri untuk menjemput, jarak tempuh, tombol Setujui Jemput).
5. `terminal`: **Serah Terima Makanan** (Tampilan fokus 1:1 sesuai referensi: QR Code besar di kiri, PIN 4-digit display jumbo di kanan + box logistik, tombol pill hijau lebar Konfirmasi Penyaluran).
6. `history`: **Riwayat & Ulasan Panti** (Daftar donasi yang sudah berhasil sampai ke tangan mitra beserta pesan terima kasih/ulasan mereka).
7. `profile`: **Profil Tempat Usaha** (Nama toko, alamat outlet, patokan lokasi penjemputan, jam operasional).

### 3. `app-mitra.html` (Portal Mitra Penyalur / Panti Asuhan)
Sidebar Modules:
1. `dashboard`: **Ringkasan Penyaluran** (Porsi makanan yang diterima bulan ini, anak asuh/warga yang terbantu, jadwal jemput hari ini).
2. `catalog`: **Cari Makanan Terdekat** (Katalog makanan siap santap & roti dari donatur terdekat, label rekomendasi kecocokan seperti "95% Cocok untuk Pantimu").
3. `claims`: **Permohonan Menunggu** (Status makanan yang sedang kamu ajukan, menunggu konfirmasi dari pemilik toko).
4. `pickup`: **Siap Kamu Ambil** (Tampilan fokus 1:1 saat donatur setuju: QR Code mitra di kiri, PIN 4-digit jumbo di kanan, detail porsi dan titik lokasi jemput).
5. `history`: **Riwayat Makanan Diterima** (Catatan bantuan makanan yang sudah selesai diambil, tombol beri bintang & ucapan terima kasih ke donatur).
6. `profile`: **Profil Lembaga / Panti** (Nama panti/yayasan, jumlah anak asuh/warga binaan, wadah jemput yang dimiliki, kontak penanggung jawab).

---

## 📋 Definition of Done
1. All three dashboards feature the complete sidebar modules listed above.
2. Navigating through sidebar items smoothly switches views without page reloads.
3. Language is 100% humanized, warm, and intuitive for everyday users (no technical jargon).
4. Handover view retains the clean 1:1 single-task focus benchmark (QR Code + Big PIN + Logistics Box + Wide Pill CTA).
5. Dropdowns use Tom Select v2.4.1.
6. Reactive store synchronization via `localStorage` continues to work seamlessly across roles.
7. Mobile responsiveness: Sidebar drawer functions smoothly with hamburger trigger, bottom demo switcher remains hidden on mobile and accessible in drawer.
8. Create `REPORT-S10.md` and commit all updates to git.
