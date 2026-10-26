# 🌱 Tumbuh Pangan — Collaborative Food Surplus Redistribution Platform

> **FunDev International Competition 2026**  
> Organized by D3 Informatics Engineering, Faculty of Vocational Studies, Universitas Sumatera Utara (USU)  
> **Theme**: *Digital Creative Technology for Sustainable Development Goals (SDGs)*  
> **SDG Focus**: **Goal 2: Zero Hunger** & **Goal 12.3: Halve Global Food Loss and Waste (FLW)**  
> **Institution**: **Institut Teknologi dan Sains Mandala (ITSM), Jember**  
> **Team Name**: **Apa Yaa Namanya**  
> **Team Members**: **Ilhan Awafi**, **Sarah Safira**  
> **Supervisor**: **Muhamat Abdul Rohim S.Kom., M.Si**  

---

## 📌 Executive Summary

Food Loss and Waste (FLW) is an acute structural paradox in Indonesia. According to official Bappenas data, Indonesia loses **23 to 48 million metric tons of food per year**, resulting in an economic burden of **IDR 213–551 trillion annually** and contributing significantly to greenhouse gas emissions (~7.29% of national GHG emissions). Ironically, millions of vulnerable citizens face chronic malnutrition and food insecurity.

Commercial F&B operators (bakeries, restaurants, caterers, hotels, and grocery stores) routinely generate high-quality, consumable surplus food at the end of business hours. However, direct informal donation often fails due to logistical friction, lack of real-time communication, liability risks regarding food safety, and the burden of ad-hoc distribution.

**Tumbuh Pangan** is a B2B2C digital redistribution platform engineered to close this gap. It connects verified commercial food donors with accredited grassroots social organizations (orphanages, soup kitchens, foster homes, and community volunteers) through an efficient, dignified, and safe digital chain-of-custody.

---

## 💡 Core Triad Innovation

### 1. Smart Food Matching Algorithm
An intelligent multi-factor matching engine that scores and prioritizes surplus distribution based on:
- **Golden Window & Shelf-Life Criticality (40%)**: Urgency of consumption before sensory degradation.
- **Portion & Nutritional Fit (25%)**: Alignment between donor quantity and the receiver's verified beneficiary count.
- **Geographical Proximity (20%)**: Travel radius minimizing transit degradation and carbon footprint.
- **Handling & Storage Capacity (15%)**: Receiver’s equipment compatibility (ambient, insulated bags, thermal containers, or refrigeration).

### 2. Digital Food Safety Gate
A rigorous food protection standard preventing improper food donation:
- Mandatory structured sensory declaration (visual, aroma, texture, packaging integrity, and allergens).
- Automated storage guidance (ambient, warmer, or cold chain 0°C–4°C).
- Transparent mutual liability framework (*Terms of Mutual Respect*) ensuring food safety compliance and protecting donor goodwill.

### 3. Atomic Handover & Real-Time Impact Accounting
- **Secure Token Verification**: Physical handovers are verified via single-use 4-digit PIN or dynamic QR tokens, eliminating fraudulent pickups.
- **Automated Impact Computation**: Confirmed deliveries instantly update transparent ecological and social metrics:
  $$\text{CO}_2\text{e Prevented (kg)} = \text{Rescued Food (kg)} \times 2.5$$
- **Two-Way Trust Metrics**: Donors and receivers submit hygiene, punctuality, and mutual respect ratings upon each completed rescue.

---

## 🏗️ Architecture & Technology Stack

The project is structured with a **clean, zero-dependency, static-first architecture** designed for instant cloud deployment, offline resilience, and fast judge evaluation:

- **Frontend & Design System**:
  - Semantic HTML5 & Modern CSS with Tailwind CSS CDN.
  - Bespoke Design Tokens: *Forest Green* (`#14532D`), *Primary Green* (`#27864B`), *Light Green* (`#E8F5E9`), *Soft Mint* (`#F5FAF5`), and *Warm Yellow* (`#F4D77B`).
  - Typography: **Plus Jakarta Sans** (clean, modern, humanistic).
  - Canonical Iconography: 100% **Lucide SVG** vector outlines (Zero generic emojis, zero AI-generated artifacts).
  - Advanced Form Controls: **Tom Select (v2.4.1)** for accessible, lightweight, zero-jQuery searchable dropdowns.
- **Multi-Role Responsive Dashboard**:
  - Full SaaS layout featuring a 64-width (`w-64`) desktop sidebar and mobile off-canvas drawer.
  - Dedicated portals:
    - `app-donatur.html`: Donor batch posting, safety declarations, claim queue management, and handover terminal.
    - `app-mitra.html`: Receiver surplus catalog, smart matching priority badges, claim requests, and PIN verification.
    - `app-admin.html`: Central supervision portal for partner KYC verification, real-time transaction audit trail, and aggregate impact analytics.
- **Client-Side Reactive State Engine (`js/store.js`)**:
  - Event-driven reactive local store synchronized across browser tabs (`localStorage` + `CustomEvent`).
  - Simulates the entire backend lifecycle (CRUD operations, matching calculations, KYC queue, and ledger auditing) without server latency.
