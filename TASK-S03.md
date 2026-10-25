# TASK-S03: Dedicated Pages, Friendly Copy, Defhanpy Footer, and Legal Modals

## 📌 Context & Objectives
Owner directive:
1. **Pemisahan Halaman Navigasi Penuh (Dedicated Pages)**:
   - Tidak ada lagi navigasi yang mengandalkan anchor `#` pada halaman utama untuk menu navigasi navbar.
   - Buat halaman terpisah yang kaya konten, rapi, dan saling terhubung:
     * `index.html` (Beranda)
     * `tentang.html` (Tentang Kami)
     * `cara-kerja.html` (Cara Kerja — alur 5 langkah serah terima mandiri, diagram interaktif, panduan donatur & mitra)
     * `fitur.html` (Fitur — Smart Food Matching, Food Safety Gate, Surplus Insights, Impact Dashboard, QR/PIN Handover)
     * `dampak.html` (Dampak — metrik penyelamatan pangan jujur, metodologi kalkulasi emisi FLW Bappenas/UNEP, radar sebaran sekeliling)
     * `faq.html` (Tanya Jawab — FAQ accordion interaktif lengkap, panduan teknis, tips higienitas)
     * `login.html` (Portal Masuk Mitra & Donatur)
     * `daftar.html` (Pendaftaran Mitra Baru dengan interactive role toggle: Donatur vs Penyalur)
2. **Gaya Bahasa Santai & Akrab (Conversational & Warm Tone)**:
   - Terapkan bahasa Indonesia yang hangat, akrab, ramah, dan membumi (hindari bahasa birokratis yang kaku).
   - Contoh: "Yuk kenalan dengan cara kerjanya", "Ada surplus apa hari ini?", "Bareng kita cegah makanan terbuang".
   - Tetap tegas dan jelas pada bagian yang menyangkut keamanan pangan, higienitas, dan verifikasi serah terima.
3. **Footer Defhanpy Agency**:
   - Cantumkan atribusi resmi:
     * "Inisiatif digital oleh **Defhanpy Agency** (Web & Digital Solutions) bersama Tim Mandala untuk FunDev International Competition 2026."
     * Tautan: `https://agency.defhanpy.dev`
     * Email kontak resmi: `defhanpy@gmail.com`
     * Lokasi/Basis: Jember, Jawa Timur, Indonesia.
4. **Modal ToS (Ketentuan Layanan) & Privacy Policy (Kebijakan Privasi)**:
   - Buat komponen modal pop-up interaktif (atau script modal bersama) yang terbuka mulus saat pengguna mengklik tautan "Ketentuan Layanan" dan "Kebijakan Privasi" di footer seluruh halaman (tanpa perlu reload halaman).
   - Isi **Ketentuan Layanan (Terms of Service)**:
     * Batasan tanggung jawab: Platform sebagai perantara informasi surplus pangan layak santap.
     * Kewajiban donatur: Menjamin makanan disimpan higienis & mencantumkan batas waktu jujur.
     * Kewajiban mitra: Menjemput tepat waktu (*self-pickup*), tidak memperjualbelikan makanan donasi, menyalurkan secara bermartabat.
     * Sanksi penangguhan (*suspend*) jika terbukti *no-show* berturut-turut atau melanggar keamanan pangan.
   - Isi **Kebijakan Privasi (Privacy Policy)**:
     * Prinsip minimisasi data (tidak mengumpulkan data identitas berlebihan/KTP disimpan aman).
     * Data yang dicatat: Nama PIC, nama lembaga/usaha, nomor kontak, titik koordinat perkiraan radius (tanpa membocorkan alamat privat sebelum klaim disetujui).
     * Tidak menjual data pengguna ke pihak ketiga mana pun.
   - Modal memiliki tombol tutup (X), tombol "Saya Mengerti / Tutup", backdrop klik untuk menutup, dan dukungan tombol `Escape`.

---

## 🎨 Visual & Technical Standards
- Design tokens sesuai `DESIGN.md` (v1.2):
  * `forest`: `#14532D`
  * `primary`: `#27864B`
  * `secondary`: `#4C9A61`
  * `light-green`: `#E8F5E9`
  * `soft-mint`: `#F5FAF5`
  * `white`: `#FFFFFF`
  * `main-text`: `#173C2F`
  * `secondary-text`: `#52665B`
  * `border-color`: `#DCE9DE`
- Tipografi: Plus Jakarta Sans via Google Fonts.
- Logo resmi: `logo.svg` (Sprout in Bowl) dengan link ke `index.html`.
- Foto nyata: `images/hero_penyerahan_donatur.webp`, `images/surplus_box_pangan_segar.webp`, `images/relawan_penyiapan_paket.webp`, `images/distribusi_penerima_manfaat.webp`.
- Zero em-dash (`—` kecuali pada placeholder metrik kosong).
- Navigasi aktif di-highlight dengan latar/warna sesuai halaman saat ini.

---

## 🛠️ Definition of Done
1. Semua 8 halaman HTML ada dan berfungsi: `index.html`, `tentang.html`, `cara-kerja.html`, `fitur.html`, `dampak.html`, `faq.html`, `login.html`, `daftar.html`.
2. Header navbar konsisten dan mengarah ke berkas `.html` masing-masing (bukan anchor `#`).
3. Footer menampilkan identitas resmi Defhanpy Agency dan tombol pembuka modal Ketentuan Layanan & Kebijakan Privasi.
4. Modal ToS dan Privacy Policy berfungsi interaktif via Vanilla JS di semua halaman.
5. Bahasa antarmuka santai, akrab, dan bersahabat.
6. Buat `REPORT-S03.md`.
7. Git commit dengan pesan: `feat(multipage): dedicated pages, friendly copy, defhanpy agency footer, and legal modals`.
