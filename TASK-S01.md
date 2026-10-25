# TASK-S01: Build Tumbuh Pangan Landing Page Strictly Following DESIGN.md

## 📌 Context & Objective
- **Product Name**: Tumbuh Pangan
- **Tagline**: Bersama Menumbuhkan Manfaat Pangan.
- **Reference**: `DESIGN.md` is the SINGLE SOURCE OF TRUTH.
- **Goal**: Build a warm, human, grounded, clean, anti-slop landing page (`index.html`). Zero fake metrics, zero fake testimonials, zero excessive AI gradients.
- **Workspace**: `/mnt/data/share/projects/fundev/03-dev/tumbuh-pangan-landing`

---

## 🎨 Visual Design Tokens & Palette (Strict)
Implement the exact tokens in Tailwind config:
- `forest`: `#14532D` (headings, footer, primary brand)
- `primary`: `#27864B` (primary buttons, active links)
- `secondary`: `#4C9A61` (accents, secondary elements)
- `light-green`: `#E8F5E9` (card backgrounds, highlights)
- `soft-mint`: `#F5FAF5` (soft section backgrounds)
- `white`: `#FFFFFF`
- `main-text`: `#173C2F` (body text)
- `secondary-text`: `#52665B` (descriptions, subtle text)
- `border-color`: `#DCE9DE` (borders, cards, dividers)
- `warm-yellow`: `#F4D77B` (warm subtle accent)
- Typography: Plus Jakarta Sans via Google Fonts.

---

## 📐 Sections Required (In Exact Order from DESIGN.md)

1. **A. Navigation Bar**:
   - Left: Official SVG logo (`logo.svg` Sprout in Bowl + Wordmark).
   - Navigation links: Cara Kerja (`#cara-kerja`), Fitur (`#fitur`), Dampak (`#dampak`), FAQ (`#faq`).
   - Right CTA: `Gabung Sekarang` (smooth scroll to `#gabung`).
   - Accessible mobile menu (hamburger toggle + drawer with aria attributes).

2. **B. Hero Section**:
   - Headline: "Surplus Pangan, Tumbuh Jadi Kebaikan."
   - Subheadline: "Tumbuh Pangan menghubungkan bisnis yang memiliki surplus makanan layak konsumsi dengan organisasi sosial dan komunitas, agar pangan dapat disalurkan dengan lebih mudah, aman, dan tepat sasaran."
   - Primary CTA: `Mulai Berbagi Pangan` -> opens partner modal / scrolls to `#gabung` with donor tab active.
   - Secondary CTA: `Saya Mitra Penyalur` -> scrolls to `#gabung` with receiver tab active.
   - Microcopy: "Kolaborasi sederhana untuk manfaat yang lebih luas."
   - Desktop 2-column layout: Text left; Right is a warm visual with floating illustration card:
     * Label: `Roti & Kue`
     * Detail: `30 paket`
     * Jadwal: `Pengambilan 18.00–19.00`
     * Lokasi: `Lokasi sekitar (radius 3 km)`
     * Badge: `Menunggu mitra` (with disclaimer: "Ilustrasi tampilan penawaran surplus").

3. **C. Trust / Value Strip**:
   - 3 clean values with icons:
     1. **Lebih Terorganisasi**: Informasi surplus dan proses penyaluran tercatat rapi.
     2. **Lebih Tepat Sasaran**: Donatur dan mitra dipertemukan berdasarkan kebutuhan dan kecocokan.
     3. **Dampak Lebih Terukur**: Distribusi yang telah dikonfirmasi dirangkum menjadi data dampak nyata.
   - STRICT CONSTRAINT: Do NOT show fake partner logos, fake user counts, or unverified claims.

4. **D. Why Tumbuh Pangan**:
   - Title: "Pangan Berlebih Masih Bisa Membawa Manfaat."
   - Intro text explaining surplus happens naturally in F&B, but can be redirected before being wasted.
   - 3 Cards:
     1. **Surplus Lebih Terlihat**: Informasi jenis, jumlah, kondisi, dan waktu pengambilan tersedia dengan jelas.
     2. **Penyaluran Lebih Terarah**: Rekomendasi membantu menemukan mitra berdasarkan kebutuhan, kapasitas, waktu, dan lokasi.
     3. **Proses Lebih Terpantau**: Status permintaan dan konfirmasi penyaluran membantu menjaga kejelasan proses.

