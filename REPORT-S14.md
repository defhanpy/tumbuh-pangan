# LAPORAN IMPLEMENTASI TASK-S14: PERBAIKAN SPASI KONTEN DASHBOARD (LAYOUT SAAS RATA KIRI)

**Event**: FunDev International Competition 2026 (Universitas Sumatera Utara)  
**Proyek**: Tumbuh Pangan Dashboard (`app-donatur.html`, `app-mitra.html`, `app-admin.html`)  
**Status**: SELESAI (100% Selaras Arahan Layout SaaS Modern & Rata Kiri)

---

## 📌 Ringkasan Eksekutif

Menindaklanjuti keluhan pengguna terkait jarak kosong yang terlalu jauh (*awkward gap*) antara sidebar kiri dan konten halaman pada layar desktop:
1. **Penyebab Utama**: Penggunaan class `mx-auto` dan pembatasan lebar `max-w-6xl` / `max-w-7xl` pada tag `<main>`, serta `mx-auto` pada form dan kartu di dalam tab, yang memaksa konten memusatkan diri ke tengah viewport alih-alih merapat ke samping sidebar.
2. **Solusi Implementasi**:
   - Merombak tag `<main>` di ketiga portal dashboard menjadi full-width rata kiri: `<main class="w-full px-4 sm:px-6 lg:px-10 py-8 flex-grow">`.
   - Menghapus class `mx-auto` pada form input, kartu serah terima fokus 1:1, profil toko/lembaga, dan container kartu di dalam tab.
   - Mengoptimalkan sistem grid kartu makanan pada Donatur (*Sedang Tayang*) dan Mitra (*Katalog Surplus*) menjadi responsif `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`.

---

## 🛠️ Detail Perubahan per Berkas

### 1. `app-donatur.html`
- **Tag `<main>`**:
  - Sebelum: `<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">`
  - Sesudah: `<main class="w-full px-4 sm:px-6 lg:px-10 py-8 flex-grow">`
- **Tab 2 (Catat Makanan Lebih)**:
  - Form wrapper diubah dari `max-w-3xl ... mx-auto` menjadi `max-w-4xl bg-white rounded-3xl p-6 sm:p-10 border border-border-color shadow-card` (rata kiri dan lebih leluasa).
- **Tab 3 (Sedang Tayang)**:
  - Grid container `#container-my-listings` diperbarui menjadi `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`.
  - Empty state disesuaikan menggunakan `col-span-full` agar membentang sempurna.
- **Tab 5 (Serah Terima Makanan / Terminal 1:1)**:
  - Container transaksi aktif diperbarui dari `max-w-4xl mx-auto` menjadi `max-w-5xl space-y-6` (rata kiri).
  - Empty state dihapus `mx-auto`-nya sehingga konsisten rata kiri.
- **Tab 7 (Profil Toko)**:
  - Container form profil dihapus `mx-auto`-nya (`max-w-2xl ... space-y-6`).

### 2. `app-mitra.html`
- **Tag `<main>`**:
  - Sebelum: `<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">`
  - Sesudah: `<main class="w-full px-4 sm:px-6 lg:px-10 py-8 flex-grow">`
- **Tab 2 (Katalog Surplus)**:
  - Grid container `#container-surplus-catalog` diubah dari `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` menjadi `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6` (memberikan ruang kartu yang ideal tanpa desak-desakan di layar 1024px–1280px).
- **Tab 4 (Siap Kamu Ambil / Terminal Penjemputan)**:
  - Kartu fokus serah terima diubah dari `max-w-4xl mx-auto` menjadi `max-w-5xl space-y-6` (rata kiri).
  - Empty state dihapus `mx-auto`-nya.
- **Tab 6 (Profil Lembaga)**:
  - Container form profil dihapus `mx-auto`-nya (`max-w-2xl ... space-y-6`).

### 3. `app-admin.html`
- **Tag `<main>`**:
  - Sebelum: `<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">`
  - Sesudah: `<main class="w-full px-4 sm:px-6 lg:px-10 py-8 flex-grow">`
- Seluruh tabel pengawasan, kartu ringkasan KPI, grafik penyelamatan pangan mingguan, dan daftar pendaftar KYC langsung melebar secara proporsional dan merapat rapi ke sisi sidebar kiri.

---

## 📱 Hasil Pengujian Responsivitas & Tampilan Layar
- **Mobile (375px – 430px)**: Padding horizontal `px-4` rapi, drawer sidebar berfungsi sempurna, tidak ada horizontal overflow / scrollbar samping.
- **Tablet / Laptop Ringkas (768px – 1024px)**: Grid kartu mengalir dalam 2 kolom teratur (`md:grid-cols-2`).
- **Desktop & Ultra-wide (1280px – 1920px)**: Grid kartu mengalir dalam 3 kolom lega (`xl:grid-cols-3`). Konten langsung dimulai di sebelah kanan sidebar tanpa jeda abu-abu kosong yang canggung.
