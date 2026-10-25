# DESIGN.md --- Tumbuh Pangan Landing Page

## 1. Project Overview

**Product name:** Tumbuh Pangan\
**Tagline:** Bersama Menumbuhkan Manfaat Pangan.\
**Hero headline:** Surplus Pangan, Tumbuh Jadi Kebaikan.

Tumbuh Pangan adalah platform digital yang menghubungkan bisnis pangan
yang memiliki surplus makanan layak konsumsi dengan organisasi sosial
dan komunitas yang dapat menyalurkannya kepada masyarakat yang
membutuhkan. Landing page harus menjelaskan manfaat platform, membangun
kepercayaan, dan mengarahkan pengunjung untuk bergabung sebagai
**Donatur Pangan** atau **Mitra Penyalur**.

## 2. Goals

1.  Menjelaskan masalah surplus pangan dan peluang menyalurkannya
    kembali.
2.  Menunjukkan bagaimana platform menghubungkan donatur dan mitra
    penyalur.
3.  Menjelaskan alur penggunaan secara sederhana.
4.  Menampilkan fitur utama dan gambaran dampak secara transparan.
5.  Mendorong pengunjung memilih CTA: **Mulai Berbagi Pangan** atau
    **Jadi Mitra Penyalur**.

## 3. Target Audiences

-   **Donatur pangan:** restoran, toko roti, katering, hotel, toko bahan
    pangan, UMKM kuliner, dan bisnis lain yang memiliki surplus layak
    konsumsi.
-   **Mitra penyalur:** organisasi sosial, komunitas, yayasan, dapur
    umum, dan kelompok masyarakat yang mampu menyalurkan pangan kepada
    penerima manfaat.
-   **Pendukung dan publik:** relawan, calon mitra, komunitas, dan
    masyarakat yang ingin memahami dampak pengurangan pemborosan pangan.

## 4. Brand Identity

### Personality

Hangat, peduli, membumi, terpercaya, bertanggung jawab, modern, praktis,
optimistis, dan berorientasi pada kolaborasi.

### Brand Message

Surplus pangan bukan akhir dari perjalanan makanan. Dengan proses yang
tepat, pangan yang masih layak konsumsi dapat menjadi manfaat bagi orang
lain.

### Logo Direction

Buat logo sederhana yang menggabungkan **tunas tanaman** dan **mangkuk
atau piring**, dengan bentuk melingkar yang menyiratkan siklus pangan
berkelanjutan. Logo harus tetap terbaca pada ukuran kecil dan dapat
digunakan dalam versi penuh warna, satu warna, serta ikon saja. Hindari
ilustrasi yang terlalu rumit.

## 5. Visual Design System

### Color Palette

  Token             Hex         Penggunaan
  ----------------- ----------- ------------------------------------------
  Forest Green      `#14532D`   Heading kuat, footer, elemen brand utama
  Primary Green     `#27864B`   Tombol utama, tautan aktif, ikon penting
  Secondary Green   `#4C9A61`   Aksen, ilustrasi, elemen pendukung
  Light Green       `#E8F5E9`   Latar kartu dan highlight
  Soft Mint         `#F5FAF5`   Latar section lembut
  White             `#FFFFFF`   Latar utama dan kartu
  Main Text         `#173C2F`   Teks utama
  Secondary Text    `#52665B`   Deskripsi dan teks sekunder
  Border            `#DCE9DE`   Border kartu, input, dan pemisah
  Warm Yellow       `#F4D77B`   Aksen kecil untuk highlight

Pastikan kontras teks dan tombol memadai. Jangan memakai hijau pada
semua elemen sekaligus; pertahankan ruang putih dan hierarki visual yang
jelas.

### Typography

-   Pilihan utama: **Plus Jakarta Sans**.
-   Alternatif: **Inter**.
-   Heading tegas dan bersahabat, dengan line-height nyaman.
-   Body copy ringkas dan mudah dipindai.
-   Hindari terlalu banyak ukuran font dan huruf kapital penuh.