- **Production Target Architecture**:
  - Go (Golang) Microservices + PostgreSQL (TimescaleDB for metrics) + Cloudflare Zero Trust Tunnel.

---

## 📁 Repository Structure

```
.
├── index.html              # Public Homepage (Hero, Triad Features, Story, How It Works)
├── tentang.html            # About Page (National FLW Context, Vision & Principles)
├── cara-kerja.html         # Detailed 5-Step Food Rescue Workflow
├── fitur.html              # Deep-Dive Tech Features & Interactive Simulator
├── dampak.html             # Environmental & Social Impact Transparency Dashboard
├── faq.html                # Operational, Food Safety & Legal Frequently Asked Questions
├── login.html              # Multi-Role Entry Gateway with 1-Click Demo Logins
├── daftar.html             # Partner Onboarding with Interactive Role Toggle (Donor vs Receiver)
├── app-donatur.html        # Donor Management Portal
├── app-mitra.html          # Community Receiver & Distribution Portal
├── app-admin.html          # National Control Center & KYC Supervision Portal
├── js/
│   └── store.js            # Standalone Reactive Store, Demo Seeder & Matching Logic
├── images/                 # Optimized Real Community Food Distribution Visuals (WebP)
├── vercel.json             # Vercel Production Deployment Configuration (Clean URLs & Caching)
└── README.md               # Project Documentation & Competition Submission Spec
```

---

## 🚀 Quick Start / How to Run Locally

Because the project is completely self-contained with zero required build steps or runtime dependencies, it can be served using any local HTTP web server.

### Option 1: Python HTTP Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/defhanpy/tumbuh-pangan.git
cd tumbuh-pangan

# Start local server on port 8088
python3 -m http.server 8088
```
Open your browser and navigate to: **`http://localhost:8088`**

### Option 2: Node.js / NPX
```bash
npx serve . -p 8088
```

### Option 3: Deploy to Vercel (Production Live)
```bash
vercel --prod
```
The included `vercel.json` automatically handles clean URLs (e.g., `/app-donatur` instead of `/app-donatur.html`), asset caching headers, and modern security headers.

---

## 🧪 Judge & Evaluator Demonstration Workflow (3-Minute Tour)

For the FunDev 2026 jury evaluation, the prototype includes pre-seeded demo accounts and a persistent role switcher. Follow this sequential scenario to test the complete end-to-end redistribution lifecycle:

1. **Step 1: Explore Public Platform (`index.html`)**
   - Review the problem statement, food safety framework, and live simulation calculator on `fitur.html`.
   - Click **"Masuk"** or **"Coba Demo / Masuk"** to open `login.html`.
2. **Step 2: Post Surplus as Food Donor (`app-donatur.html`)**
   - Click **"Masuk sebagai Donatur (Demo)"** (Account: `donatur@tumbuh.id`).
   - Fill out the surplus form: Enter portion count, category, storage requirements, and confirm the Food Safety checklist.
   - Click **"Bagikan Makanan Sekarang"**. The batch instantly appears in your active surplus feed.
3. **Step 3: Discover & Claim as Community Receiver (`app-mitra.html`)**
   - Use the Role Switcher (or drawer menu on mobile) to switch to **Mitra Penyalur** (`mitra@tumbuh.id`).
   - Notice the Smart Food Matching score (e.g., *95% Cocok* with urgency badges).
   - Click **"Ajukan Penjemputan"**, select portion request (e.g., 10 portions), and submit.
   - Open the **"Siap Kamu Ambil"** tab to view your temporary 4-digit security PIN.
4. **Step 4: Approve & Verify Atomic Handover (`app-donatur.html`)**
   - Switch back to the **Donatur** portal.
   - You will see the incoming claim request under *"Klaim Menunggu Responmu"*.
   - Click **"Setujui Penjemputan Ini"**.
   - In the Handover Terminal, enter the receiver's 4-digit PIN and click **"Konfirmasi Serah Terima"**.
   - Notice the success notification: portions and kg are atomically transferred to the ecological ledger!
5. **Step 5: Audit & KYC Supervision (`app-admin.html`)**
   - Switch to **Admin** (`admin@tumbuh.id`).
   - Inspect the real-time audit ledger showing the exact timestamps, parties involved, and calculated CO2e emissions reduction.
   - Review pending organization registrations and test the **"Setujui & Aktifkan Akun"** verification button.

---

## 👥 Project Team & Credits

Developed by **Team Apa Yaa Namanya** for the **FunDev International Competition 2026**:

- **Ilhan Awafi** — Product Engineering & System Architecture
- **Sarah Safira** — Sustainability Research, Impact Modeling & UI/UX Design

**Academic Supervisor**:  
**Muhamat Abdul Rohim S.Kom., M.Si**

**Affiliation**:  
**Institut Teknologi dan Sains Mandala (ITSM)**  
Jember, East Java, Indonesia

**Industry Collaboration Partner**:  
**Defhanpy** (Web & Digital Solutions) — `https://defhanpy.dev`

---

## 📜 Intellectual Property & License

This project is released under the **MIT License**. All documentation, system specifications, and interactive assets are prepared specifically for the FunDev 2026 Vocational Faculty competition, Universitas Sumatera Utara.
