# TASK-S02: Multi-Page Transformation for Tumbuh Pangan

## 📌 Context & Objectives
Owner directive:
1. Transform from single-page landing page to **Multi-Page Website**:
   - `index.html` (Beranda)
   - `tentang.html` (Tentang Kami)
   - `login.html` (Masuk / Login — tombol "Gabung Sekarang" dan "Masuk" mengarah ke sini)
   - `daftar.html` (Daftar Mitra — formulir pendaftaran dengan toggle interaktif: **Donatur Pangan** vs **Mitra Penyalur**)
2. Replace all previous WhatsApp form connectors with email contact: `defhanpy@gmail.com`.
3. Keep strict compliance with `DESIGN.md`:
   - Warm, grounded, human, organic aesthetic.
   - Design tokens: Forest Green `#14532D`, Primary `#27864B`, Secondary `#4C9A61`, Light Green `#E8F5E9`, Soft Mint `#F5FAF5`, Main Text `#173C2F`, Secondary Text `#52665B`, Border `#DCE9DE`, Warm Yellow `#F4D77B`.
   - Typography: Plus Jakarta Sans via Google Fonts.
   - Official SVG logo (`logo.svg`) and 4 cropped WebP images (`images/`).
   - Zero fake AI metrics, zero fake testimonials.

---

## 📄 Page Specifications

### 1. `index.html` (Beranda)
- Header navigation:
  * Brand: Logo SVG + "Tumbuh Pangan" + tagline "Bersama Menumbuhkan Manfaat Pangan"
  * Links: Beranda (`index.html`), Tentang (`tentang.html`), Cara Kerja (`#cara-kerja`), Fitur (`#fitur`), Dampak (`#dampak`), FAQ (`#faq`)
  * Right: Link "Masuk" (`login.html`) + Button "Gabung Sekarang" (`login.html`)
  * Mobile menu drawer with the same links.
- Hero Section: Headline *"Surplus Pangan, Tumbuh Jadi Kebaikan."*, photo `images/hero_penyerahan_donatur.webp`, floating card `Roti & Kue 30 paket`.
  * CTA 1: "Mulai Berbagi Pangan" -> `daftar.html?role=donatur`
  * CTA 2: "Saya Mitra Penyalur" -> `daftar.html?role=penyalur`
- Trust / Value Strip (3 values: Lebih Terorganisasi, Lebih Tepat Sasaran, Dampak Lebih Terukur).
- Why Tumbuh Pangan (with `images/surplus_box_pangan_segar.webp` + 3 cards).
- Key Features (4 cards: Smart Food Matching, Food Safety Gate, Surplus Insights, Impact Dashboard).
- How It Works (5 steps stepper + `images/distribusi_penerima_manfaat.webp`).
- Impact Dashboard Preview (honest placeholders `—`).
- CTA Section to Join: "Mari Tumbuhkan Manfaat dari Setiap Pangan" with buttons to `daftar.html` and email contact `defhanpy@gmail.com`.
- FAQ Accordion (6 questions).
- Footer: Logo, nav links, copyright, email `defhanpy@gmail.com`.

### 2. `tentang.html` (Tentang Kami)
- Shared header & footer (nav link "Tentang" active state).
- Hero: "Menghubungkan Kelebihan dengan Kebutuhan" & "Tentang Tumbuh Pangan".
- Main story & background: Menjawab isu Food Loss & Waste di Indonesia secara solutif dan kolaboratif.
- Visual feature: `images/relawan_penyiapan_paket.webp` (Relawan menyiapkan makanan di bawah spanduk "Bersama Menumbuhkan Manfaat Pangan").
- 3 Prinsip Dasar (Kolaborasi Lintas Komunitas, Keamanan Pangan Sebagai Prioritas, Transparansi Proses dan Dampak).
- Nilai Budaya: Gotong royong, menjaga martabat penerima manfaat, dan standar higienis terstandarisasi.
- Hubungi Tim / Kolaborasi: Email `defhanpy@gmail.com`.
- CTA Banner to `daftar.html`.

### 3. `login.html` (Masuk ke Portal Mitra)
- Shared header & footer.
- Clean, centered login card with Tumbuh Pangan aesthetic.
- Title: "Masuk ke Portal Tumbuh Pangan".
- Subtitle: "Kelola pencatatan surplus makanan atau permohonan penyaluran komunitas Anda."
- Form fields:
  * Email / ID Pengguna
  * Kata Sandi
  * Checkbox "Ingat saya" & link "Lupa kata sandi?"
  * Tombol "Masuk ke Portal"
- Demo disclaimer: "Versi MVP Preview — Akun demo siap pakai atau daftar mitra baru."
- Link to register: "Belum bermitra dengan Tumbuh Pangan? **Daftar Sebagai Mitra di Sini**" -> `daftar.html`.
- Help contact: `defhanpy@gmail.com`.

### 4. `daftar.html` (Pendaftaran Mitra Baru)
- Shared header & footer.
- Title: "Pendaftaran Kemitraan Tumbuh Pangan".
- Subtitle: "Bergabung bersama kami mewujudkan redistribusi pangan yang aman, teratur, dan bermartabat."
- **Interactive Role Toggle**:
  * Tab 1: **Donatur Pangan (Pelaku Usaha)** — Restoran, Toko Roti/Kue, Katering, Hotel, Supermarket, UMKM Kuliner.
  * Tab 2: **Mitra Penyalur (Lembaga Sosial)** — Panti Asuhan, Yayasan Sosial, Dapur Umum, Komunitas Relawan.
  * Supports URL parameter `?role=donatur` and `?role=penyalur` to pre-select tab on load.
- Dynamic Form Fields (adapts placeholder/label based on role):
  * Nama PIC Penanggung Jawab
  * Nama Usaha / Nama Lembaga
  * Email Resmi (notifikasi konfirmasi pendaftaran ditembuskan ke `defhanpy@gmail.com`)
  * Nomor Telepon / Kontak Resmi
  * Alamat & Wilayah Operasional (Kecamatan & Kota)
  * Estimasi Surplus Rata-rata (Donatur) ATAU Kapasitas Penyaluran/Jumlah Penerima Manfaat (Penyalur)
  * Jam Operasional / Jadwal Penjemputan Ideal
  * Checkbox Pernyataan Kepatuhan Keamanan Pangan & Etika Penyaluran
  * Submit Button: "Kirim Formulir Pendaftaran Mitra"
- Interactive Confirmation State:
  * When submitted, displays a polite success notification: "Terima kasih, formulir pendaftaran Anda telah diterima. Tim verifikasi Tumbuh Pangan akan menghubungi Anda melalui email dan telepon resmi. Untuk pertanyaan mendesak, hubungi defhanpy@gmail.com."

---

## 🛠️ Definition of Done
1. 4 HTML files exist: `index.html`, `tentang.html`, `login.html`, `daftar.html`.
2. All 4 pages share consistent navigation, brand tokens, and footer.
3. Tombol "Gabung Sekarang" dan "Masuk" di header mengarah ke `login.html`.
4. Halaman `daftar.html` memiliki toggle interaktif Donatur vs Penyalur dan dapat membaca query string `?role=donatur` / `?role=penyalur`.
5. Semua form kontak dan email mengarah ke `defhanpy@gmail.com` (tidak ada WhatsApp connector form lagi).
6. Gambar WebP tampil sempurna di halaman terkait.
7. Create `REPORT-S02.md`.
8. Git commit in repo: `feat(multipage): convert into multi-page website with beranda, tentang, login, and daftar mitra pages`.
