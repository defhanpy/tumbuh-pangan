# Laporan Pelaksanaan TASK-S10: Perombakan Penuh Modul Multi-Dashboard untuk Pengguna Awam

**Tanggal**: 26 Oktober 2026  
**Status**: Selesai Tuntas (100% Selesai)  
**Tujuan**: Mengembangkan antarmuka tiga portal utama Tumbuh Pangan (`app-admin.html`, `app-donatur.html`, `app-mitra.html`) dengan modul-modul sidebar lengkap, bahasa Indonesia yang hangat dan membumi (bebas istilah teknis), mempertahankan tata letak fokus 1:1 serah terima (QR Code + PIN Jumbo), dukungan dropdown Tom Select v2.4.1, dan sinkronisasi reaktif `localStorage`.

---

## 1. Ikhtisar Perubahan Modul Sidebar

### A. Portal Pengawas Komunitas (`app-admin.html`)
Mendukung 7 modul utama tanpa reload halaman (SPA tab-based routing):
1. **Ringkasan Aktivitas (`dashboard`)**:
   - 4 kartu metrik utama: Porsi Diselamatkan (2.450), Berat Pangan Terbagi (612 kg), Toko & Panti Bergabung (34), Nilai Kebaikan (Rp 36,7 Jt).
   - Grafik batang interaktif aktivitas 7 hari terakhir (Mingguan).
   - Pemantau status komunitas (Panti aktif siap jemput, toko aktif hari ini, makanan tersedia).
   - Kabar terbaru komunitas (live activity stream).
2. **Daftar Lembaga Sosial (`mitra`)**:
   - Daftar permohonan verifikasi panti asuhan/dapur umum baru dengan tombol persetujuan instan ("Setujui Lembaga" / "Tinjau Berkas").
   - Kartu-kartu lembaga sosial terverifikasi beserta jumlah anak asuh dan kontak pengurus.
3. **Daftar Toko & Usaha (`donatur`)**:
   - Direktori gerai donatur makanan terverifikasi (bakery, resto, hotel) dengan rating bintang, status aktif, dan jumlah porsi tersalurkan.
4. **Pantau Makanan Hari Ini (`surplus`)**:
   - Filter dropdown kategori & status menggunakan **Tom Select v2.4.1**.
   - Monitoring real-time seluruh makanan surplus yang sedang tayang, batas aman waktu konsumsi, dan porsi yang tersedia.
5. **Jejak Penyaluran (`penyaluran`)**:
   - Catatan transparan serah terima makanan dari donatur ke mitra, dilengkapi waktu penjemputan, porsi, kilogram muatan, nomor PIN, dan status penyaluran.
6. **Laporan Kebaikan & Lingkungan (`laporan`)**:
   - Metrik dampak lingkungan: 1.530 kg emisi gas metana/CO2e dicegah, 850 orang terbantu, 612 kg pangan diselamatkan.
   - Tombol cetak ramah printer (`window.print()`) untuk pelaporan pertanggungjawaban sosial.
7. **Pengaturan Komunitas (`pengaturan`)**:
   - Form toleransi waktu penjemputan (Tom Select), informasi PIC & kontak bantuan teknis (`defhanpy@gmail.com`), pemantau memori peramban (`localStorage`), dan tombol reset simulasi demo.

---

### B. Portal Toko & Donatur Pangan (`app-donatur.html`)
Mendukung 7 modul mandiri untuk kemudahan pemilik usaha kuliner:
1. **Ringkasan Toko (`dashboard`)**:
   - 4 metrik toko: Porsi Diselamatkan (340 porsi), Berat Makanan Terbagi (85 kg setara 212,5 kg CO2e dicegah), Permohonan Menunggu (1 panti), Rating Bintang dari Panti (4.9 / 5.0).
   - Spanduk aksi cepat pencatatan makanan berlebih.
   - 3 panduan praktis higienitas dapur (kemasan rapat, simpan sejuk, batas waktu konsumsi).
2. **Catat Makanan Lebih (`create`)**:
   - Formulir ramah awam pencatatan surplus harian dengan otomatisasi konversi porsi ke kilogram muatan.
   - Dropdown ramah sentuh menggunakan **Tom Select v2.4.1** untuk Jenis Makanan, Batas Waktu Jemput, dan Kondisi Simpan.
   - Checklist konfirmasi higienitas dapur.
3. **Makanan yang Sedang Tayang (`manage`)**:
   - Kartu makanan aktif yang sedang ditawarkan ke panti sekitar kota, waktu hitung mundur aman, dan opsi pembatalan.
4. **Permohonan Masuk (`claims`)**:
   - Daftar pengurus panti/relawan yang mengajukan penjemputan, jarak tempuh (km), armada/wadah yang dibawa, perkiraan menit sampai, dan tombol aksi ("Setujui Penjemputan" / "Tolak Dulu").
5. **Serah Terima Makanan (`terminal`)**:
   - **Tata letak fokus 1:1 benchmark**:
     * Kolom Kiri: Kartu putih bersih dengan Kode QR SVG besar terpusat (220px) beserta instruksi pemindaian kamera.
     * Kolom Kanan: Header batas waktu + **PIN 4-digit ukuran jumbo** (`text-5xl sm:text-6xl font-extrabold font-mono tracking-widest`) + Kotak muatan logistik 2 kolom (Porsi & Berat Kg) + kontak penerima manfaat.
     * Bawah: Tombol pill hijau lebar penuh "Konfirmasi Penyaluran".
6. **Riwayat & Ulasan Panti (`history`)**:
   - Arsip serah terima yang tuntas beserta bintang penilaian dan pesan terima kasih dari panti asuhan.
