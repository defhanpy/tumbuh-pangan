# TASK-S06: Upgrade All Dashboards to Modern Responsive Sidebar Layout

## 📌 Context & Objective
- **User Feedback**: "ini emang di dashboard gaada sidebarnya?"
- **Problem**: Current portals (`app-donatur.html`, `app-mitra.html`, `app-admin.html`) used a top horizontal navbar and inline horizontal tabs instead of a true SaaS dashboard sidebar layout specified in `DESIGN-Tumbuh-Pangan-v1.2.md` Section 4.
- **Goal**: Implement a clean, modern, responsive **Left Sidebar (`w-64`)** layout on desktop with mobile off-canvas drawer across all 3 application portals, complete with a clean top header bar, user badge, active nav states, and smooth tab switching.

---

## 🏛️ Standard Dashboard Architecture (All 3 Portals)

### 1. Left Sidebar (`w-64 fixed inset-y-0 left-0 bg-white border-r border-border-color z-30 flex flex-col justify-between`)
- **Top Brand Section**:
  * Logo SVG (`logo.svg` Sprout in Bowl) + "Tumbuh Pangan" link to `index.html`.
  * Role Badge (e.g., "Portal Donatur", "Portal Mitra Penyalur", "Portal Super Admin").
- **User Mini-Card**:
  * Organization Name & PIC.
  * Location / Verified Pill badge with Lucide check SVG.
- **Sidebar Nav Links** (Clicking switches active view smoothly & auto-closes mobile drawer):
  * **Donatur (`app-donatur.html`)**:
    1. Buat Listing Surplus (`#create`)
    2. Kelola Listing & Klaim Masuk (`#manage`) + badge counter
    3. Terminal Serah Terima QR/PIN (`#handover`)
  * **Mitra Penyalur (`app-mitra.html`)**:
    1. Katalog Surplus Terdekat (`#catalog`) + badge counter
    2. Penjemputan Saya (QR/PIN) (`#handover`)
    3. Riwayat Selesai (`#history`)
  * **Super Admin (`app-admin.html`)**:
    1. Ringkasan Dampak / Overview (`#overview`)
    2. Antrean Verifikasi KYC (`#kyc`) + badge counter
    3. Audit Log Transaksi (`#audit`)
    4. Direktori Pengguna (`#users`)
  * Active state styling: `bg-light-green text-forest font-bold border-l-4 border-primary`.
- **Bottom Sidebar Section**:
  * Tautan "Beranda Publik" (`index.html`) with external arrow SVG.
  * Tautan "Keluar / Ganti Akun" (`login.html`) with logout door SVG.

### 2. Top Header Bar (`sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-border-color h-16 lg:h-18 px-4 sm:px-6 lg:px-8 flex items-center justify-between`)
- **Left**:
  * Mobile Hamburger Menu button (`lg:hidden`) to open sidebar drawer.
  * Active section title & breadcrumb (e.g., "Portal Donatur / Buat Listing Surplus").
- **Right**:
  * Live pulse status indicator ("Sistem Aktif - Mode Demo").
  * User avatar pill.

### 3. Mobile Off-Canvas Drawer (<1024px)
- Fixed backdrop overlay (`bg-forest/50 backdrop-blur-sm fixed inset-0 z-40 transition-opacity hidden`).
- Off-canvas sidebar sliding in from left with close button (X).
- Keyboard accessible (closes on `Escape`).

### 4. Main Content Area (`lg:pl-64 flex-1 flex flex-col min-h-screen bg-[#F8FAF8]`)
- Ample padding (`px-4 sm:px-6 lg:px-8 py-8`).
- Clean card hierarchy, responsive grids.
- Floating Demo Switcher bar stays fixed at the bottom (`z-50`).

---

## 🎨 Quality & Icon Constraints
1. **ZERO emojis** anywhere. Use canonical Lucide inline SVGs (`viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`).
2. Mobile responsive (checked at 375px, 768px, 1280px).
3. Seamless integration with `js/store.js` and existing reactive methods.
4. Update `REPORT-S06.md`.
5. Git commit: `feat(layout): implement modern responsive sidebar dashboard layout across all portals`.
