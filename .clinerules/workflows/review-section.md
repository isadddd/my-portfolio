# /review-section.md · Audit satu section (tanpa mengubah kode)

Input dari pengguna: nama section. **Hanya melaporkan temuan. Jangan memperbaiki** kecuali pengguna meminta.

## Langkah
1. Jalankan `npm run check` dan catat hasilnya.
2. Buka section di dev server pada 1440px, 768px, dan 375px. Bandingkan dengan `design/sections/` dan `design/notes/`.
3. Periksa tiap poin di bawah, lalu laporkan lulus atau gagal dengan lokasi file dan baris.

## Checklist
- **Desain**: urutan elemen, ukuran font, spacing, radius, warna (sesuai pemetaan di catatan), perataan teks.
- **Padding**: header 16px. Content 16px di mobile dan 50px mulai `md`, lewat atom `Container`.
- **Token**: tidak ada hex, inline style, atau nilai arbitrer. Tidak ada warna di luar `brand`, `ink`, `sand`.
- **Arsitektur**: arah import benar. Organism tidak mengimpor `data/` atau `services/`. Tidak ada komponen duplikat.
- **CMS-ready**: semua teks dan gambar datang dari props. Bentuk data sesuai `02-architecture.md`.
- **Aset**: semua dari `src/assets/`. Semua `alt` terisi dan bermakna. Placeholder tercatat di `assets-todo.md`.
- **Aksesibilitas**: landmark, urutan heading, `aria-label` pada tombol ikon, fokus terlihat.
- **Performa**: `width` dan `height` pada gambar, hanya hero yang eager, tidak ada dependency baru.
- **Kode**: tiap file punya komentar penjelasan. Tidak ada `console.log` atau kode mati. Tidak ada fitur di luar desain.

## Format laporan
Tabel singkat (poin, status, lokasi) lalu daftar perbaikan yang disarankan berurutan dari yang paling penting.
