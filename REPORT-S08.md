# LAPORAN IMPLEMENTASI TASK-S08: TOM SELECT DROPDOWN UPGRADE

**Event**: FunDev International Competition 2026 (Universitas Sumatera Utara)  
**Proyek**: Tumbuh Pangan Dashboard & Landing Prototype  
**Status**: SELESAI (100% Menggunakan Tom Select CDN, Styling Selaras Brand Tumbuh Pangan, Zero Dependency jQuery)

---

## 📌 Ringkasan Eksekutif

Menindaklanjuti arahan:
> *"uda pake tom select?"*

Seluruh komponen drop-down native `<select>` di aplikasi telah diupgrade menggunakan **Tom Select (v2.4.1)**. Tom Select dipilih karena merupakan standar modern yang ringan, bebas dari dependensi jQuery, sepenuhnya mendukung keyboard navigation/aksesibilitas, dan mudah diselaraskan dengan Tailwind CSS.

### Berkas yang Diperbarui:
1. **`app-donatur.html`**:
   - `#listing-category` (Kategori Makanan Surplus)
   - `#listing-expiry-select` (Batas Waktu Penjemputan)
   - `#listing-storage` (Kondisi Penyimpanan Makanan)
2. **`app-mitra.html`**:
   - `#claim-eta-select` (Estimasi Waktu Tiba Menit)
   - `#rating-hygiene` (Ulasan Higienitas)
   - `#rating-punctuality` (Ulasan Ketepatan Waktu)
3. **`fitur.html`**:
   - `#sim-category` (Kategori Simulator Pencocokan)
   - `#sim-portion` (Porsi Simulator Pencocokan)

---

## 🎨 Custom Design Tokens

- **Border & Radius**: Border halus `#DCE9DE`, border radius `0.75rem` (`rounded-xl`).
- **Focus Ring**: Border aktif `#27864B` dengan glow halus `rgba(39, 134, 75, 0.15)`.
- **Dropdown List**: Background `#FFFFFF`, bayangan kartu `shadow-card`, hover/active item berlatar `#E8F5E9` dengan teks tebal hijau `#14532D`.
- **Anti Box-in-a-Box**: Struktur style wrapper dinetralisir agar tidak terjadi double-border.