### Layout and Components

-   Gaya modern, minimal, organik, dan ramah.
-   Gunakan ruang putih yang cukup, sudut kartu membulat, border halus,
    dan bayangan ringan.
-   Gunakan grid dan spacing yang konsisten.
-   Tombol memiliki hover, focus, active, dan disabled state yang jelas.
-   Gunakan ikon garis konsisten, misalnya gaya Lucide.
-   Animasi halus dan tidak mengganggu; hormati
    `prefers-reduced-motion`.
-   Hindari tampilan korporat yang kaku, dekorasi berlebihan, gradien
    mencolok, dan foto stok generik.

## 6. Landing Page Structure

Bangun landing page satu halaman yang responsif dengan section berikut
secara berurutan.

### A. Navigation Bar

**Kiri:** Logo dan wordmark Tumbuh Pangan.\
**Navigasi:** Cara Kerja, Fitur, Dampak, FAQ.\
**CTA:** `Gabung Sekarang`.

Navbar bersih dengan latar putih atau sedikit transparan. Gunakan
navigasi horizontal di desktop dan menu hamburger aksesibel di mobile.
Logo mengarah ke bagian atas halaman.

### B. Hero Section

**Headline:**\
"Surplus Pangan, Tumbuh Jadi Kebaikan."

**Subheadline:**\
"Tumbuh Pangan menghubungkan bisnis yang memiliki surplus makanan layak
konsumsi dengan organisasi sosial dan komunitas, agar pangan dapat
disalurkan dengan lebih mudah, aman, dan tepat sasaran."

**Primary CTA:** `Mulai Berbagi Pangan`\
**Secondary CTA:** `Saya Mitra Penyalur`

**Microcopy:**\
"Kolaborasi sederhana untuk manfaat yang lebih luas."

**Visual direction:** - Dua kolom di desktop: teks di kiri, visual di
kanan. - Gunakan foto realistis dan hangat: pemilik usaha kuliner
menyerahkan paket makanan dengan rapi kepada perwakilan komunitas
sosial. Tampilkan interaksi bermartabat, alami, dan positif. - Hindari
gambaran penerima manfaat yang merendahkan atau terlalu dramatis. -
Tambahkan kartu UI mengambang sebagai ilustrasi listing surplus: -
`Roti & Kue` - `30 paket` - `Pengambilan 18.00–19.00` -
`Lokasi sekitar` - Badge `Menunggu mitra` - Kartu tersebut adalah
ilustrasi produk, bukan data transaksi nyata. - Pada mobile, susun teks,
CTA, lalu visual.

### C. Trust / Value Strip

Tampilkan tiga nilai singkat dengan ikon: - **Lebih Terorganisasi** ---
informasi surplus dan proses penyaluran tercatat. - **Lebih Tepat
Sasaran** --- donatur dan mitra dipertemukan berdasarkan kebutuhan dan
kecocokan. - **Dampak Lebih Terukur** --- distribusi yang telah
dikonfirmasi dapat dirangkum menjadi data dampak.

Jangan menampilkan logo mitra, jumlah pengguna, atau klaim validasi yang
belum benar-benar dimiliki.

### D. Why Tumbuh Pangan

**Judul:** "Pangan Berlebih Masih Bisa Membawa Manfaat."

Jelaskan bahwa surplus dapat muncul karena produksi, stok, atau
permintaan yang berubah. Platform membantu mempertemukan surplus yang
masih layak konsumsi dengan mitra yang sesuai, alih-alih membiarkannya
terbuang.

Tampilkan tiga kartu: 1. **Surplus Lebih Terlihat** --- informasi jenis,
jumlah, kondisi, dan waktu pengambilan tersedia dengan jelas. 2.
**Penyaluran Lebih Terarah** --- rekomendasi membantu menemukan mitra
berdasarkan kebutuhan, kapasitas, waktu, dan lokasi. 3. **Proses Lebih
Terpantau** --- status permintaan dan konfirmasi penyaluran membantu
menjaga kejelasan proses.