7. **Profil Tempat Usaha (`profile`)**:
   - Formulir pembaharuan nama toko, kategori gerai, nama PIC, alamat penjemputan, dan nomor kontak WhatsApp operasional toko yang langsung tersimpan ke `localStorage`.

---

### C. Portal Lembaga Sosial & Panti Asuhan (`app-mitra.html`)
Mendukung 6 modul terfokus untuk pengurus panti dan relawan:
1. **Ringkasan Penyaluran (`dashboard`)**:
   - 4 kartu pencapaian: Porsi Kamu Terima (290 porsi), Siap Dijemput (1 batch aktif), Permohonan Diproses (1 menunggu), Hemat Belanja Pangan (Rp 4,3 Juta).
   - Spanduk peluang jemput sore ini dari 4 toko sekitar kota.
   - 3 etika dan tata cara penjemputan (hadir tepat waktu, bawa wadah bersih, tunjukkan QR/PIN).
2. **Cari Makanan Terdekat (`catalog`)**:
   - Katalog makanan surplus layak konsumsi dari toko sekitar, filter kategori pil cepat, pencarian teks langsung, dan lencana rekomendasi ("95% Cocok untuk Pantimu").
   - Modal pengajuan permohonan jemput dengan pemilihan estimasi menit tiba menggunakan **Tom Select**.
3. **Permohonan Menunggu (`claims`)**:
   - Pemantau status permohonan makanan yang sedang diajukan ke toko, menunggu persetujuan kasir/pemilik.
4. **Siap Kamu Ambil (`pickup`)**:
   - **Tata letak fokus 1:1 benchmark**:
     * Kolom Kiri: Kartu kode QR verifikasi serah terima resolusi tinggi.
     * Kolom Kanan: Display jumbo PIN 4-digit + Box logistik 2 kolom (Porsi & Berat Kg) + Alamat gerai toko donatur.
     * Bawah: Tombol pill hijau lebar penuh "Konfirmasi Penyaluran" yang langsung membuka modal ulasan bintang.
5. **Riwayat Makanan Diterima (`history`)**:
   - Catatan bantuan makanan yang telah selesai diambil, status ulasan bintang, dan tombol beri ulasan bagi transaksi baru.
6. **Profil Lembaga / Panti (`profile`)**:
   - Formulir pembaruan profil panti: nama yayasan, jumlah anak asuh/warga binaan, nama penanggung jawab (PIC), alamat lengkap, nomor WhatsApp, dan armada/wadah makanan yang dimiliki.

---

## 2. Bahasa Membumi & Eliminasi Istilah Teknis

Seluruh antarmuka di ketiga portal telah dibersihkan dari jargon teknis:
| Istilah Teknis Dihapus | Bahasa Membumi yang Digunakan | Penerapan di Portal |
|---|---|---|
| KYC Verification | Verifikasi Lembaga Sosial / Tinjau Berkas Panti | `app-admin.html` |
| Audit Ledger / Blockchain Hash | Jejak Penyaluran Kebaikan | `app-admin.html` |
| Token / API Endpoint | Kode QR & PIN Verifikasi 4-Digit | `app-donatur.html`, `app-mitra.html` |
| Role Authentication / JWT | Keluar Sesi / Ganti Akun | Sidebar seluruh portal |
| Donor Surplus Pipeline | Catat Makanan Lebih / Sedang Tayang | `app-donatur.html` |
| Beneficiary Logistics Claim | Permohonan Jemput Panti Asuhan | `app-mitra.html`, `app-donatur.html` |

---

## 3. Komponen Desain & Konsistensi UI

1. **Dark Forest Green Sidebar**:
   - Warna latar belakang konsisten `#104028`, border pemisah `#0D3320`, teks putih bersih `text-white/75`.
   - Tombol aktif bernuansa hijau segar `bg-[#27864B] text-white font-bold shadow-sm`.
2. **Warm Off-White Canvas & Cards**:
   - Background halaman `#F4F6F0`.
   - Kartu konten berwarna putih `#FFFFFF` dengan sudut bulat elegan `rounded-3xl` dan border lembut `#DCE9DE`.
3. **Dukungan Responsif Mobile & Drawer**:
   - Drawer off-canvas otomatis tertutup saat tombol navigasi ditekan atau tombol `ESC` ditekan.
   - Tombol ganti peran demo tersimpan rapi di dalam drawer mobile tanpa menumpuk di atas konten layar.
4. **Tom Select v2.4.1**:
   - Diintegrasikan di seluruh elemen `<select>`: form catat surplus, filter pantau makanan, toleransi penjemputan admin, estimasi waktu tiba, hingga ulasan bintang panti.

---

## 4. Keandalan Reaktif State Store (`js/store.js`)

Ditambahkan metode pembantu untuk mendukung mutasi data antar modul:
- `TPStore.updateUserProfile(userId, updates)`: Memperbarui nama, alamat, nomor telepon, armada, dan kapasitas penerima secara reaktif.
- `TPStore.cancelSurplusListing(listingId)`: Membatalkan tayangan makanan berlebih secara instan.
- Mekanisme event `tp_store_change` tetap sinkron 100% antar-tab dan antar-peran di peramban.

---

## 5. Verifikasi & Pengujian Sintaksis

Pengujian sintaksis dijalankan via Node.js:
- `node -c js/store.js`: **LOLOS (Bersih tanpa error)**
- Verifikasi AST Script Blocks `app-admin.html`: **2 blok inline script valid**
- Verifikasi AST Script Blocks `app-donatur.html`: **2 blok inline script valid**
- Verifikasi AST Script Blocks `app-mitra.html`: **2 blok inline script valid**

Seluruh kriteria penerimaan TASK-S10 telah terpenuhi secara menyeluruh.
