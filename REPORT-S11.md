# Laporan Pengerjaan TASK-S11: Penyederhanaan Topbar & Menu Profil Dropdown

## 📌 Ringkasan Eksekutif
Berdasarkan arahan pada `TASK-S11.md`, topbar pada ketiga portal dashboard (`app-admin.html`, `app-donatur.html`, dan `app-mitra.html`) telah berhasil disederhanakan total:
1. **Menghilangkan clutter visual**: Menghapus deretan breadcrumb yang ramai, jam live realtime, serta tombol-tombol aksi sekunder yang membuat sesak area header atas.
2. **Pojok Kiri Atas**:
   - Di mobile (`<1024px`): Tombol hamburger untuk membuka drawer menu + Logo resmi Tumbuh Pangan (`logo.svg` yang memuat ikon mangkuk tunas dan teks *Tumbuh Pangan*).
   - Di desktop (`≥1024px`): Logo resmi Tumbuh Pangan terhubung langsung ke `index.html`.
3. **Pojok Kanan Atas**:
   - Tombol profil minimalis dan elegan: Avatar bulat berisi inisial peran/pengguna + Nama akun (tampil rapi di layar `sm:` ke atas) + Chevron panah kecil.
4. **Floating Profile Dropdown (`profile-dropdown`)**:
   - Menampilkan kartu header profil: Inisial, nama akun resmi, badge peran spesifik, dan badge hijau *Terverifikasi*.
   - Pilihan menu navigasi:
     - **Akun Saya**: Membuka tab Profil (Donatur & Mitra) atau Pengaturan (Admin).
     - **Beranda Publik**: Tautan langsung ke landing page `index.html`.
     - **Keluar / Ganti Akun**: Tautan ke `login.html` untuk mengakhiri sesi.
   - Otomatis tertutup saat pengguna mengklik area luar menu (*dismiss on outside click*) atau menekan tombol `Escape`.
5. **Keamanan Tab Switching (`switchTab`)**:
   - Pengecekan elemen judul dan breadcrumb tetap aman tanpa exception (`if (bc)`, `if (tit)`).
   - Diperkuat dengan sinkronisasi otomatis `document.title` agar tab browser tetap informatif sesuai modul aktif.

---

## 🛠️ Rincian Modifikasi per Berkas

### 1. `app-admin.html`
- **Topbar**:
  - Dihapus: Breadcrumb `header-breadcrumb`, judul sub-header `header-page-title`, jam live `admin-live-clock`, dan tombol `Reset Data Demo` di topbar (fitur Reset Demo tetap tersedia aman di sidebar bawah).
  - Ditambahkan: Logo `logo.svg` di kiri, serta tombol profil `Pengawas Komunitas` (`PK`) di kanan.
  - Dropdown Profil:
    - Akun Saya mengarah ke `switchTab('pengaturan')`.
    - Menampilkan badge `Koordinator Pusat` & status verifikasi.
- **JavaScript**:
  - Menambahkan fungsi `toggleProfileMenu()`, `closeProfileMenu()`, dan `handleProfileMenuSelect()`.
  - Event listener `click` luar kontainer dan `keydown (Escape)`.
  - `switchTab()` otomatis menutup dropdown profil jika sedang terbuka.

### 2. `app-donatur.html`
- **Topbar**:
  - Dihapus: Breadcrumb bertingkat toko, jam status "Toko Terbuka", dan tombol "Catat Makanan" di header (aksi Catat Makanan tetap ada di navigasi utama sidebar & dashboard CTA).
  - Ditambahkan: Logo `logo.svg` di kiri, serta tombol profil donatur dengan `id="header-user-name"` dan inisial `RN`.
  - Dropdown Profil:
    - Akun Saya mengarah ke `switchTab('profile')`.
    - Menampilkan badge `Donatur • Usaha Pangan` dan status terverifikasi.
- **JavaScript**:
  - `renderPortal()` tetap reaktif memperbarui `header-user-name` dan `dropdown-user-name` dari `TPStore.getCurrentUser()`.
  - Fungsi dropdown profil lengkap dengan dismiss handler.

### 3. `app-mitra.html`
- **Topbar**:
  - Dihapus: Breadcrumb panti asuhan, jam status "Komunitas Terdaftar", dan tombol "Cari Makanan" di header.
  - Ditambahkan: Logo `logo.svg` di kiri, serta tombol profil mitra dengan `id="header-mitra-name"` dan inisial `PA`.
  - Dropdown Profil:
    - Akun Saya mengarah ke `switchTab('profile')`.
    - Menampilkan badge `Penerima Manfaat • Sosial` dan status terverifikasi.
- **JavaScript**:
  - `renderPickups()` memperbarui `header-mitra-name` dan `dropdown-mitra-name` secara dinamis.
  - Fungsi dropdown profil lengkap dengan dismiss handler.

---

## ✅ Pengujian & Verifikasi

1. **Struktur & Sintaks JavaScript**:
   - Telah diuji menggunakan Node.js VM compiler: Semua inline scripts pada ketiga file lolos validasi sintaks tanpa error.
2. **Tab Switching**:
   - `switchTab` dipastikan memiliki null-safety check terhadap elemen breadcrumb / title yang sudah dilepas dari topbar.
   - Panggilan `switchTab('pengaturan')` di Admin dan `switchTab('profile')` di Donatur & Mitra bekerja mulus melalui tombol "Akun Saya" di dropdown.
3. **Responsivitas**:
   - Mobile (`<1024px`): Tombol hamburger muncul di sisi kiri logo, nama teks profil disembunyikan secara rapi menyisakan avatar bulat + chevron untuk menghemat ruang horizontal.
   - Desktop (`≥1024px`): Hamburger otomatis disembunyikan, identitas brand dan profil pengguna tampil proporsional dan bersih.
4. **Aksesibilitas (A11y)**:
   - Atribut `aria-haspopup="true"`, `aria-expanded="true/false"`, dan `role="menuitem"` diimplementasikan dengan benar.
   - Tombol `Escape` langsung menutup menu yang sedang aktif.
