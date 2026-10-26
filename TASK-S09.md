# TASK-S09: Redesign Dashboard to Minimal Single-Task Focus Layout (Ref UI Benchmark)

## 📌 Context & Objective
- **Directive**: User wants to revamp the dashboards because the current ones are too crowded with information ("terlalu penuh informasi").
- **Reference Provided**: Clean 2-column layout (Dark Forest Green Sidebar #0F5A2E, soft warm canvas #F4F6F0, white cards with 20px–24px rounded corners).
  * Main focus card split 1:1:
    - Left Card: Centered Large QR Code with high breathing room, clean sub-instruction.
    - Right Card: High-emphasis display PIN ("4948" or dynamic PIN), countdown/expiry note, and clean 2-column logistics metrics (Jumlah paket / porsi & Berat total kg).
    - Bottom Action: Full-width / wide primary CTA pill button ("Konfirmasi Penyaluran" / "Serah Terima").
- **Scope**:
  1. `app-donatur.html`: Clean layout, dark green sidebar (`bg-[#104028]`), separate Overview/Listing from Handover Terminal. When viewing Serah Terima/Terminal, render the exact single-task focus 1:1 grid (QR Card on Left, Big PIN & Logistics Card on Right, Bottom CTA).
  2. `app-mitra.html`: Apply same design system. In "Penjemputan / Siap Kamu Ambil", render active approved pickup in this exact clean 1:1 layout: QR Code + Display PIN + Logistics summary + action button.
  3. `app-admin.html`: Align sidebar and card styling to clean dark-green sidebar and warm canvas `#F4F6F0`.
  4. **Strict Constraints**:
     - 100% Client-side only (`localStorage` via `js/store.js`). NO backend, NO external API calls.
     - 100% Vector Lucide SVGs (Zero emojis).
     - Keep Gojek-style friendly tone of voice ("Kamu", "Yuk", "Siap", "Beres").
     - Mobile responsive drawer & floating role switcher hidden on mobile (kept in drawer).
     - Keep Tom Select intact on all dropdowns.

---

## 🛠️ Definition of Done
1. Dashboard canvas uses soft warm neutral background (`#F4F6F0` / `#F8FAF7`).
2. Sidebar uses Dark Forest Green (`#104028` / `#0D3320`) with white text and vibrant light green pill active state (`bg-[#27864B]` or `bg-[#E8F5E9] text-[#14532D]`).
3. Single-Task Handover Card Layout implemented:
   - Left: QR Code card (SVG generated or clean centered QR visual) + microcopy.
   - Right: Display PIN (text-4xl or text-5xl font-extrabold font-mono) + expiry badge + 2-col metadata box (Jumlah Porsi/Paket & Berat Total kg).
   - Bottom CTA: Large pill action button ("Konfirmasi Penyaluran" / "Verifikasi Serah Terima").
4. All existing localStorage reactive flows (create surplus, claim, approve, verify PIN, update impact) still function 100% without breakage.
5. Create `REPORT-S09.md` documenting the visual transformation and run git commit.
