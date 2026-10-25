# TASK-S07: Transform Dashboard UX Writing to Gojek-Style Conversational Tone

## 📌 Context & Objective
- **Directive**: User wants Gojek-style tone of voice applied across all dashboard portals (`app-donatur.html`, `app-mitra.html`, `app-admin.html`, and `js/store.js` messages).
- **Gojek Tone Pillars**:
  1. **Friendly & Conversational ("Teman yang Bisa Diandalkan")**:
     - Gunakan sapaan **"Kamu"** (bukan "Anda" yang kaku/formal).
     - Awalan ramah & akrab: *"Yuk"*, *"Siap"*, *"Tenang"*, *"Wah, mantap!"*, *"Coba cek"*.
  2. **Empathetic & Solution-Oriented**:
     - Jangan salahkan pengguna. Saat kosong/gagal: beri tahu solusinya dengan santai.
     - Contoh: *"Belum ada surplus nih. Dapurmu lagi senggang atau semua porsi sudah ludes terjual? Kalau ada lebihan, yuk langsung catat di sini!"*
  3. **Active Verbs on Buttons (Action-Oriented)**:
     - Bukan label pasif ("Konfirmasi", "Kirim").
     - Gunakan: *"Bagikan Makanan Ini"*, *"Jemput Makanan"*, *"Selesaikan Serah Terima"*, *"Verifikasi Sekarang"*.
  4. **Transparent & Reassuring**:
     - *"Donatur lagi cek permintaanmu, tunggu sebentar ya"*
     - *"Beres! Makanan berhasil diselamatkan dan siap bikin tersenyum."*
  5. **Tetap Tegas untuk Keamanan & Higienitas**:
     - Bagian batas waktu aman dan higienitas tetap jelas tanpa kompromi.

---

## 🔍 Specific Changes per File

### 1. `app-donatur.html` (Portal Donatur)
- **Header & Welcome**:
  - Ganti breadcrumb/title: *"Yuk, Catat Makanan Surplus Hari Ini"*, *"Kelola Permohonan Masuk"*, *"Terminal Serah Terima"*
- **KPI Cards**:
  - *"Porsi Kamu Selamatkan"*, *"Total Makanan Terbagi"*, *"Klaim Menunggu Responmu"*
- **Form Buat Surplus**:
  - Ganti judul/copy: *"Ada Makanan Lebih Apa Hari Ini?"*
  - Subtitle: *"Yuk catat detailnya biar cepat dipertemukan dengan mitra panti atau dapur sosial terdekat."*
  - Helper copy: *"Tenang, data ini langsung muncul di layar mitra penyalur terdekat dalam radiusmu."*
  - Tombol Submit: *"Bagikan Makanan Sekarang"*
- **Tab Kelola Listing & Klaim**:
  - Ganti: *"Permohonan Masuk dari Mitra"*, *"Ada mitra yang mau jemput makananmu nih, yuk cek kecocokannya."*
  - Empty state: *"Belum ada klaim masuk. Santai, kami lagi kabari mitra terdekat di sekitarmu!"*
  - Tombol Approve: *"Setujui Penjemputan Ini"*, Tombol Reject: *"Tolak Dulu"*
- **Tab Terminal Serah Terima**:
  - Ganti: *"Serah Terima Makanan"*
  - Petunjuk: *"Tunjukkan QR Code ini ke mitra penjemput, atau masukkan 4 digit PIN yang mereka sebutkan."*
  - Empty state: *"Belum ada jadwal jemput aktif. Begitu kamu setujui klaim mitra, QR dan PIN langsung nongol di sini."*
  - Tombol verifikasi PIN: *"Konfirmasi Makanan Sudah Diambil"*
- **Toast Notifications**:
  - *"Mantap! Makanan surplusmu berhasil dicatat dan siap dijemput."*
  - *"Sip, klaim mitra sudah disetujui. QR & PIN siap dipakai!"*
  - *"Beres! Serah terima selesai. Terima kasih sudah berbagi hari ini!"*

### 2. `app-mitra.html` (Portal Mitra Penyalur)
- **Header & Welcome**:
  - *"Panti Asuhan Al-Ikhlas"* -> *"Halo, Panti Asuhan Al-Ikhlas! Yuk cek surplus makanan layak santap hari ini."*
