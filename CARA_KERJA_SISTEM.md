# CARA KERJA SISTEM TUMBUH PANGAN (SOP & ALUR OPERASIONAL B2B2C)

**Proyek**: Tumbuh Pangan (Platform Redistribusi Pangan Kolaboratif)  
**Kompetisi**: FunDev International Competition 2026 (Universitas Sumatera Utara)  
**Institusi**: Institut Teknologi dan Sains Mandala (ITSM) Jember  
**Tim**: Team Mandala (Ilhan Awafi & Sarah Safira)  
**Status**: Dokumentasi Alur Resmi  

---

## 1. Filosofi & Model Ekosistem B2B2C
Tumbuh Pangan tidak mendistribusikan makanan langsung kepada perorangan di jalan raya. Sistem mempertemukan dua entitas utama terverifikasi:
- **Donatur Pangan (Pelaku Usaha F&B)**: Toko roti, restoran, katering, hotel, dan supermarket yang memiliki kelebihan pangan layak santap di jam tutup toko.
- **Mitra Penyalur (Lembaga Sosial & Komunitas Terverifikasi)**: Panti asuhan, yayasan yatim, dapur umum PMI, dan kelompok relawan sosial yang membina masyarakat/anak asuh.
- **Penerima Akhir**: Warga binaan dan keluarga prasejahtera yang diasuh oleh mitra penyalur.
- **Model Logistik**: **Self-Pickup (Penjemputan Mandiri)**. Donatur tidak dibebani ongkir kurir; pihak panti/relawan menjemput langsung ke toko dengan wadah higienis mandiri.

---

## 2. Alur Kerja Sistem 5 Tahap (End-to-End Workflow)

```
[1. DAFTAR & KURASI] 
   Donatur & Mitra daftar ──► Admin setujui data (Status: Aktif)
                                        │
                                        ▼
[2. CATAT SURPLUS] 
   Toko sisa makanan ──► Isi form + Checklist Kebersihan ──► Listing Tayang
                                        │
                                        ▼
[3. PENCOCOKAN & KLAIM] 
   Mitra buka katalog ──► Sistem beri skor cocok (95%) ──► Mitra ajukan jemput
                                        │
                                        ▼
[4. PERSETUJUAN TOKO] 
   Toko terima notif ──► Pilih panti terdekat ──► Toko klik "Setujui"
                                        │
                                        ▼
[5. SERAH TERIMA & DAMPAK] 
   Mitra datang bawa wadah ──► Tunjukkan PIN 4-digit / QR ──► Toko verifikasi
                                        │
                                        ▼
   • Transaksi selesai secara atomik (Anti-Fraud)
   • Porsi, Kg, dan Emisi CO2e otomatis bertambah di Dashboard
   • Mitra & Toko saling beri rating/ulasan
```

---

## 3. Rincian Teknis & Operasional per Tahap

### Tahap 1: Pintu Masuk & Verifikasi Akun (Admin Gate)
1. Calon donatur atau mitra mendaftar lewat formulir registrasi publik (`daftar.html`).
2. Akun baru masuk status antrean `PENDING_VERIFICATION` (belum memiliki hak transaksi).
3. **Super Admin** membuka portal `app-admin.html` pada modul *Lembaga Sosial* atau *Toko & Usaha*.
4. Admin memverifikasi keabsahan identitas dan menekan tombol **"Setujui & Aktifkan Akun"**.
5. Akun aktif dan dapat masuk (`login.html`) untuk beroperasi.

### Tahap 2: Toko Mencatat Makanan Surplus (Donatur Journey)
1. Menjelang jam tutup toko, staf/pemilik toko membuka portal `app-donatur.html` modul *Catat Makanan Lebih*.
2. Memasukkan data: Nama makanan, kategori, estimasi porsi, bobot kilogram total, batas waktu penjemputan, dan metode penyimpanan (suhu ruang / warmer / chiller).
3. Memenuhi protokol **Food Safety Gate**: Deklarasi wajib bahwa makanan bukan sisa piring, bau dan tekstur normal, serta kemasan tertutup rapat.
4. Menekan tombol **"Bagikan Makanan Sekarang"**. Makanan langsung dipublikasikan ke katalog surplus aktif.

### Tahap 3: Mitra Menemukan & Mengajukan Permohonan (Mitra Journey)
1. Panti asuhan membuka portal `app-mitra.html` modul *Cari Makanan Terdekat*.
2. Algoritma **Smart Food Matching** menghitung kecocokan multi-kriteria secara otomatis:
   - *Golden Window* (Urgensi waktu simpan): 40%
   - Kesesuaian porsi terhadap kapasitas panti: 25%
   - Jarak tempuh geografis / radius: 20%
   - Kapasitas fasilitas wadah/pendingin mitra: 15%
3. Katalog menampilkan lencana kecocokan (contoh: *"95% Cocok untuk Pantimu"*).
4. Mitra menekan **"Ajukan Jemput"**, memilih jumlah porsi kebutuhan riil, menginput perkiraan menit tiba, lalu mengirim permohonan.

### Tahap 4: Donatur Menyetujui Permohonan (Claim Approval)
1. Notifikasi masuk ke portal donatur pada modul *Permohonan Masuk*.
2. Pemilik toko meninjau profil pemohon (nama panti, kapasitas anak asuh, estimasi waktu tiba).
3. Toko menekan tombol **"Setujui Penjemputan Ini"**.
4. Sistem mengunci transaksi dan menerbitkan token serah terima unik:
   - Layar mitra menampilkan **QR Code transaksi & Kode PIN 4-digit**.
   - Layar donatur masuk ke antrean *Serah Terima Makanan (Penjemputan Aktif)*.

### Tahap 5: Serah Terima Fisik di Outlet (Atomic Handover & Impact Accounting)
1. Pengurus/relawan mitra tiba di outlet donatur membawa wadah bersih food-grade.
2. Donatur membuka modul *Serah Terima Makanan* (tampilan fokus 1:1):
   - Kolom kiri: Card QR Code pemindaian.
   - Kolom kanan: Display PIN 4-digit jumbo + box muatan logistik (Porsi & Kg).
3. Verifikasi dilakukan dengan mencocokkan kode PIN 4-digit mitra, lalu menekan tombol hijau **"Konfirmasi Penyaluran"**.
4. **Otomasi Dampak Lingkungan & Sosial**:
   - Transaksi selesai secara atomik (token PIN hangus, anti-penyalahgunaan).
   - Metrik dampak otomatis terakumulasi di buku besar lokal:
     $$\text{Reduksi Emisi CO}_2\text{e (kg)} = \text{Kg Pangan Terselamatkan} \times 2,5$$
   - Kedua pihak diarahkan ke dialog ulasan dua arah (rating 1-5 bintang & ucapan terima kasih).

---

## 4. Keunggulan Nilai Jual di Depan Dewan Juri
1. **Bebas Risiko Salah Sasaran (Anti-Fraud)**: Serah terima dikunci dengan verifikasi PIN/QR satu kali pakai.
2. **Perlindungan Hukum & Ketenangan Donatur**: Donatur terlindungi dari tuntutan hukum berkat protokol *Food Safety Gate* dan persetujuan *Terms of Mutual Respect*.
3. **Data Dampak Riil & Akuntabel**: Seluruh angka porsi dan reduksi $\text{CO}_2\text{e}$ bertambah secara matematis dari bukti serah terima nyata, bukan angka statis buatan.
4. **Mandiri & Zero Backend Latency**: Prototipe frontend-first berjalan mulus di browser juri lewat `localStorage` tanpa risiko server mati.
