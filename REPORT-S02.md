# REPORT-S02: Multi-Page Architecture for Tumbuh Pangan

## 1. Executive Summary
- **Objektif**: Transformasi platform dari single-page landing menjadi **Multi-Page Website** terpadu sesuai arahan owner:
  - `index.html` (Beranda utama)
  - `tentang.html` (Halaman narasi misi, latar belakang, dan nilai gotong royong)
  - `login.html` (Portal autentikasi mitra/pengguna)
  - `daftar.html` (Formulir registrasi kemitraan dengan interactive role toggle)
- **Email Kontak**: Semua formulir dan kanal komunikasi diarahkan ke email resmi: `defhanpy@gmail.com`.
- **Status Deliverables**: PASSED & VERIFIED.

---

## 2. Struktur Multi-Page

| Halaman | URL / Path | Fitur & Komponen Kunci |
|---|---|---|
| **Beranda** | `index.html` | Hero 2 kolom dengan foto serah terima donatur, value strip, why section, fitur utama, how it works, impact dashboard preview, FAQ, CTA ke `daftar.html` dan `login.html`. |
| **Tentang Kami** | `tentang.html` | Narasi mendalam Food Loss & Waste Indonesia, foto relawan penyiapan paket (`relawan_penyiapan_paket.webp`), 3 prinsip dasar, nilai martabat penerima, kontak email kolaborasi. |
| **Masuk** | `login.html` | Portal login berestetika Tumbuh Pangan (Plus Jakarta Sans, Forest Green), input Email & Password, link "Lupa Kata Sandi", link daftar mitra baru ke `daftar.html`, bantuan email `defhanpy@gmail.com`. Tombol "Gabung Sekarang" dan "Masuk" di seluruh navbar mengarah ke sini. |
| **Daftar Mitra** | `daftar.html` | Pendaftaran kemitraan dengan **Interactive Role Toggle**: Tab *Donatur Pangan (Pelaku Usaha)* vs Tab *Mitra Penyalur (Lembaga Sosial)*. Otomatis membaca parameter URL `?role=donatur` dan `?role=penyalur`. Formulir dinamis, checkbox integritas pangan, feedback sukses, dan tembusan ke `defhanpy@gmail.com`. |

---

## 3. Navigasi & Footer Sinkron
Semua halaman (Beranda, Tentang, Masuk, Daftar) memiliki:
- **Header Navbar**:
  - Logo SVG resmi (`logo.svg` Sprout in Bowl) + Wordmark Tumbuh Pangan
  - Menu link: Beranda, Tentang, Cara Kerja, Fitur, Dampak, FAQ
  - Aksi kanan: Tautan "Masuk" (`login.html`) + Tombol "Gabung Sekarang" (`login.html`)
  - Mobile menu drawer yang aksesibel dengan indikator halaman aktif
- **Footer Terpadu**:
  - Brand tagline: *Bersama Menumbuhkan Manfaat Pangan*
  - Tautan navigasi internal lengkap
  - Kanal kontak: `defhanpy@gmail.com`
  - Copyright: `© 2026 Tumbuh Pangan`