Gunakan bahasa empatik dan tidak menyalahkan bisnis atau individu.

### E. About / Mission

**Judul:** "Menghubungkan Kelebihan dengan Kebutuhan."

**Body copy:**\
"Tumbuh Pangan hadir untuk membantu membangun ekosistem penyaluran
surplus pangan yang lebih kolaboratif. Kami percaya bahwa langkah
kecil---mencatat surplus, menemukan mitra yang sesuai, dan memastikan
penyaluran---dapat menjadi bagian dari perubahan yang lebih besar."

Tampilkan tiga prinsip: - Kolaborasi lintas komunitas. - Keamanan pangan
sebagai prioritas. - Transparansi proses dan dampak.

### F. Key Features

**Judul:** "Dirancang untuk Mempermudah Penyaluran."

Buat empat kartu fitur dengan ikon, deskripsi pendek, dan visual UI
sederhana.

1.  **Smart Food Matching** --- "Membantu merekomendasikan mitra
    berdasarkan lokasi, jumlah pangan, waktu pengambilan, dan
    kebutuhan."
2.  **Food Safety Gate** --- "Mendukung pencatatan kondisi, batas waktu
    konsumsi, penyimpanan, dan informasi penting sebelum penawaran
    dipublikasikan."
3.  **Surplus Insights** --- "Membantu donatur melihat pola surplus dari
    data yang tercatat, sehingga perencanaan dapat terus diperbaiki."
4.  **Impact Dashboard** --- "Merangkum penyaluran yang telah
    dikonfirmasi, jumlah paket atau porsi, dan aktivitas kolaborasi."

Untuk MVP, matching dapat menggunakan aturan dan skor sederhana. Jangan
menjanjikan AI canggih, pelacakan langsung, atau integrasi otomatis jika
fitur tersebut belum tersedia.

### G. How It Works

**Judul:** "Lima Langkah, Satu Dampak Bersama."

Tampilkan alur visual bernomor: 1. **Donatur Mencatat Surplus** ---
donatur memasukkan jenis pangan, jumlah, kondisi, waktu pengambilan,
lokasi, dan informasi keamanan yang relevan. 2. **Sistem Membantu
Mencocokkan** --- platform merekomendasikan mitra berdasarkan kebutuhan,
kapasitas, waktu, dan jarak. 3. **Mitra Mengajukan Permintaan** ---
mitra memilih penawaran yang sesuai dan mengirimkan jumlah serta rencana
pengambilan. 4. **Jadwalkan dan Salurkan** --- donatur menyetujui
permintaan; kedua pihak menyepakati waktu dan proses serah terima. 5.
**Konfirmasi dan Catat Dampak** --- kedua pihak mengonfirmasi penyaluran
agar transaksi tercatat selesai.

Gunakan diagram atau stepper yang mudah dipahami. Pada mobile, ubah
menjadi alur vertikal.

### H. Impact Dashboard Preview

**Judul:** "Setiap Penyaluran Punya Arti."

Tampilkan preview dashboard dengan kartu statistik: - Pangan
tersalurkan. - Paket atau porsi tersalurkan. - Penyaluran
terkonfirmasi. - Mitra yang berkolaborasi.

**Jangan mengarang angka dampak**, jumlah penerima, kilogram pangan,
atau emisi yang dihindari. Jika belum ada data terverifikasi, gunakan
placeholder seperti `—`,
`Data akan tampil setelah penyaluran terkonfirmasi`, atau label
`Contoh tampilan`. Jangan tampilkan angka ilustratif seolah hasil nyata.

Catatan: "Data dampak dihitung dari penyaluran yang telah dikonfirmasi
sesuai metode pencatatan platform."

