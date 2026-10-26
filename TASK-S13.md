# TASK-S13: Mobile Sidebar Polish and Content Bottom Footer Addition

## 📌 Context & Objective
- **Directive**: User provided screenshot of mobile sidebar and requested 3 specific fixes:
  1. **Hapus teks Tumbuh Pangan di sidebar atas yang teks putih itu**: In the sidebar header (`#app-sidebar`), remove the white text `<span class="font-extrabold text-white text-base tracking-tight leading-none">Tumbuh Pangan</span>`. Keep only the clean white container with `logo.svg` icon and the mobile close `X` button.
  2. **Hapus info portal toko pangan, langsung ke dashboard**: Remove the user profile/badge card inside the sidebar (the card containing `PORTAL TOKO PANGAN` / `PORTAL LEMBAGA SOSIAL` / `KOORDINATOR PUSAT`, store name, verified badge). The sidebar should immediately start with the navigation links ("Navigasi Utama" / "Modul Pengawasan" starting with Ringkasan/Dashboard), making the sidebar clean and uncluttered.
  3. **Footer harusnya ada di bagian bawah konten, bukan di sidebar doang**:
     - Remove the copyright text from the sidebar footer (`#app-sidebar` bottom).
     - Add a clean, official footer at the bottom of the main content area (after `</main>`, inside `div.lg:pl-64`):
       ```html
       <footer class="mt-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-border-color bg-white/60 text-center">
         <p class="text-xs text-secondary-text">
           &copy; 2026 <a href="https://agency.defhanpy.dev" target="_blank" rel="noopener noreferrer" class="font-bold text-forest hover:underline">Defhanpy Agency</a>. Platform Redistribusi Pangan Kolaboratif untuk FunDev 2026.
         </p>
       </footer>
       ```

---

## 🛠️ Scope of Files
Apply consistently across:
1. `app-donatur.html`
2. `app-mitra.html`
3. `app-admin.html`

---

## 📋 Definition of Done
1. Sidebar top header has only the logo icon (no white "Tumbuh Pangan" text next to it) + close button on mobile.
2. User mini-card/portal badge inside the sidebar is completely removed; sidebar immediately shows the menu starting with Dashboard/Ringkasan.
3. Sidebar bottom no longer has copyright text or empty padding.
4. Clean footer with `&copy; 2026 Defhanpy Agency` is added at the bottom of the main content container in all 3 files.
5. Create `REPORT-S13.md` and commit to git.
