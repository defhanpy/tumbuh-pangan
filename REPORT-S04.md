# LAPORAN IMPLEMENTASI TASK-S04: FULL INTERACTIVE FRONTEND PROTOTYPE

**Event**: FunDev International Competition 2026 (Universitas Sumatera Utara)  
**Proyek**: Tumbuh Pangan Landing & Web Application Prototype  
**Status**: SELESAI (100% Demo Ready, Zero Console Errors, Offline & Responsive)

---

## 📌 Ringkasan Eksekutif

Mengikuti arahan TASK-S04, seluruh arsitektur frontend telah diintegrasikan menjadi prototipe interaktif penuh tanpa ketergantungan server backend Go maupun database PostgreSQL. Seluruh siklus redistribusi pangan:
$$\text{Donatur Buat Surplus} \longrightarrow \text{Katalog Mitra} \longrightarrow \text{Klaim Logistik} \longrightarrow \text{Approval Donatur} \longrightarrow \text{Penerbitan QR \& PIN} \longrightarrow \text{Verifikasi Serah Terima} \longrightarrow \text{Pembaruan Metrik Dampak Lingkungan}$$
berjalan 100% fungsional dan reaktif secara real-time di peramban menggunakan modul `localStorage` mandiri pada `js/store.js`.

---

## 🏛️ Komponen & Berkas yang Diselesaikan

### 1. Engine State Reaktif: `js/store.js`
- **Penyimpanan**: `localStorage` terpusat (`tp_store_s04_v1`) dilengkapi fallback safe memory untuk lingkungan testing CLI/Node.js.
- **Data Seed**:
  * **3 Akun Donatur**: Roti Nusantara Artisan (Bakery, Kaliwates), Grand Heritage Hotel (Hotel, Sumbersari), Katering Barokah (Katering, Patrang).
  * **3 Akun Mitra Penyalur**: Panti Asuhan Al-Ikhlas (35 anak, Kaliwates), Dapur Relawan Berkah (Komunitas, Sumbersari), Yayasan Kasih Lansia (25 lansia).
  * **1 Akun Admin**: Admin Pusat Tumbuh Pangan (Super Verifikator).
  * **4 Listing Surplus Aktif**: Berbagai kategori makanan (Roti & Pastry, Siap Santap, Sayur & Buah) lengkap dengan estimasi porsi, bobot kg, countdown batas penjemputan, dan instruksi higienitas.
  * **Antrean Klaim & Transaksi Berjalan**: Transaksi terjadwal dengan 4-digit PIN acak dan riwayat transaksi selesai beserta rating ulasan.
  * **Antrean KYC Pendaftar Baru**: 2 pendaftar contoh (Warung Bu Trisno & Komunitas Peduli Sesama) plus entri dinamis dari `daftar.html`.
  * **Metrik Dampak Terpadu**: Total Kg pangan, Total Porsi, Rasio Keberhasilan (98.7%), dan Emisi CO2e dicegah ($1\text{ kg} = 2.5\text{ kg CO}_2\text{e}$).
- **Generator QR Code Mandiri (`generateQrSvg`)**:
  * Menggunakan generator matriks SVG deterministik resolusi tinggi warna `#14532D` tanpa dependensi library eksternal/CDN, sehingga dapat berjalan 100% offline.

### 2. Portal Donatur Pangan: `app-donatur.html`
- **Profil & Metrik**: Header resmi Roti Nusantara Artisan (Kaliwates, Jember) dengan 4 kartu KPI (Porsi Diselamatkan, Volume Kg, Batch Aktif, Rating Higienitas 4.9/5).
- **Tab 1 - Buat Listing Surplus**: Formulir terstruktur dengan kalkulasi otomatis kg dari porsi, jam produksi, batas jemput, kondisi simpan, titik jemput, dan klausul jaminan kelayakan pangan.
- **Tab 2 - Kelola Listing & Klaim Masuk**: Menampilkan batch aktif dan kartu permohonan klaim dari mitra penyalur lengkap dengan jarak radius, rekomendasi kecocokan porsi, tombol "Setujui Mitra Ini" dan "Tolak".
- **Tab 3 - Terminal Serah Terima (Handover)**: Kartu transaksi penjemputan aktif yang menampilkan **QR Code Transaksi**, **PIN 4 Digit**, dan terminal verifikasi langsung.

