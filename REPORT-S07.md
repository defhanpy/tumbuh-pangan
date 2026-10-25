# LAPORAN IMPLEMENTASI TASK-S07: GOJEK-STYLE CONVERSATIONAL UX WRITING

**Event**: FunDev International Competition 2026 (Universitas Sumatera Utara)  
**Proyek**: Tumbuh Pangan Dashboard & Application Prototype  
**Status**: SELESAI (100% Bahasa Akrab & Hangat, Zero Emojis, Lolos Uji Konsistensi)

---

## 📌 Ringkasan Eksekutif

Menindaklanjuti arahan owner:
> *"pake bahasa kaya gitu aja deh di dashboard"* (mengadopsi gaya bahasa Gojek: Clear, Concise, Empathetic / Delightful).

Seluruh salinan teks (copywriting) di ketiga portal aplikasi (`app-donatur.html`, `app-mitra.html`, `app-admin.html`) dan modul `js/store.js` telah diperbarui dari gaya birokratis/kaku menjadi nada percakapan yang hangat, akrab, solutif, dan bersahabat seperti aplikasi Gojek:
1. **Sapaan**: Menggunakan kata **"Kamu"** secara konsisten. Kata kaku **"Anda" telah dihapus 100% (0 kata "Anda" tersisa)**.
2. **Partikel Ramah**: Menggunakan partikel bahasa sehari-hari yang santai namun sopan: *"Yuk"*, *"Sip"*, *"Tenang"*, *"Mantap"*, *"Hore"*.
3. **Pesan Empatis & Solutif (No Blame Game)**:
   - Saat kosong: *"Belum ada surplus aktif nih. Dapurmu lagi senggang atau semua porsi sudah ludes terjual? Kalau ada lebihan, yuk langsung catat di sini!"*
   - Saat menunggu klaim: *"Belum ada klaim masuk nih. Santai, kami lagi kabari mitra terdekat di sekitarmu! Begitu ada yang mengajukan, langsung muncul di sini."*
   - Saat menunggu donatur: *"Menunggu Donatur Setuju (Sabar ya, pemilik usaha lagi cek permohonanmu)"*.
4. **Tombol Berorientasi Aksi**:
   - Donatur: *"Bagikan Makanan Sekarang"*, *"Setujui Penjemputan Ini"*, *"Konfirmasi Makanan Sudah Diambil"*.
   - Mitra: *"Ajukan Penjemputan"*, *"Kirim Permohonan Jemput"*, *"Kirim Ulasan Kebaikan"*.
   - Admin: *"Setujui & Aktifkan Akun"*, *"Tolak Dulu"*.
5. **Pesan Error & Sukses yang Hangat**:
   - PIN salah: *"PIN-nya belum pas nih, coba cek lagi 4 digit angkanya ya."*
   - Serah terima selesai: *"Beres! Serah terima selesai. Terima kasih sudah berbagi hari ini!"*

---

## 🔍 Detail Pembaruan per Berkas

| Berkas | Perubahan Kunci Gaya Bahasa Gojek | Status Kata "Anda" | Status Emoji |
|---|---|---|---|
| **`app-donatur.html`** | Header *"Yuk, Catat Makanan Surplus Hari Ini"*, Form *"Ada Makanan Lebih Apa Hari Ini?"*, Tombol *"Bagikan Makanan Sekarang"*, Status *"Klaim Menunggu Responmu"*, Toast *"Mantap! Makanan surplusmu berhasil dicatat dan siap dijemput."* | **0 (Bersih)** | **0 (Lucide SVG)** |
| **`app-mitra.html`** | Header *"Halo, Panti Asuhan Al-Ikhlas! Yuk cek surplus makanan layak santap hari ini."*, Modal *"Mau Jemput Berapa Porsi?"*, Tombol *"Kirim Permohonan Jemput"*, Modal ulasan *"Gimana Makanan & Pelayanannya? Ulasan jujurmu bikin donatur makin semangat berbagi."*, Tombol *"Kirim Ulasan Kebaikan"*. | **0 (Bersih)** | **0 (Lucide SVG)** |
| **`app-admin.html`** | Header *"Pusat Kendali Tumbuh Pangan: Pantau Pergerakan Kebaikan Hari Ini"*, Tab *"Calon Mitra yang Mau Gabung"*, *"Catatan Perjalanan Makanan"*, Tombol *"Setujui & Aktifkan Akun"*, State kosong *"Hore! Semua antrean pendaftar sudah beres diverifikasi."* | **0 (Bersih)** | **0 (Lucide SVG)** |
| **`js/store.js`** | Konfirmasi reset: *"Yakin mau reset semua data demo ke awal? Data yang baru kamu buat bakal kembali ke setelan pabrik ya."*, Notifikasi sukses *"Sip, data demo berhasil dikembalikan ke kondisi awal!"*, Error PIN *"PIN-nya belum pas nih, coba cek lagi 4 digit angkanya ya."* | **0 (Bersih)** | **0 (Lucide SVG)** |

---

## 🧪 Hasil Verifikasi Otomasi

1. **Audit Kata "Anda"**:
   ```
   app-donatur.html   | Words "Anda": 0
   app-mitra.html     | Words "Anda": 0
   app-admin.html     | Words "Anda": 0
   js/store.js        | Words "Anda": 0
   ```
2. **Audit Emoji**: 100% Bebas Emoji (0 emoji di seluruh berkas dashboard).
3. **Verifikasi Fungsionalitas**: Alur pembuatan listing, klaim mitra, persetujuan donatur, verifikasi PIN, pembaruan dampak lingkungan, dan reset demo teruji berjalan mulus tanpa kendala.
