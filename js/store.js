/**
 * Tumbuh Pangan - Client-Side Reactive State Engine
 * FunDev International Competition 2026 (USU)
 * Manages complete food rescue cycle: Donatur -> Mitra -> Handover PIN/QR -> Admin Impact Metrics
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TPStore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY = 'tp_store_s04_v1';
  const EVENT_CHANNEL = 'tp_store_change';

  // --- Seed Data Definition ---
  const INITIAL_SEED = {
    users: [
      {
        id: 'donatur-1',
        name: 'Roti Nusantara Artisan',
        type: 'DONATUR',
        category: 'Bakery & Toko Roti',
        address: 'Jl. Hayam Wuruk No. 42, Kaliwates, Jember',
        phone: '0812-3456-7801',
        email: 'roti.nusantara@gmail.com',
        pic: 'Hendra Setiawan',
        status: 'VERIFIED',
        rating: 4.9,
        reviewCount: 38,
        totalPortions: 340,
        totalKg: 85,
        badge: 'Mitra Utama Emas',
        joinedAt: 'Januari 2026'
      },
      {
        id: 'donatur-2',
        name: 'Grand Heritage Hotel',
        type: 'DONATUR',
        category: 'Hotel & Restoran',
        address: 'Jl. Kalimantan No. 18, Sumbersari, Jember',
        phone: '0812-3456-7802',
        email: 'heritage.hotel@gmail.com',
        pic: 'Chef Diana Putri',
        status: 'VERIFIED',
        rating: 4.8,
        reviewCount: 52,
        totalPortions: 520,
        totalKg: 130,
        badge: 'Mitra Hotel Bintang',
        joinedAt: 'Februari 2026'
      },
      {
        id: 'donatur-3',
        name: 'Katering Barokah',
        type: 'DONATUR',
        category: 'Katering Acara',
        address: 'Jl. Slamet Riyadi No. 5, Patrang, Jember',
        phone: '0812-3456-7803',
        email: 'barokah.katering@gmail.com',
        pic: 'Hj. Mardiyah',
        status: 'VERIFIED',
        rating: 5.0,
        reviewCount: 24,
        totalPortions: 180,
        totalKg: 45,
        badge: 'Dapur Higienis Prima',
        joinedAt: 'Maret 2026'
      },
      {
        id: 'mitra-1',
        name: 'Panti Asuhan Al-Ikhlas',
        type: 'MITRA',
        category: 'Panti Asuhan Anak',
        address: 'Jl. Trunojoyo Gang 4, Kaliwates, Jember',
        phone: '0813-9876-5401',
        email: 'alikhlas.jember@gmail.com',
        pic: 'Ust. Ahmad Fauzi',
        capacity: 35,
        status: 'VERIFIED',
        rating: 4.95,
        reviewCount: 34,
        totalReceivedPortions: 290,
        badge: 'Penyalur Terakreditasi',
        joinedAt: 'Januari 2026'
      },
      {
        id: 'mitra-2',
        name: 'Dapur Relawan Berkah',
        type: 'MITRA',
        category: 'Komunitas Relawan Sosial',
        address: 'Jl. Riau No. 12, Sumbersari, Jember',
        phone: '0813-9876-5402',
        email: 'dapur.berkah@gmail.com',
        pic: 'Siti Rahma',
        capacity: 60,
        status: 'VERIFIED',
        rating: 4.9,
        reviewCount: 41,
        totalReceivedPortions: 410,
        badge: 'Distribusi Cepat & Tanggap',
        joinedAt: 'Januari 2026'
      },
      {
        id: 'mitra-3',
        name: 'Yayasan Kasih Lansia',
        type: 'MITRA',
        category: 'Lansia Duafa & Jompo',
        address: 'Jl. Letjen Panjaitan No. 88, Sumbersari, Jember',
        phone: '0813-9876-5403',
        email: 'kasih.lansia@gmail.com',
        pic: 'Bambang Soerjo',
        capacity: 25,
        status: 'VERIFIED',
        rating: 5.0,
        reviewCount: 19,
        totalReceivedPortions: 160,
        badge: 'Penyalur Khusus Gizi',
        joinedAt: 'Februari 2026'
      },
      {
        id: 'admin-1',
        name: 'Admin Pusat Tumbuh Pangan',
        type: 'ADMIN',
        email: 'admin@tumbuhpangan.id',
        role: 'Super Verifikator',
        phone: '0811-0099-8877',
        status: 'VERIFIED'
      }
    ],

    listings: [
      {
        id: 'listing-1',
        donaturId: 'donatur-1',
        donaturName: 'Roti Nusantara Artisan',
        donaturAddress: 'Kaliwates, Jember',
        title: 'Aneka Roti Manis & Croissant Mentega',
        category: 'Roti & Pastry',
        portions: 24,
        kg: 6,
        cookedAt: 'Hari ini 11:30 WIB',
        expiresAtMinutes: 180,
        expiresLabel: '2 jam 45 menit lagi',
        storageCondition: 'Suhu Ruang',
        pickupLocation: 'Outlet Kaliwates (Pintu Belakang)',
        notes: 'Sudah dipack rapi dalam 12 kantong food grade. Siap diambil sebelum maghrib.',
        status: 'OPEN',
        distanceKm: 1.2,
        badge: 'Segar Baru Matang',
        imageEmoji: '🥐',
        createdAt: Date.now() - (45 * 60 * 1000)
      },
      {
        id: 'listing-2',
        donaturId: 'donatur-2',
        donaturName: 'Grand Heritage Hotel',
        donaturAddress: 'Sumbersari, Jember',
        title: 'Nasi Box Lauk Ayam Ungkep & Tumis Sayur',
        category: 'Siap Santap',
        portions: 40,
        kg: 14,
        cookedAt: 'Hari ini 12:45 WIB',
        expiresAtMinutes: 120,
        expiresLabel: '1 jam 30 menit lagi',
        storageCondition: 'Warmer / Termal',
        pickupLocation: 'Kitchen Loading Dock Hotel Grand Heritage',
        notes: 'Wajib membawa insulated box atau cooler box bersih untuk menjaga suhu hangat.',
        status: 'OPEN',
        distanceKm: 3.5,
        badge: 'Porsi Besar (40 porsi)',
        imageEmoji: '🍱',
        createdAt: Date.now() - (30 * 60 * 1000)
      },
      {
        id: 'listing-3',
        donaturId: 'donatur-3',
        donaturName: 'Katering Barokah',
        donaturAddress: 'Patrang, Jember',
        title: 'Sayur Salad Segar & Buah Potong Higienis',
        category: 'Sayur & Buah',
        portions: 18,
        kg: 8,
        cookedAt: 'Hari ini 10:15 WIB',
        expiresAtMinutes: 240,
        expiresLabel: '3 jam 15 menit lagi',
        storageCondition: 'Chiller',
        pickupLocation: 'Dapur Katering Barokah Patrang',
        notes: 'Surplus persiapan acara prasmanan pagi, kondisi dingin 4°C terjaga higienis.',
        status: 'OPEN',
        distanceKm: 4.1,
        badge: 'Dingin & Higienis',
        imageEmoji: '🥗',
        createdAt: Date.now() - (60 * 60 * 1000)
      },
      {
        id: 'listing-4',
        donaturId: 'donatur-1',
        donaturName: 'Roti Nusantara Artisan',
        donaturAddress: 'Kaliwates, Jember',
        title: 'Pastry Puff Apel & Baguette Gandum',
        category: 'Roti & Pastry',
        portions: 15,
        kg: 4.5,
        cookedAt: 'Hari ini 09:30 WIB',
        expiresAtMinutes: 90,
        expiresLabel: '50 menit lagi',
        storageCondition: 'Suhu Ruang',
        pickupLocation: 'Outlet Kaliwates',
        notes: 'Tekstur renyah garing, sangat pas langsung dibagikan untuk cemilan sore anak panti.',
        status: 'OPEN',
        distanceKm: 1.2,
        badge: 'Batas Cepat 50 Mnt',
        imageEmoji: '🥖',
        createdAt: Date.now() - (90 * 60 * 1000)
      }
    ],

    claims: [
      {
        id: 'claim-seed-1',
        listingId: 'listing-4',
        listingTitle: 'Pastry Puff Apel & Baguette Gandum',
        donaturId: 'donatur-1',
        donaturName: 'Roti Nusantara Artisan',
        mitraId: 'mitra-1',
        mitraName: 'Panti Asuhan Al-Ikhlas',
        mitraPic: 'Ust. Ahmad Fauzi',
        mitraPhone: '0813-9876-5401',
        mitraCapacity: 35,
        requestedPortions: 15,
        kg: 4.5,
        vehicleNotes: 'Mobil operasional panti + box makanan bersih',
        etaMinutes: 25,
        status: 'PENDING',
        distanceKm: 1.2,
        notes: 'Akan kami jemput dengan relawan panti untuk makanan ringan adik-adik setelah ashar.',
        createdAt: Date.now() - (15 * 60 * 1000)
      }
    ],

    transactions: [
      {
        id: 'tx-seed-1',
        claimId: 'claim-pre-approved',
        listingId: 'listing-pre-1',
        listingTitle: 'Roti Gandum Premium Sehat 30 Porsi',
        category: 'Roti & Pastry',
        donaturId: 'donatur-1',
        donaturName: 'Roti Nusantara Artisan',
        donaturAddress: 'Jl. Hayam Wuruk No. 42, Kaliwates',
        mitraId: 'mitra-1',
        mitraName: 'Panti Asuhan Al-Ikhlas',
        mitraPic: 'Ust. Ahmad Fauzi',
        mitraPhone: '0813-9876-5401',
        portions: 30,
        kg: 7.5,
        pin: '7429',
        qrData: 'TP-TX-7429-ROTI-NUSANTARA-ALIKHLAS',
        status: 'SCHEDULED', // SCHEDULED, COMPLETED, NO_SHOW
        pickupDeadline: 'Hari ini 17:30 WIB',
        vehicleNotes: 'Motor roda tiga boks relawan + wadah higienis',
        createdAt: Date.now() - (25 * 60 * 1000),
        completedAt: null,
        rating: null
      },
      {
        id: 'tx-seed-hist-1',
        claimId: 'claim-hist-1',
        listingId: 'listing-hist-1',
        listingTitle: 'Sup Ayam Jagung & Nasi Tim 45 Porsi',
        category: 'Siap Santap',
        donaturId: 'donatur-2',
        donaturName: 'Grand Heritage Hotel',
        donaturAddress: 'Jl. Kalimantan No. 18, Sumbersari',
        mitraId: 'mitra-2',
        mitraName: 'Dapur Relawan Berkah',
        mitraPic: 'Siti Rahma',
        mitraPhone: '0813-9876-5402',
        portions: 45,
        kg: 18,
        pin: '3814',
        qrData: 'TP-TX-3814-HERITAGE-BERKAH',
        status: 'COMPLETED',
        pickupDeadline: 'Kemarin 16:00 WIB',
        vehicleNotes: 'Mobil pikap berkanopi',
        createdAt: Date.now() - (86400 * 1000 * 1.5),
        completedAt: Date.now() - (86400 * 1000 * 1.2),
        rating: {
          stars: 5,
          hygieneScore: 5,
          punctualityScore: 5,
          notes: 'Kualitas sup sangat prima, kemasan rapat, dan relawan langsung menyalurkan.',
          reviewer: 'Dapur Relawan Berkah',
          createdAt: Date.now() - (86400 * 1000 * 1.1)
        }
      },
      {
        id: 'tx-seed-hist-2',
        claimId: 'claim-hist-2',
        listingId: 'listing-hist-2',
        listingTitle: 'Paket Kue Basah Subuh & Roti Roll 25 Porsi',
        category: 'Roti & Pastry',
        donaturId: 'donatur-1',
        donaturName: 'Roti Nusantara Artisan',
        donaturAddress: 'Jl. Hayam Wuruk No. 42, Kaliwates',
        mitraId: 'mitra-3',
        mitraName: 'Yayasan Kasih Lansia',
        mitraPic: 'Bambang Soerjo',
        mitraPhone: '0813-9876-5403',
        portions: 25,
        kg: 6.25,
        pin: '5920',
        qrData: 'TP-TX-5920-ROTI-KASIH',
        status: 'COMPLETED',
        pickupDeadline: '2 hari lalu 10:30 WIB',
        vehicleNotes: 'Mobil operasional yayasan',
        createdAt: Date.now() - (86400 * 1000 * 2.5),
        completedAt: Date.now() - (86400 * 1000 * 2.3),
        rating: {
          stars: 5,
          hygieneScore: 5,
          punctualityScore: 5,
          notes: 'Roti roll sangat lembut, cocok sekali untuk sarapan sehat simbah-simbah lansia.',
          reviewer: 'Yayasan Kasih Lansia',
          createdAt: Date.now() - (86400 * 1000 * 2.2)
        }
      }
    ],

    pendingKYC: [
      {
        id: 'kyc-seed-1',
        orgName: 'Warung Bu Trisno Katering',
        type: 'DONATUR',
        category: 'Katering Rumahan',
        picName: 'Trisno Utomo',
        email: 'butrisno@gmail.com',
        phone: '0812-3499-1122',
        address: 'Jl. Mastrip Timur No. 14, Sumbersari, Jember',
        capacity: '15-25 porsi harian makanan siap santap',
        schedule: 'Setiap sore pukul 16:30 - 18:00 WIB',
        submittedAt: 'Hari ini 08:30 WIB',
        status: 'PENDING_VERIFICATION'
      },
      {
        id: 'kyc-seed-2',
        orgName: 'Komunitas Peduli Sesama Jember',
        type: 'MITRA',
        category: 'Komunitas Sosial Jalanan',
        picName: 'Indra Gunawan',
        email: 'pedulisesama.jbr@gmail.com',
        phone: '0856-7811-2233',
        address: 'Jl. Riau No. 4, Sumbersari, Jember',
        capacity: 'Mampu menyerap 40-50 porsi untuk disalurkan ke dhuafa jalanan',
        schedule: 'Malam hari pukul 19:30 - 21:00 WIB',
        submittedAt: 'Hari ini 09:15 WIB',
        status: 'PENDING_VERIFICATION'
      }
    ],

    impactMetrics: {
      totalKg: 345,
      totalPortions: 1380,
      successRate: 98.4,
      co2eSaved: 862.5, // 345 * 2.5
      completedTransactions: 42
    },

    currentUser: {
      role: 'donatur', // 'donatur' | 'mitra' | 'admin'
      id: 'donatur-1'
    }
  };

  // --- Storage Helper ---
  let memoryFallback = null;

  function getRawState() {
    try {
      if (typeof localStorage === 'undefined') {
        if (!memoryFallback) memoryFallback = JSON.parse(JSON.stringify(INITIAL_SEED));
        return JSON.parse(JSON.stringify(memoryFallback));
      }
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        setRawState(INITIAL_SEED);
        return JSON.parse(JSON.stringify(INITIAL_SEED));
      }
      return JSON.parse(data);
    } catch (e) {
      console.warn('TPStore: Storage load failed, fallback to seed', e);
      return JSON.parse(JSON.stringify(INITIAL_SEED));
    }
  }

  function setRawState(state) {
    try {
      if (typeof localStorage === 'undefined') {
        memoryFallback = state;
        notifySubscribers(state);
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      notifySubscribers(state);
    } catch (e) {
      console.error('TPStore: Failed to save state', e);
    }
  }

  // --- Reactive Subscribers ---
  const subscribers = new Set();

  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }

  function notifySubscribers(state) {
    subscribers.forEach(fn => {
      try {
        fn(state);
      } catch (err) {
        console.error('TPStore subscriber error', err);
      }
    });
    // Dispatch window custom event for decoupled UI listeners
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(EVENT_CHANNEL, { detail: state }));
    }
  }

  // Listen for multi-tab sync
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        const state = getRawState();
        notifySubscribers(state);
      }
    });
  }

  // Helper: generate 4-digit PIN
  function generate4DigitPin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  // Helper: QR Code SVG generator (deterministic, offline, responsive)
  function generateQrSvg(data, size = 180) {
    // Generate an authentic, scannable-look 21x21 QR code matrix via deterministic bit hash
    const matrixSize = 21;
    const grid = Array(matrixSize).fill(0).map(() => Array(matrixSize).fill(false));

    // Finder pattern stamp (7x7 with 3x3 core)
    function stampFinder(startX, startY) {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isOuter = (r === 0 || r === 6 || c === 0 || c === 6);
          const isInner = (r >= 2 && r <= 4 && c >= 2 && c <= 4);
          grid[startY + r][startX + c] = isOuter || isInner;
        }
      }
    }

    stampFinder(0, 0); // Top-left
    stampFinder(matrixSize - 7, 0); // Top-right
    stampFinder(0, matrixSize - 7); // Bottom-left

    // Timing patterns
    for (let i = 8; i < matrixSize - 8; i++) {
      grid[6][i] = (i % 2 === 0);
      grid[i][6] = (i % 2 === 0);
    }

    // Deterministic module fill based on string hash
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = ((hash << 5) - hash) + data.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash);

    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        // Skip finder areas and separators
        const inTL = r < 8 && c < 8;
        const inTR = r < 8 && c >= matrixSize - 8;
        const inBL = r >= matrixSize - 8 && c < 8;
        const inTiming = (r === 6 || c === 6);

        if (!inTL && !inTR && !inBL && !inTiming) {
          const bit = ((seed ^ (r * 31 + c * 17)) * 2654435761) & 0xffffffff;
          grid[r][c] = (bit % 3 === 0 || bit % 5 === 0);
        }
      }
    }

    // Convert to SVG paths
    const cellSize = (size - 16) / matrixSize;
    let rects = '';
    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        if (grid[r][c]) {
          const x = (8 + c * cellSize).toFixed(2);
          const y = (8 + r * cellSize).toFixed(2);
          const s = cellSize.toFixed(2);
          rects += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#14532D" />`;
        }
      }
    }

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" class="mx-auto bg-white p-2 rounded-2xl shadow-inner border border-border-color" aria-label="QR Code Transaksi: ${data}">
        <rect width="${size}" height="${size}" rx="12" fill="#FFFFFF"/>
        ${rects}
      </svg>
    `;
  }

  // --- Public API ---
  const TPStore = {
    // Current user & role
    getCurrentUser() {
      const state = getRawState();
      const role = state.currentUser ? state.currentUser.role : 'donatur';
      const id = state.currentUser ? state.currentUser.id : 'donatur-1';
      const user = state.users.find(u => u.id === id) || state.users[0];
      return { ...user, activeRole: role };
    },

    switchUserRole(role, userId = null) {
      const state = getRawState();
      let targetId = userId;
      if (!targetId) {
        if (role === 'donatur') targetId = 'donatur-1';
        else if (role === 'mitra') targetId = 'mitra-1';
        else if (role === 'admin') targetId = 'admin-1';
        else targetId = 'donatur-1';
      }
      state.currentUser = { role, id: targetId };
      setRawState(state);
      return this.getCurrentUser();
    },

    // Surplus Listings
    getSurplusListings(filter = {}) {
      const state = getRawState();
      let list = state.listings || [];
      if (filter.status) {
        list = list.filter(item => item.status === filter.status);
      }
      if (filter.category && filter.category !== 'Semua') {
        list = list.filter(item => item.category === filter.category);
      }
      if (filter.donaturId) {
        list = list.filter(item => item.donaturId === filter.donaturId);
      }
      if (filter.search) {
        const q = filter.search.toLowerCase();
        list = list.filter(item =>
          item.title.toLowerCase().includes(q) ||
          item.donaturName.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }
      // Sort newest first
      return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    },

    createSurplusListing(data) {
      const state = getRawState();
      const currentUser = this.getCurrentUser();

      const newListing = {
        id: 'listing-' + Date.now(),
        donaturId: currentUser.id || 'donatur-1',
        donaturName: currentUser.name || 'Roti Nusantara Artisan',
        donaturAddress: currentUser.address || 'Kaliwates, Jember',
        title: data.title || 'Surplus Pangan Segar',
        category: data.category || 'Roti & Pastry',
        portions: parseInt(data.portions, 10) || 10,
        kg: parseFloat(data.kg) || (parseInt(data.portions, 10) * 0.25) || 2.5,
        cookedAt: data.cookedAt || 'Baru Saja',
        expiresAtMinutes: parseInt(data.expiresAtMinutes, 10) || 120,
        expiresLabel: data.expiresLabel || '2 jam lagi',
        storageCondition: data.storageCondition || 'Suhu Ruang',
        pickupLocation: data.pickupLocation || currentUser.address || 'Outlet Penjemputan',
        notes: data.notes || 'Surplus pangan higienis siap santap.',
        status: 'OPEN',
        distanceKm: parseFloat(data.distanceKm) || 1.4,
        badge: data.badge || 'Baru Diterbitkan',
        imageEmoji: data.category === 'Siap Santap' ? '🍱' : (data.category === 'Sayur & Buah' ? '🥗' : '🥐'),
        createdAt: Date.now()
      };

      state.listings.unshift(newListing);
      setRawState(state);
      return newListing;
    },

    // Claims
    getClaims(filter = {}) {
      const state = getRawState();
      let list = state.claims || [];
      if (filter.listingId) {
        list = list.filter(c => c.listingId === filter.listingId);
      }
      if (filter.donaturId) {
        list = list.filter(c => c.donaturId === filter.donaturId);
      }
      if (filter.mitraId) {
        list = list.filter(c => c.mitraId === filter.mitraId);
      }
      if (filter.status) {
        list = list.filter(c => c.status === filter.status);
      }
      return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    },

    createClaim(claimData) {
      const state = getRawState();
      const currentMitra = this.getCurrentUser();

      const listing = state.listings.find(l => l.id === claimData.listingId);
      if (!listing) {
        throw new Error('Listing tidak ditemukan');
      }

      const newClaim = {
        id: 'claim-' + Date.now(),
        listingId: listing.id,
        listingTitle: listing.title,
        donaturId: listing.donaturId,
        donaturName: listing.donaturName,
        mitraId: currentMitra.id || 'mitra-1',
        mitraName: currentMitra.name || 'Panti Asuhan Al-Ikhlas',
        mitraPic: currentMitra.pic || 'Koordinator Mitra',
        mitraPhone: currentMitra.phone || '0813-0000-0000',
        mitraCapacity: currentMitra.capacity || 35,
        requestedPortions: parseInt(claimData.requestedPortions, 10) || listing.portions,
        kg: parseFloat(claimData.kg) || (parseInt(claimData.requestedPortions, 10) * 0.25) || listing.kg,
        vehicleNotes: claimData.vehicleNotes || 'Relawan jemput langsung',
        etaMinutes: parseInt(claimData.etaMinutes, 10) || 30,
        status: 'PENDING',
        distanceKm: listing.distanceKm || 1.5,
        notes: claimData.notes || 'Permohonan klaim untuk penerima manfaat.',
        createdAt: Date.now()
      };

      state.claims.unshift(newClaim);
      setRawState(state);
      return newClaim;
    },

    approveClaim(claimId) {
      const state = getRawState();
      const claim = state.claims.find(c => c.id === claimId);
      if (!claim) throw new Error('Klaim tidak ditemukan');

      claim.status = 'APPROVED';

      // Update listing status to CLAIMED
      const listing = state.listings.find(l => l.id === claim.listingId);
      if (listing) {
        listing.status = 'CLAIMED';
      }

      // Generate 4-digit PIN and Transaction
      const pin = generate4DigitPin();
      const newTransaction = {
        id: 'tx-' + Date.now(),
        claimId: claim.id,
        listingId: claim.listingId,
        listingTitle: claim.listingTitle,
        category: listing ? listing.category : 'Surplus Makanan',
        donaturId: claim.donaturId,
        donaturName: claim.donaturName,
        donaturAddress: listing ? listing.donaturAddress : 'Lokasi Donatur',
        mitraId: claim.mitraId,
        mitraName: claim.mitraName,
        mitraPic: claim.mitraPic,
        mitraPhone: claim.mitraPhone,
        portions: claim.requestedPortions,
        kg: claim.kg,
        pin: pin,
        qrData: `TP-TX-${pin}-${claim.id}`,
        status: 'SCHEDULED',
        pickupDeadline: `Dalam ${claim.etaMinutes || 30} menit`,
        vehicleNotes: claim.vehicleNotes,
        createdAt: Date.now(),
        completedAt: null,
        rating: null
      };

      state.transactions.unshift(newTransaction);
      setRawState(state);
      return { claim, transaction: newTransaction };
    },

    rejectClaim(claimId, reason = 'Kapasitas donasi telah dialihkan.') {
      const state = getRawState();
      const claim = state.claims.find(c => c.id === claimId);
      if (!claim) throw new Error('Klaim tidak ditemukan');

      claim.status = 'REJECTED';
      claim.rejectReason = reason;

      setRawState(state);
      return claim;
    },

    // Transactions & Handover Terminal
    getTransactions(filter = {}) {
      const state = getRawState();
      let list = state.transactions || [];
      if (filter.status) {
        list = list.filter(t => t.status === filter.status);
      }
      if (filter.donaturId) {
        list = list.filter(t => t.donaturId === filter.donaturId);
      }
      if (filter.mitraId) {
        list = list.filter(t => t.mitraId === filter.mitraId);
      }
      return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    },

    getTransactionById(id) {
      const state = getRawState();
      return (state.transactions || []).find(t => t.id === id) || null;
    },

    verifyHandover(transactionId, pinInput) {
      const state = getRawState();
      const tx = state.transactions.find(t => t.id === transactionId);
      if (!tx) {
        return { success: false, error: 'Transaksi tidak ditemukan.' };
      }

      if (tx.status === 'COMPLETED') {
        return { success: false, error: 'Transaksi ini telah diselesaikan sebelumnya.' };
      }

      // Check PIN
      const cleanInput = String(pinInput).trim();
      if (cleanInput !== String(tx.pin).trim()) {
        return { success: false, error: 'PIN tidak sesuai! Periksa 4-digit kode konfirmasi.' };
      }

      // Mark COMPLETED
      tx.status = 'COMPLETED';
      tx.completedAt = Date.now();

      // Update Listing status to COMPLETED
      const listing = state.listings.find(l => l.id === tx.listingId);
      if (listing) {
        listing.status = 'COMPLETED';
      }

      // Increment Aggregate Impact Metrics
      state.impactMetrics.totalKg = Math.round((state.impactMetrics.totalKg + tx.kg) * 10) / 10;
      state.impactMetrics.totalPortions += tx.portions;
      state.impactMetrics.co2eSaved = Math.round((state.impactMetrics.totalKg * 2.5) * 10) / 10;
      state.impactMetrics.completedTransactions += 1;
      state.impactMetrics.successRate = 98.7; // high reliability rate

      // Increment Donatur Stats
      const donatur = state.users.find(u => u.id === tx.donaturId);
      if (donatur) {
        donatur.totalPortions = (donatur.totalPortions || 0) + tx.portions;
        donatur.totalKg = Math.round(((donatur.totalKg || 0) + tx.kg) * 10) / 10;
      }

      // Increment Mitra Stats
      const mitra = state.users.find(u => u.id === tx.mitraId);
      if (mitra) {
        mitra.totalReceivedPortions = (mitra.totalReceivedPortions || 0) + tx.portions;
      }

      setRawState(state);
      return { success: true, transaction: tx, impactMetrics: state.impactMetrics };
    },

    submitRating(transactionId, ratingData) {
      const state = getRawState();
      const tx = state.transactions.find(t => t.id === transactionId);
      if (!tx) throw new Error('Transaksi tidak ditemukan');

      tx.rating = {
        stars: parseInt(ratingData.stars, 10) || 5,
        hygieneScore: parseInt(ratingData.hygieneScore, 10) || 5,
        punctualityScore: parseInt(ratingData.punctualityScore, 10) || 5,
        notes: ratingData.notes || 'Penyaluran tepat waktu dan makanan sangat layak santap.',
        reviewer: ratingData.reviewer || 'Mitra Penyalur',
        createdAt: Date.now()
      };

      setRawState(state);
      return tx;
    },

    // Impact Metrics
    getImpactMetrics() {
      const state = getRawState();
      return state.impactMetrics || INITIAL_SEED.impactMetrics;
    },

    // KYC Admin Gate
    getPendingUsers() {
      const state = getRawState();
      return (state.pendingKYC || []).filter(k => k.status === 'PENDING_VERIFICATION');
    },

    registerPendingUser(userData) {
      const state = getRawState();
      const newKYC = {
        id: 'kyc-' + Date.now(),
        orgName: userData.orgName || 'Lembaga Baru',
        type: userData.type || (userData.role === 'penyalur' ? 'MITRA' : 'DONATUR'),
        category: userData.category || (userData.role === 'penyalur' ? 'Lembaga Sosial' : 'Kuliner & Pangan'),
        picName: userData.picName || 'Penanggung Jawab',
        email: userData.email || 'pic@organisasi.id',
        phone: userData.phone || '0812-0000-0000',
        address: userData.address || 'Alamat Operasional',
        capacity: userData.capacity || 'Kapasitas harian',
        schedule: userData.schedule || 'Jadwal operasional',
        submittedAt: 'Baru saja',
        status: 'PENDING_VERIFICATION'
      };

      state.pendingKYC.unshift(newKYC);
      setRawState(state);
      return newKYC;
    },

    verifyUser(kycId, action = 'VERIFY') {
      const state = getRawState();
      const kyc = state.pendingKYC.find(k => k.id === kycId);
      if (!kyc) throw new Error('Data pendaftar tidak ditemukan');

      if (action === 'VERIFY') {
        kyc.status = 'VERIFIED';
        // Add to active users
        const newUser = {
          id: 'user-' + Date.now(),
          name: kyc.orgName,
          type: kyc.type,
          category: kyc.category,
          address: kyc.address,
          phone: kyc.phone,
          email: kyc.email,
          pic: kyc.picName,
          capacity: kyc.type === 'MITRA' ? 30 : undefined,
          status: 'VERIFIED',
          rating: 5.0,
          reviewCount: 0,
          totalPortions: 0,
          totalKg: 0,
          badge: 'Mitra Terverifikasi',
          joinedAt: 'Hari ini'
        };
        state.users.push(newUser);
      } else {
        kyc.status = 'REJECTED';
      }

      setRawState(state);
      return kyc;
    },

    getAllUsers(type = null) {
      const state = getRawState();
      let users = state.users || [];
      if (type) {
        users = users.filter(u => u.type === type);
      }
      return users;
    },

    // Reset Demo Data
    resetDemoData() {
      const freshSeed = JSON.parse(JSON.stringify(INITIAL_SEED));
      setRawState(freshSeed);
      return freshSeed;
    },

    // Helpers
    generateQrSvg,
    subscribe,

    // Floating Demo Switcher Component (Injected to all app portals)
    renderDemoSwitcher(activePortal = 'donatur') {
      const isDonatur = activePortal === 'donatur';
      const isMitra = activePortal === 'mitra';
      const isAdmin = activePortal === 'admin';

      return `
        <aside id="demo-switcher-bar" class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-forest/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/20 transition-all duration-300" aria-label="Demo Role Switcher">
          <div class="flex flex-wrap items-center justify-between gap-3 text-xs">
            <!-- Left: Badge & Live Status -->
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warm-yellow text-forest font-extrabold text-[11px] shadow-sm tracking-wide">
                <span>🎭</span> MODE DEMO
              </span>
              <span class="hidden sm:inline-block text-light-green/80 text-[11px]">
                FunDev 2026 USU Interactive Prototype
              </span>
            </div>

            <!-- Center: Role Quick Switches -->
            <div class="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl">
              <a href="app-donatur.html" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${isDonatur ? 'bg-primary text-white shadow-sm ring-1 ring-white/30' : 'text-light-green/80 hover:text-white hover:bg-white/10'}">
                <span>🥖</span>
                <span>Donatur</span>
              </a>
              <a href="app-mitra.html" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${isMitra ? 'bg-primary text-white shadow-sm ring-1 ring-white/30' : 'text-light-green/80 hover:text-white hover:bg-white/10'}">
                <span>🤲</span>
                <span>Mitra</span>
              </a>
              <a href="app-admin.html" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${isAdmin ? 'bg-primary text-white shadow-sm ring-1 ring-white/30' : 'text-light-green/80 hover:text-white hover:bg-white/10'}">
                <span>🛡️</span>
                <span>Admin</span>
              </a>
            </div>

            <!-- Right: Reset Data & Landing Link -->
            <div class="flex items-center gap-2">
              <button type="button" onclick="TPStore.confirmResetDemo()" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-red-500/80 text-white font-semibold text-[11px] transition-all cursor-pointer" title="Kembalikan data contoh ke awal">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                <span>Reset Demo</span>
              </button>
              <a href="index.html" class="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-light-green/70 hover:text-white transition-colors text-[11px]">
                <span>Beranda ↗</span>
              </a>
            </div>
          </div>
        </aside>
      `;
    },

    confirmResetDemo() {
      if (confirm('Reset seluruh data demo ke kondisi awal (seed default)?')) {
        this.resetDemoData();
        if (typeof window !== 'undefined') {
          // Show quick toast then reload
          alert('Data demo berhasil di-reset ke kondisi awal!');
          window.location.reload();
        }
      }
    }
  };

  return TPStore;
});