### 3. Portal Mitra Penyalur: `app-mitra.html`
- **Profil & Metrik**: Header Panti Asuhan Al-Ikhlas (kapasitas 35 anak) dengan KPI porsi diterima, jadwal jemput aktif, estimasi efisiensi anggaran (Rp 4.3 Jt), dan skor ketepatan waktu (99.2%).
- **Tab 1 - Katalog Surplus Terdekat**: Filter pill kategori (Semua, Roti & Pastry, Siap Santap, Sayur & Buah), pencarian instan, dan kartu surplus dengan indikator sisa waktu dan tombol klaim.
- **Modal Ajukan Klaim**: Formulir penyerapan porsi, armada relawan, estimasi menit tiba (ETA), dan catatan penyaluran.
- **Tab 2 - Penjemputan Saya**: Status klaim bertingkat (Menunggu Persetujuan, Siap Dijemput dengan QR & PIN, dan Riwayat Selesai).
- **Modal Ulasan Dua Arah (Rating & Review)**: Muncul setelah serah terima tuntas, mendukung penilaian 1–5 bintang, higienitas wadah, ketepatan waktu, dan catatan apresiasi donatur.

### 4. Portal Pengawas & Verifikator: `app-admin.html`
- **Dashboard Dampak Terintegrasi**: 4 metrik nasional & daerah (Total Kg, Total Porsi, Rasio Keberhasilan, Emisi CO2e Dicegah) yang reaktif bertambah setiap kali ada transaksi diselesaikan di browser.
- **Tab 1 - Antrean Verifikasi Akun Baru (KYC Gate)**: Daftar verifikasi lembaga baru dengan aksi "Verifikasi & Terbitkan Akun" atau "Tolak".
- **Tab 2 - Audit Log Transaksi Real-Time**: Buku besar lengkap dengan ID transaksi, donatur, mitra, volume, PIN, dan status.
- **Tab 3 - Manajemen Pengguna & Mitra Aktif**: Direktori seluruh donatur dan mitra terdaftar lengkap dengan reputasi dan filter peran.

### 5. Floating Demo Switcher Bar
- Terpasang secara elegan di bagian bawah seluruh portal (`app-donatur.html`, `app-mitra.html`, `app-admin.html`):
  `[ 🎭 MODE DEMO ] [ 🥖 Donatur ] [ 🤲 Mitra ] [ 🛡️ Admin ] [ 🔄 Reset Demo ] [ Beranda ↗ ]`
- Memungkinkan juri kompetisi dan presenter video beralih peran dalam 1 kali klik instan tanpa login berulang.

### 6. Integrasi Halaman Publik (`login.html` & `daftar.html`)
- **`login.html`**:
  * Ditambahkan kartu akses cepat ke 3 portal aplikasi (`app-donatur.html`, `app-mitra.html`, `app-admin.html`).
  * Form login dilengkapi sistem pengalihan pintar berdasarkan kredensial email.
- **`daftar.html`**:
  * Form pendaftaran terhubung langsung ke `TPStore.registerPendingUser()`.
  * Saat formulir dikirim, data otomatis masuk ke antrean KYC Admin dan menampilkan notifikasi beserta tombol pintas: *"Buka Antrean di Portal Admin"*.

---

## 🧪 Hasil Pengujian Otomasi (End-to-End Test Suite)

Pengujian siklus penuh telah dijalankan melalui skrip pengujian otomasi:
1. **Initial Seed**: 345.0 kg pangan, 1,380 porsi, 42 transaksi selesai.
2. **Posting Surplus**: Donatur menerbitkan "Baguette Prancis & Pastry Keju" (20 porsi, 5.0 kg). Listing berhasil terbit di katalog Mitra.
3. **Pengajuan Klaim**: Mitra Panti Al-Ikhlas mengajukan klaim 20 porsi dengan estimasi jemput 20 menit.
4. **Persetujuan Donatur**: Donatur menyetujui klaim, menerbitkan 4-digit PIN (`4362`) dan kode transaksi QR. Listing berubah status menjadi `CLAIMED`.
5. **Verifikasi PIN**:
   * Percobaan PIN salah (`0000`) -> Ditolak sistem dengan pesan error.
   * Percobaan PIN benar (`4362`) -> Transaksi berhasil ditandai `COMPLETED`.
6. **Reaktivitas Metrik Dampak**:
   * Total Pangan: $345.0\text{ kg} \longrightarrow 350.0\text{ kg}$ (+5.0 kg)
   * Total Porsi: $1,380 \longrightarrow 1,400\text{ porsi}$ (+20 porsi)
   * Emisi CO2e: $862.5\text{ kg} \longrightarrow 875.0\text{ kg CO}_2\text{e}$
7. **Pendaftaran KYC**: Form pendaftar baru tersimpan di antrean Admin dan berhasil diverifikasi oleh Admin.

---

## 🎨 Kepatuhan Desain & Kualitas Kode
- **Warna & Token**: Sesuai `DESIGN.md` (Forest `#14532D`, Primary `#27864B`, Soft Mint `#F5FAF5`, Border `#DCE9DE`, Warm Yellow `#F4D77B`).
- **Tipografi**: Plus Jakarta Sans & JetBrains Mono untuk angka metrik dan PIN.
- **Bahasa**: Ramah, santai, lugas khas Indonesia dengan penghapusan seluruh tanda em-dash (`—`).
- **Responsif**: Telah diverifikasi pada viewport desktop (1280x900) dan mobile (390x844).
