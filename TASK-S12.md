# TASK-S12: Topbar Role Switcher, Sidebar Header Fix, and Sidebar Footer Cleanup

## 📌 Context & Objective
- **Directive**: User requested 4 specific UX and UI refinements across `app-admin.html`, `app-donatur.html`, and `app-mitra.html`:
  1. **Topbar Role Switcher Icon**: Add a "Ganti Peran" icon button on the topbar, placed directly to the LEFT of the user profile avatar button. Clicking it should toggle a clean dropdown/popover to switch between Donatur, Mitra, and Admin roles (or trigger the role change directly), consolidating demo role switching into the topbar cleanly.
  2. **Sidebar Header Fix**: In the top of the sidebar, the logo text is overlapping/cramped ("teks logonya nabrak"). Fix the spacing/alignment, and REMOVE the secondary label "Tumbuh Pangan Hub" (or "Donatur Hub", "Admin Hub", "Mitra Hub") so it's clean and spacious.
  3. **Sidebar Footer Cleanup**: At the bottom of the sidebar, REMOVE the "Beranda Utama" and "Keluar Sesi" / logout buttons.
  4. **Sidebar Footer Copyright**: Replace the removed bottom buttons with a clean, subtle footer:
     `© 2026 Defhanpy` (or `© 2026 Defhanpy Agency`) with small subtle styling.

---

## 🛠️ Detailed File Changes Required

### 1. Topbar (All 3 files: `app-admin.html`, `app-donatur.html`, `app-mitra.html`)
- In `<header>` right-side container (to the left of `#profile-menu-button`):
  - Add a dedicated "Ganti Peran" button:
    ```html
    <div class="relative">
      <button
        type="button"
        id="role-switch-button"
        onclick="toggleRoleDropdown()"
        class="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-forest bg-soft-mint hover:bg-light-green border border-border-color transition-all cursor-pointer">
        <!-- Lucide Users/Shuffle SVG icon -->
        <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span class="hidden sm:inline">Ganti Peran</span>
        <svg class="w-3.5 h-3.5 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>

      <!-- Floating Role Dropdown -->
      <div id="role-dropdown" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border-color p-2 z-50">
        <div class="text-[10px] font-bold uppercase tracking-wider text-secondary-text px-2.5 py-1.5">PILIH PERAN DEMO</div>
        <a href="app-donatur.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-main-text hover:bg-soft-mint hover:text-forest transition-colors ...">
          ... Donatur Pangan ...
        </a>
        <a href="app-mitra.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-main-text hover:bg-soft-mint hover:text-forest transition-colors ...">
          ... Mitra Penyalur ...
        </a>
        <a href="app-admin.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-main-text hover:bg-soft-mint hover:text-forest transition-colors ...">
          ... Pengawas Admin ...
        </a>
      </div>
    </div>
    ```
  - Close dropdown on outside click or `Escape`.

### 2. Sidebar Header (`app-admin.html`, `app-donatur.html`, `app-mitra.html`)
- Remove secondary text like `<span class="text-[10px] text-light-green/80 font-semibold mt-0.5">Admin Hub</span>` / `Donatur Hub` / `Mitra Hub`.
- Ensure clean spacing between logo and text:
  ```html
  <div class="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-3 focus:outline-none rounded-lg" aria-label="Beranda Tumbuh Pangan">
      <div class="bg-white rounded-xl p-1.5 shrink-0 shadow-xs">
        <img src="logo.svg" alt="Tumbuh Pangan Logo" class="h-7 w-auto">
      </div>
      <span class="font-extrabold text-white text-base tracking-tight leading-none">Tumbuh Pangan</span>
    </a>
    <button type="button" onclick="toggleMobileSidebar(false)" ...>
      ...
    </button>
  </div>
  ```

### 3. Sidebar Footer (`app-admin.html`, `app-donatur.html`, `app-mitra.html`)
- Remove the bottom navigation buttons ("Beranda Utama" and "Keluar Sesi").
- In their place at the bottom of the sidebar, add:
  ```html
  <div class="p-4 border-t border-white/10 text-center">
    <p class="text-[11px] font-medium text-white/50 tracking-wide">
      © 2026 Defhanpy
    </p>
  </div>
  ```

---

## 📋 Definition of Done
1. Topbar has "Ganti Peran" button directly to the left of user profile avatar, opening a clean 3-role dropdown.
2. Sidebar header has no overlapping text; secondary "Hub" labels are completely removed.
3. Sidebar footer has no "Beranda Utama" or "Keluar Sesi" buttons; replaced by `© 2026 Defhanpy`.
4. Consistent across `app-admin.html`, `app-donatur.html`, and `app-mitra.html`.
5. Create `REPORT-S12.md` and commit to git.
