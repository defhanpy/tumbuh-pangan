# TASK-S14: Fix Dashboard Content Spacing (Eliminate Awkward Gaps, Left-Aligned SaaS Layout)

## 📌 Context & Problem
- **User Issue**: In `app-donatur.html`, `app-mitra.html`, and `app-admin.html`, there is a massive awkward empty space between the left sidebar and the main content on wide/desktop screens ("jarak dari sidebar ke konten halaman jauh sekali").
- **Root Cause**:
  * `<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">` (and in admin `max-w-7xl mx-auto`) uses `mx-auto` which forces the entire content block to center itself in the remaining viewport width, leaving a huge empty gutter directly to the right of the sidebar (`lg:pl-64`).
  * Sub-containers inside tabs (e.g. `max-w-3xl mx-auto` on the form, `max-w-4xl mx-auto` on the active cards) double down on this centering effect.

## 🛠️ Implementation Plan
1. **Full-Width Left-Aligned `<main>`**:
   - Change `<main>` in `app-donatur.html`, `app-mitra.html`, and `app-admin.html` to:
     `<main class="w-full px-6 lg:px-10 py-8 flex-grow">`
     (Remove `mx-auto`, remove restrictive `max-w-6xl` / `max-w-7xl`).
2. **Remove Awkward `mx-auto` on Tab Contents**:
   - In `app-donatur.html`:
     * Tab 2 (Catat Makanan): Remove `mx-auto` from form wrapper (`max-w-4xl` left-aligned).
     * Tab 3 (Sedang Tayang): Grid cards should flow smoothly across the full available container width (`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`).
     * Tab 4 (Permohonan Masuk): Remove `mx-auto`, full-width cards.
     * Tab 5 (Serah Terima / Terminal): Remove `mx-auto` from the 1:1 grid container (`max-w-5xl` left-aligned).
     * Tab 1 (Ringkasan): 4 KPI cards and banner stretch full width naturally.
   - In `app-mitra.html`:
     * Catalog feed: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6` left-aligned.
     * Active pickup 1:1 card: `max-w-5xl` left-aligned (no `mx-auto`).
     * Tab 1 (Ringkasan): Full width naturally.
   - In `app-admin.html`:
     * Chart and tables stretch full width naturally (`w-full px-6 lg:px-10`).
3. Ensure no horizontal scrollbar or broken layouts on mobile (375px–430px) and wide desktop (1280px–1920px).
4. Create `REPORT-S14.md` and commit to git.
