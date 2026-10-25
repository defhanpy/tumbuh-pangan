# TASK-S08: Upgrade All Select Dropdowns with Select2 / Enhanced Custom UI

## 📌 Context & Objective
- **Directive**: User requested "perbaiki dulu deh, setiap dropdown menggunakan select 2".
- **Rule from delegated-swe**: Neutralize outer wrapper styles (`border: none; padding: 0; background: transparent`) to prevent nested double-border defects ("box-in-a-box"). Match brand color palette (`#14532D`, `#27864B`, `#E8F5E9`, `#DCE9DE`).
- **Target Files**:
  * `app-donatur.html`:
    1. `#listing-category` (Kategori Pangan Surplus)
    2. `#listing-storage` (Kondisi Simpan Makanan)
    3. `#listing-pickup-deadline` (Batas Waktu Penjemputan)
  * `app-mitra.html`:
    1. `#claim-eta-select` (Estimasi Menit Tiba)
    2. `#rating-hygiene` (Higienitas Wadah)
    3. `#rating-punctuality` (Kemudahan Jemput)
  * `fitur.html`:
    1. `#sim-category` (Kategori Pangan Simulator)
    2. `#sim-portion` (Porsi Pangan Simulator)

---

## 🛠️ Implementation Plan: Select2 Integration
1. Add CDN links:
   - jQuery 3.7.1: `https://code.jquery.com/jquery-3.7.1.min.js`
   - Select2 CSS: `https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css`
   - Select2 JS: `https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js`
2. Custom CSS rules for Select2 matching Tumbuh Pangan design tokens:
   - Height: 44px (touch friendly).
   - Border: `#DCE9DE`, border-radius: 12px (rounded-xl).
   - Focused state: border `#27864B`, box-shadow ring `rgba(39, 134, 75, 0.15)`.
   - Dropdown container: background `#FFFFFF`, border `#DCE9DE`, shadow-card.
   - Highlighted option: background `#E8F5E9`, text `#14532D`, font-bold.
   - Clean custom arrow icon (SVG Lucide chevron-down instead of generic triangle).
   - Anti "box-in-a-box" rule: Neutralize outer select container styles so there is no nested double border.
3. Initialize Select2 on all targeted elements on DOMContentLoaded / modal open.
4. Update `REPORT-S08.md`.
5. Git commit: `feat(ui): integrate custom-styled Select2 dropdowns matching brand design tokens`.