5. **E. About / Mission**:
   - Title: "Menghubungkan Kelebihan dengan Kebutuhan."
   - Body copy from DESIGN.md: "Tumbuh Pangan hadir untuk membantu membangun ekosistem penyaluran surplus pangan yang lebih kolaboratif..."
   - 3 Principles: Kolaborasi lintas komunitas, Keamanan pangan sebagai prioritas, Transparansi proses dan dampak.

6. **F. Key Features**:
   - Title: "Dirancang untuk Mempermudah Penyaluran."
   - 4 Cards:
     1. **Smart Food Matching**: Membantu merekomendasikan mitra berdasarkan lokasi, jumlah pangan, waktu pengambilan, dan kebutuhan.
     2. **Food Safety Gate**: Mendukung pencatatan kondisi, batas waktu konsumsi, penyimpanan, dan informasi penting sebelum penawaran dipublikasikan.
     3. **Surplus Insights**: Membantu donatur melihat pola surplus dari data yang tercatat, sehingga perencanaan dapat terus diperbaiki.
     4. **Impact Dashboard**: Merangkum penyaluran yang telah dikonfirmasi, jumlah paket atau porsi, dan aktivitas kolaborasi.

7. **G. How It Works**:
   - Title: "Lima Langkah, Satu Dampak Bersama."
   - 5-step numbered stepper (horizontal on desktop, vertical on mobile):
     1. Donatur Mencatat Surplus
     2. Sistem Membantu Mencocokkan
     3. Mitra Mengajukan Permintaan
     4. Jadwalkan dan Salurkan
     5. Konfirmasi dan Catat Dampak

8. **H. Impact Dashboard Preview**:
   - Title: "Setiap Penyaluran Punya Arti."
   - Subtitle: "Data dampak dihitung dari penyaluran yang telah dikonfirmasi sesuai metode pencatatan platform."
   - 4 metric cards with honest placeholders / example labels:
     * Pangan tersalurkan: `—` (label: "Data tampil setelah penyaluran terkonfirmasi")
     * Paket/porsi tersalurkan: `—`
     * Penyaluran terkonfirmasi: `—`
     * Mitra berkolaborasi: `—`
     * (Tagged clearly with badge: `Contoh Tampilan Metrik`).

9. **I. Join / CTA Section**:
   - Title: "Mari Tumbuhkan Manfaat dari Setiap Pangan."
   - Description: "Bergabunglah sebagai donatur atau mitra penyalur untuk membantu membangun alur redistribusi pangan yang lebih terorganisasi."
   - Dual Tab / Options: "Saya Ingin Berbagi Pangan" (Donatur) & "Saya Ingin Menjadi Mitra" (Penyalur).
   - Clean interest form with real WhatsApp connector handler so it actually works.

10. **J. FAQ**:
    - Accessible accordion with 6 questions verbatim from DESIGN.md:
      1. Apa itu Tumbuh Pangan?
      2. Siapa yang bisa menjadi donatur?
      3. Siapa yang bisa menjadi mitra penyalur?
      4. Apakah semua makanan bisa didaftarkan?
      5. Bagaimana proses penyalurannya?
      6. Bagaimana dampak dihitung?
    - Accessible with keyboard (Enter / Space to toggle, `aria-expanded`).

11. **K. Footer**:
    - Logo + short description.
    - Navigation links.
    - Copyright: `© 2026 Tumbuh Pangan. Bersama Menumbuhkan Manfaat Pangan.`
    - Note on privacy policy & terms placeholder.

---

## 🚫 Negative Scope & Anti-Slop Rules
1. ZERO fake partner logos (no fake "KFC", "Garuda", etc.).
2. ZERO fake testimonials or made-up quotes.
3. ZERO fabricated metrics pretending to be real production data.
4. ZERO excessive animated radar sweeps or AI sci-fi graphics. Keep it warm, grounded, organic.
5. Use en-dash (`–`) or hyphen (`-`), NO em-dash (`—` unless used as empty metric dash).

---

## 🛠️ Definition of Done
1. `index.html` exists and is a complete, standalone, responsive page.
2. Contains all 11 sections (A through K) with exact copy from `DESIGN.md`.
3. Fully functional: mobile drawer toggle, FAQ accordion, join interest form with WhatsApp action.
4. Clean code, semantic HTML5, accessible ARIA attributes.
5. Create `REPORT-S01.md`.
6. Git commit in repo with message: `feat(landing): build clean organic Tumbuh Pangan landing page based on DESIGN.md`.