### I. Join / CTA Section

Gunakan latar hijau tua atau soft mint dengan kontras jelas.

**Judul:** "Mari Tumbuhkan Manfaat dari Setiap Pangan."\
**Deskripsi:** "Bergabunglah sebagai donatur atau mitra penyalur untuk
membantu membangun alur redistribusi pangan yang lebih terorganisasi."

**CTA 1:** `Saya Ingin Berbagi Pangan`\
**CTA 2:** `Saya Ingin Menjadi Mitra`

Jika pendaftaran belum tersedia, arahkan tombol ke form minat atau
section kontak. Jangan membuat tombol yang tampak aktif tetapi tidak
melakukan apa pun.

### J. FAQ

Buat accordion yang aksesibel melalui keyboard. Pertanyaan dan jawaban:

1.  **Apa itu Tumbuh Pangan?**\
    Tumbuh Pangan adalah platform yang membantu menghubungkan surplus
    pangan yang masih layak konsumsi dengan organisasi sosial dan
    komunitas penyalur.

2.  **Siapa yang bisa menjadi donatur?**\
    Bisnis pangan seperti restoran, toko roti, katering, hotel, toko
    bahan pangan, dan pelaku usaha lain yang memiliki surplus yang
    sesuai untuk disalurkan.

3.  **Siapa yang bisa menjadi mitra penyalur?**\
    Organisasi sosial, komunitas, yayasan, atau kelompok yang mampu
    mengatur penerimaan dan penyaluran pangan kepada penerima manfaat.

4.  **Apakah semua makanan bisa didaftarkan?**\
    Tidak. Pangan harus memenuhi kriteria kelayakan dan informasi
    keamanan yang berlaku. Pangan yang kondisinya meragukan atau tidak
    memenuhi ketentuan tidak boleh disalurkan.

5.  **Bagaimana proses penyalurannya?**\
    Donatur mencatat surplus, sistem membantu mencocokkan mitra, mitra
    mengajukan permintaan, donatur menyetujui, lalu kedua pihak
    mengonfirmasi serah terima.

6.  **Bagaimana dampak dihitung?**\
    Dampak ditampilkan berdasarkan data penyaluran yang sudah
    dikonfirmasi, bukan hanya dari penawaran yang dibuat.

Jangan mengklaim bahwa platform menjamin keamanan pangan secara mutlak.
Jelaskan bahwa platform membantu pencatatan dan penyaringan, sementara
semua pihak tetap harus mengikuti prosedur keamanan pangan.

### K. Footer

Sertakan: - Logo dan deskripsi singkat. - Tautan navigasi: Cara Kerja,
Fitur, Dampak, FAQ. - Tautan kontak atau kanal sosial hanya jika
tersedia. - `© Tumbuh Pangan. Bersama Menumbuhkan Manfaat Pangan.` -
Placeholder tautan kebijakan privasi dan syarat penggunaan jika belum
tersedia; tandai untuk dilengkapi sebelum peluncuran.

## 7. Interaction Requirements

-   Navigasi anchor scroll ke section terkait dengan smooth scrolling
    yang menghormati `prefers-reduced-motion`.
-   Tombol CTA menuju form pendaftaran, form minat, atau section kontak
    yang benar.
-   FAQ accordion dapat digunakan dengan mouse, sentuhan, dan keyboard;
    gunakan `aria-expanded` dan relasi kontrol yang sesuai.
-   Navbar mobile dapat dibuka dan ditutup serta memiliki label
    aksesibel.
-   Hover dan focus state jelas, tidak hanya mengandalkan perubahan
    warna.
-   Animasi ringan saja; informasi utama harus tetap tersedia tanpa
    animasi.
-   Jangan membuat form tampak berfungsi jika tidak ada proses
    pengiriman data. Jika backend belum tersedia, tampilkan state demo
    atau pesan yang jujur.

## 8. Responsive Requirements

### Desktop

