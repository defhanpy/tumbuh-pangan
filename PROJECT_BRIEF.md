# PROJECT BRIEF: TUMBUH PANGAN
**Collaborative Food Surplus Redistribution Platform**

---

## 1. Identitas Proyek & Kompetisi
- **Nama Produk**: Tumbuh Pangan
- **Tagline**: *"Bersama Menumbuhkan Manfaat Pangan"*
- **Target Kompetisi**: **FunDev International Competition 2026** (Universitas Sumatera Utara)
- **Kategori / Tema**: *Digital Creative Technology for Sustainable Development Goals (SDGs)*
- **Fokus SDGs**:
  - **SDG 2**: *Zero Hunger* (Menghilangkan Kelaparan, Mencapai Ketahanan Pangan)
  - **SDG 12.3**: *Halve Global Food Loss and Waste* (Mengurangi 50% Pemborosan Pangan)
- **Nama Tim**: **Apa Yaa Namanya**
- **Susunan Anggota**:
  1. **Ilhan Awafi** — *Product Engineering & System Architecture*
  2. **Sarah Safira** — *Sustainability Research, Impact Modeling & UI/UX Design*
- **Dosen Pembimbing / Supervisor**: **Muhamat Abdul Rohim S.Kom., M.Si**
- **Afiliasi Institusi**: **Institut Teknologi dan Sains Mandala (ITSM), Jember**
- **Kolaborasi Industri**: **Defhanpy** (Web & Digital Solutions) — `https://defhanpy.dev`
- **Official Live URL**: **[https://tumbuh-pangan.dev-mode.web.id](https://tumbuh-pangan.dev-mode.web.id)**

---

## 2. Latar Belakang & Pernyataan Masalah (Problem Statement)
Berdasarkan kajian resmi Bappenas RI (2021), Indonesia membuang **23 hingga 48 juta ton makanan per tahun** (Food Loss and Waste/FLW). Dampaknya:
1. **Kerugian Ekonomi**: Mencapai **Rp 213 – 551 triliun per tahun** (sekitar 4–5% dari PDB Indonesia).
2. **Emisi Lingkungan**: Berkontribusi sebesar **7,29% dari total emisi gas rumah kaca nasional**.
3. **Ironi Sosial**: Di sisi lain, jutaan keluarga rentan dan anak asuh di panti asuhan masih mengalami defisit nutrisi harian.

### Akar Masalah di Lapangan (Pain Points)
- **Bagi Donatur (Restoran, Toko Roti, Hotel, Katering)**: Makanan layak santap tersisa menjelang tutup toko, namun pemilik usaha tidak memiliki waktu dan saluran aman untuk mendistribusikannya secara teratur tanpa mengganggu operasional.
- **Bagi Mitra Penyalur (Panti Asuhan, Dapur Sosial, Relawan)**: Keterbatasan akses informasi surplus yang tersedia di sekitar mereka, ketidakpastian volume, dan ketiadaan jaminan standar higienitas pangan.
- **Risiko Pertanggungjawaban**: Ketakutan donatur akan risiko keracunan makanan jika makanan yang didonasikan tidak melalui protokol inspeksi keselamatan yang jelas.

---

## 3. Solusi Produk & Triad Inovasi Kunci

Tumbuh Pangan hadir sebagai **ekosistem digital B2B2C** yang mempertemukan donatur pangan komersial dengan mitra penyalur sosial terakreditasi melalui 3 pilar teknologi:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   TRIAD INOVASI TUMBUH PANGAN                          │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│  Smart Food         │  Digital Food Safety     │  Atomic Handover      │
│  Matching Engine    │  Gate Standard           │  & Impact Ledger      │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ • Golden Window 40% │ • Form Inspeksi Sensori  │ • Verifikasi PIN      │
│ • Porsi & Nutrisi 25%│ • Kontrol Rantai Suhu    │   4-Digit / QR        │
│ • Radius Jarak 20%  │ • Batas Tanggung Jawab   │ • Perhitungan Otomatis│
│ • Kapasitas Mitra 15%│   (Terms of Mutual Resp) │   CO2e & Porsi Resik  │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

1. **Smart Food Matching Algorithm**:
   Sistem penskoran prioritas multi-kriteria yang menghitung kecocokan batch surplus dengan kebutuhan penerima secara real-time, mengutamakan makanan dengan masa simpan kritis (*Golden Window*) dan jarak terdekat.
2. **Digital Food Safety Gate**:
   Protokol deklarasi keselamatan wajib sebelum donasi dipublikasikan (kondisi fisik, aroma, tekstur, alergen, dan metode penyimpanan: suhu ruang, warmer, atau chiller) untuk melindungi donatur dan menjaga martabat penerima.
3. **Atomic Handover & Real-Time Impact Ledger**:
   Serah terima fisik di outlet diverifikasi melalui token PIN 4-digit unik atau pemindaian QR. Saat serah terima terkonfirmasi, metrik dampak (porsi diselamatkan, kg pangan, dan reduksi emisi CO2e) langsung dicatat ke dalam buku besar publik yang transparan.

---

## 4. Arsitektur Teknis & Struktur Sistem

Proyek ini dibangun menggunakan pendekatan **Clean High-Performance Static Frontend Architecture** yang siap diakses cepat oleh dewan juri tanpa hambatan dependensi server:

- **Arsitektur Halaman**: Multi-page HTML5 semantik dengan routing bersih (`cleanUrls: true`).
- **Styling & Tokens**: Tailwind CSS dengan palet organik *Forest Green* (`#14532D`), *Primary* (`#27864B`), *Soft Mint* (`#F5FAF5`), dan *Warm Yellow* (`#F4D77B`). Tipografi resmi: **Plus Jakarta Sans**.
- **Komponen & Ikon**: 100% menggunakan vektor outline **Lucide SVG** kanonikal (Bebas total dari emoji AI generik) dan **Tom Select v2.4.1** untuk seluruh dropdown interaktif.
- **Mesin State Reaktif Lokal (`js/store.js`)**: Event-driven client-side store berbasis `localStorage` yang mensinkronisasikan alur transaksi antar-tab secara instan (Donatur membuat listing &rarr; Mitra mengklaim &rarr; Donatur verifikasi PIN &rarr; Metrik dampak otomatis naik &rarr; Admin memverifikasi KYC pendaftar baru).
- **Infrastruktur Produksi**: Deployed di Vercel Edge Network dengan domain resmi `tumbuh-pangan.dev-mode.web.id`, dilengkapi SSL HTTPS aktif dan kompresi WebP.

---

## 5. Portal & Alur Pengguna (User Flows)

1. **Halaman Publik**:
   - `index.html` (Beranda & Hero Call-to-Action)
   - `tentang.html` (Latar Belakang Krisis FLW Indonesia & Misi Gotong Royong)
   - `cara-kerja.html` (Alur Estafet Pangan 5 Langkah)
   - `fitur.html` (Dokumentasi Fitur & Simulator Radius Interaktif)
   - `dampak.html` (Transparansi Metrik Ekologis & Sosial)
   - `faq.html` (Tanya Jawab Seputar Operasional & Sanitasi Pangan)
2. **Gerbang Masuk & Registrasi**:
   - `login.html`: Akses masuk 1-klik untuk akun demo Donatur, Mitra, dan Admin.
   - `daftar.html`: Formulir pendaftaran mitra terpadu dengan pemilih peran (*Donatur* vs *Penyalur*).
3. **Aplikasi Dashboard 3-Peran**:
   - `app-donatur.html`: Formulir pencatatan surplus, antrean klaim mitra, dan terminal verifikasi serah terima.
   - `app-mitra.html`: Katalog surplus terdekat dengan skor kecocokan, instruksi penjemputan, input PIN, dan ulasan dua arah.
   - `app-admin.html`: Pusat kendali pengawasan, antrean persetujuan KYC lembaga baru, dan audit log transaksi real-time.

---

## 6. Skenario Uji Coba Dewan Juri (3-Minute Evaluation Tour)
1. **Buka Live URL**: Kunjungi `https://tumbuh-pangan.dev-mode.web.id`.
2. **Masuk Demo**: Klik tombol *"Coba Demo / Masuk"* di navbar atau hero.
3. **Catat Surplus (Donatur)**: Masuk sebagai Donatur &rarr; isi form surplus &rarr; klik *"Bagikan Makanan Sekarang"*.
4. **Klaim Porsi (Mitra)**: Beralih peran ke Mitra Penyalur &rarr; pilih makanan &rarr; klik *"Ajukan Penjemputan"* &rarr; peroleh kode PIN 4-digit.
5. **Konfirmasi Serah Terima**: Kembali ke Donatur &rarr; setujui klaim &rarr; masukkan kode PIN mitra.
6. **Pantau Dampak**: Lihat total porsi terselamatkan dan kg CO2e yang langsung bertambah otomatis di dashboard dampak dan catatan audit Admin.