- **KPI Cards**:
  - *"Porsi Kamu Terima"*, *"Jadwal Jemput Aktif"*, *"Hemat Anggaran Pangan"*, *"Skor Jemput Tepat Waktu"*
- **Katalog Surplus**:
  - Title: *"Surplus Pangan Terdekat Buat Komunitasmu"*
  - Subtitle: *"Semua makanan di bawah sudah lolos uji keamanan dan siap kamu jemput."*
  - Empty state: *"Wah, belum ada surplus di sekitarmu saat ini. Coba cek kategori lain atau tunggu sebentar ya, donatur biasanya posting menjelang sore/malam."*
  - Card button: *"Ajukan Penjemputan"*
- **Modal Klaim**:
  - Title: *"Mau Jemput Berapa Porsi?"*
  - Subtitle: *"Sesuaikan dengan kapasitas anak asuh atau warga yang kamu dampingi ya."*
  - Field: *"Kira-kira berapa menit kamu sampai di lokasi?"*
  - Tombol Submit: *"Kirim Permohonan Jemput"*
- **Tab Penjemputan Saya**:
  - Title: *"Daftar Makanan yang Siap Kamu Ambil"*
  - Step waiting: *"Menunggu Donatur Setuju"*, *"Sabar ya, pemilik usaha lagi cek permohonanmu."*
  - Step approved: *"Siap Dijemput!"*, *"Yuk meluncur ke lokasi sebelum batas waktu habis."*
  - Tombol modal QR/PIN: *"Buka Kode Serah Terima"*
  - Modal QR/PIN: *"Tunjukkan kode ini ke kasir/staf outlet saat kamu sudah sampai di lokasi."*
- **Modal Rating / Ulasan**:
  - Title: *"Gimana Makanan & Pelayanannya?"*
  - Subtitle: *"Ulasan jujurmu bikin donatur makin semangat berbagi dengan standar terbaik."*
  - Tombol Submit: *"Kirim Ulasan Kebaikan"*
- **Toast Notifications**:
  - *"Permohonan jemput terkirim! Tinggal tunggu persetujuan donatur ya."*
  - *"Terima kasih banyak! Ulasanmu sudah masuk ke profil donatur."*

### 3. `app-admin.html` (Portal Admin Verifikator)
- **Header & Title**:
  - *"Pusat Kendali Tumbuh Pangan"*, *"Pantau pergerakan kebaikan, verifikasi mitra baru, dan cek dampak lingkungan."*
- **KPI Cards**:
  - *"Pangan Terselamatkan"*, *"Porsi Dibagikan"*, *"Tingkat Keberhasilan"*, *"Jejak Emisi Dicegah"*
- **Tab Antrean KYC**:
  - Title: *"Calon Mitra Baru yang Mau Gabung"*
  - Subtitle: *"Yuk periksa datanya biar ekosistem tetap aman dan terpercaya."*
  - Empty state: *"Hore! Semua antrean pendaftar sudah beres diverifikasi."*
  - Tombol: *"Setujui & Terbitkan Akun"*, *"Tolak Dulu"*
- **Tab Audit Log**:
  - Title: *"Catatan Perjalanan Setiap Makanan"*
  - Subtitle: *"Mulai dari dicatat donatur, disetujui, sampai sukses berpindah tangan."*
- **Toast Notifications**:
  - *"Sip, akun berhasil diverifikasi dan sudah bisa mulai bertransaksi!"*

### 4. `js/store.js`
- Perbarui pesan toast, error message, dan confirm dialog:
  - *"Yakin mau reset semua data demo ke awal? Data yang baru kamu buat bakal kembali ke setelan pabrik ya."*
  - *"Sip, data demo berhasil dikembalikan ke kondisi awal!"*
  - *"PIN-nya belum pas nih, coba cek lagi 4 digit angkanya ya."*
  - *"Transaksi ini sudah pernah diselesaikan sebelumnya kok."*

---

## 🛠️ Definition of Done
1. Seluruh kata "Anda" di dashboard diganti menjadi gaya sapaan "Kamu" / ramah khas Gojek.
2. Nada copy terasa hangat, empatis, berorientasi solusi, dan tombol menggunakan kata kerja aktif.
3. Tetap ZERO emojis (gunakan icon Lucide SVG).
4. Buat `REPORT-S07.md`.
5. Git commit: `feat(copy): adopt Gojek-style conversational and empathetic UX writing across dashboard portals`.