-   Hero dua kolom.
-   Navigasi horizontal.
-   Kartu fitur dan value strip dalam grid.
-   Container dengan lebar maksimum yang nyaman dibaca.

### Tablet

-   Kurangi jarak dan ukuran visual tanpa menghilangkan hierarki.
-   Grid dapat berubah dari empat menjadi dua kolom.

### Mobile

-   Layout satu kolom.
-   CTA mudah ditekan dan tidak berdempetan.
-   Menu navigasi mobile yang jelas.
-   Hindari horizontal overflow.
-   Body text tetap mudah dibaca.
-   Gambar responsif dengan alt text yang relevan.

## 9. Accessibility and Content Rules

-   Gunakan struktur semantik: `header`, `nav`, `main`, `section`, dan
    `footer`.
-   Gambar informatif memiliki alt text; gambar dekoratif memakai alt
    kosong.
-   Jaga kontras warna.
-   Pastikan elemen interaktif dapat diakses melalui keyboard.
-   Jangan menggunakan warna sebagai satu-satunya penanda status.
-   Hindari statistik, testimoni, partner, atau klaim dampak yang tidak
    terverifikasi.
-   Hindari bahasa yang menghakimi bisnis karena memiliki surplus atau
    merendahkan penerima manfaat.
-   Semua copy yang terlihat oleh pengguna menggunakan **Bahasa
    Indonesia** yang jelas, ringkas, dan natural.

## 10. Technical / Handoff Requirements

Buat desain yang mudah diimplementasikan sebagai website responsif dan
dapat dipisahkan menjadi: - Struktur HTML semantik. - CSS dengan design
tokens untuk warna, tipografi, spacing, radius, dan shadow. - JavaScript
vanilla untuk interaksi sederhana bila diperlukan. - Aset gambar
terpisah dan teroptimasi. - Logo dan ikon SVG jika memungkinkan.

Ketentuan: - Komponen dan pola visual konsisten. - Hindari library besar
untuk fungsi sederhana. - Optimalkan gambar dan pertimbangkan lazy
loading untuk gambar di luar area awal. - Gunakan nama class dan
komponen yang jelas. - Pikirkan state kosong, loading, error, dan sukses
untuk elemen yang terhubung ke data. - Jangan membuat data demo terlihat
seperti data produksi. - Landing page perlu siap dikembangkan untuk MVP
dengan peran Donatur, Mitra Penyalur, dan Admin, tetapi tidak perlu
menampilkan dashboard internal secara penuh.

## 11. Expected Deliverables

1.  Landing page desktop yang lengkap.
2.  Adaptasi tablet dan mobile.
3.  Sistem visual konsisten berdasarkan design tokens.
4.  Komponen CTA, kartu fitur, stepper, preview dampak, dan FAQ.
5.  Aset logo dan ikon yang dapat digunakan kembali.
6.  Catatan interaksi, perilaku responsif, serta bagian yang membutuhkan
    backend atau data nyata.

## 12. Final Quality Checklist

-   [ ] Nama produk selalu **Tumbuh Pangan**.
-   [ ] Tagline "Bersama Menumbuhkan Manfaat Pangan." konsisten.
-   [ ] Hero menggunakan headline "Surplus Pangan, Tumbuh Jadi
    Kebaikan."
-   [ ] Peran donatur dan mitra penyalur jelas.
-   [ ] Alur lima langkah mudah dipahami.
-   [ ] Warna dan tipografi mengikuti design system.
-   [ ] Tidak ada angka dampak atau klaim kemitraan yang dibuat-buat.
-   [ ] Informasi keamanan pangan tidak memberi jaminan berlebihan.
-   [ ] CTA punya tujuan yang jelas.
-   [ ] Tampilan responsif di desktop, tablet, dan mobile.
-   [ ] Komponen interaktif aksesibel.
-   [ ] Desain tetap jelas tanpa fitur atau data yang belum tersedia.
