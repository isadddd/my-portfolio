# 07 · Animasi dan interaksi (HANYA Fase 2)

Jangan menyentuh aturan ini sebelum pengguna menyatakan Fase 2 dimulai. Di Fase 1, semua statis.

## Pemasangan
- Paket yang diizinkan: `gsap`, `@gsap/react`, `lenis`. Pasang setelah pengguna setuju.
- Pakai `useGSAP` (dari `@gsap/react`) agar animasi dibersihkan otomatis saat komponen dilepas.
- Daftarkan plugin sekali saja di satu file (`src/lib/gsap.js`). Impor hanya plugin yang dipakai.
- Sinkronkan Lenis dengan ScrollTrigger lewat satu setup di `src/lib/smoothScroll.js`.

## Fitur yang terlihat di desain (detail perilaku menunggu penjelasan pengguna per section)
- **Navbar:** jam live zona `Asia/Jakarta` (WIB) lewat `Intl.DateTimeFormat`. Di Fase 1 hanya slot dengan teks dummy statis dan komentar `TODO(fase-2)`.
- **Hero:** animasi entrance judul dan foto yang tersebar.
- **About:** paragraf dengan sorot per huruf saat scroll (sebagian teks penuh merah, sisanya pudar). Kartu logo teknologi yang melayang (spatial scene) dengan tooltip.
- **Selected Work:** daftar judul proyek dengan preview kompleks di sisi kanan (kartu bertumpuk, meta, deskripsi).
- **Services:** daftar layanan dengan tooltip penjelasan pada item aktif.
- **Footer:** tautan dengan penanda segitiga, wordmark raksasa.
- **Global:** smooth scroll (Lenis), custom cursor, animasi entrance per section.

## Aturan
- **Jangan menebak perilaku.** Setiap interaksi dikerjakan setelah pengguna menjelaskan detailnya.
- Hormati `prefers-reduced-motion`: matikan atau kurangi animasi.
- Custom cursor hanya aktif pada `(pointer: fine)`. Perangkat sentuh memakai cursor bawaan.
- Tooltip harus bisa diakses keyboard: `role="tooltip"`, `aria-describedby`, muncul juga saat fokus.
- Animasikan hanya `transform` dan `opacity`. Durasi dan easing dikumpulkan sebagai konstanta di `src/lib/motion.js`, bukan angka tersebar.
- Teks yang dipecah per huruf tetap harus terbaca screen reader (pertahankan teks utuh di `aria-label`, pecahan hurufnya `aria-hidden`).
- Struktur HTML Fase 1 sebaiknya sudah memudahkan Fase 2 (mis. paragraf About dibungkus per kata), tetapi **tanpa** menambah animasinya.
