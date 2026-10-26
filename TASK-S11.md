# TASK-S11: Simplify Topbar Across All Dashboards (Logo Left, Profile Menu Right)

## 📌 Context & Objective
- **Directive**: User requested "topbar terlalu ramai, cukup logo saja di pojok kiri atas, dan profil di pojok kanan atas ketika di klik muncul info untuk akun saya / keluar".
- **Design Rule**:
  1. **Top-Left**:
     - Mobile (<1024px): Hamburger button (to open sidebar drawer) + Tumbuh Pangan Logo (`logo.svg`) + Brand title.
     - Desktop (>=1024px): Tumbuh Pangan Logo (`logo.svg`) + Brand title link to `index.html`.
     - Remove clutter: Eliminate duplicate breadcrumbs, duplicate sub-titles, live clocks, and cluttered pills from topbar.
  2. **Top-Right**:
     - Single elegant Profile Avatar button (user initial/avatar + display name + subtle chevron).
     - Clicking the profile button toggles an accessible floating dropdown menu (`profile-dropdown`):
       * Header: Organization / Store name, Category badge, Verified tag.
       * Menu Items:
         - **Akun Saya**: Switches to `profile` tab in Donatur / Mitra, or `pengaturan` tab in Admin.
         - **Beranda Publik**: Link to `index.html`.
         - **Keluar / Ganti Akun**: Triggers role switcher or redirects to `login.html`.
       * Dismiss on click outside or `Escape`.
  3. **Consistency**: Apply identical clean pattern across:
     - `app-admin.html`
     - `app-donatur.html`
     - `app-mitra.html`
  4. Ensure JavaScript tab switching (`switchTab`) continues to update page title smoothly if referenced, without breaking elements.

---

## 📋 Definition of Done
1. Topbar on all 3 portals is minimal: Logo on top-left, Profile Avatar on top-right.
2. Clicking Profile Avatar opens clean dropdown modal/menu with "Akun Saya", "Beranda Publik", and "Keluar / Ganti Akun".
3. Zero JS errors, reactive store sync remains intact.
4. Create `REPORT-S11.md` and commit to git.
