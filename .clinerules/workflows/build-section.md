# /build-section.md · Membuat satu section (Fase 1, statis)

Input dari pengguna: nama section (mis. "Hero"). Kerjakan **hanya** section itu.

## Tahap A · Plan Mode (jangan menulis kode)
1. Baca `design/sections/<nomor>-<nama>.jpg` dan `design/notes/<nomor>-<nama>.md`. Jika salah satunya tidak ada, berhenti dan minta ke pengguna.
   Lebar file screenshot 2592px = 1,8x dari skala 1440px, jadi bagi semua hasil ukur dengan 1,8 (berlaku juga untuk langkah 4).
   Catatan section sudah berisi "Pertanyaan terbuka" dari pengguna. Pastikan semuanya terjawab sebelum Tahap B.
2. Baca semua komponen yang sudah ada di `src/components/`.
3. Susun **inventaris**: atoms, molecules, dan organism yang dibutuhkan. Tandai mana yang sudah ada (pakai ulang) dan mana yang baru.
4. Ukur dari screenshot (lebar 1440px) dan usulkan **token baru** (font size, radius, spacing, dan lainnya) beserta alasan. Jangan menulis ke config dulu.
5. Tulis **pertanyaan** untuk semua hal ambigu: pemetaan warna, ukuran, perilaku, konten, aset.
6. Tampilkan rencana lalu **tunggu persetujuan pengguna**.

## Tahap B · Act Mode (setelah disetujui)
1. Tambahkan token yang disetujui ke `tailwind.config.js`.
2. Buat data dummy di `src/data/` (bentuk siap CMS, lihat `02-architecture.md`) dan fungsi pengambilnya di `src/services/content.js`.
3. Bangun dari bawah ke atas: atoms, molecules, organism. Tiap file diawali komentar penjelasan.
4. Pasang organism di `HomePage` lewat template. Konten datang dari `services` melalui props.
5. Aset: ikuti `04-assets.md`. Yang belum ada memakai `AssetPlaceholder` dan dicatat di `assets-todo.md`.
6. Perilaku, hover, dan animasi yang belum dijelaskan: **jangan dibuat**. Catat sebagai "menunggu detail".

## Tahap C · Verifikasi
1. `npm run check` harus lulus.
2. Jalankan dev server. Bandingkan dengan screenshot pada 1440px, 768px, dan 375px.
3. Laporkan selisih yang tersisa dengan jujur, lalu berhenti dan tunggu pengguna.
Laporan akhir mengikuti format di `06-workflow.md`.
