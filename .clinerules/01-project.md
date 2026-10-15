# 01 · Proyek (selalu berlaku)

## Tujuan
Portfolio personal branding dan freelance milik Irsyad (brand: **irsyadbgs**), berbasis di Solo, Surakarta (WIB).
Dideploy ke Vercel. Konten saat ini masih banyak dummy dan nanti dipindah ke CMS.
Prioritas: **persis desain**, **rapi**, **ringan dan lancar**, **SEO rapi**.

## Project sudah ada
Pengguna sudah membuat project Vite + React (JavaScript) kosong dan sudah menjalankan `npm install`.
**Jangan membuat project baru dan jangan menimpa file miliknya.** Mulai dengan audit lewat `/setup-project.md`,
lalu sesuaikan isi project yang ada. Ubah seminimal mungkin dan sebutkan alasannya.

## Stack (dilarang menambah atau mengganti tanpa izin)
- Vite + React, **JavaScript/JSX** (tanpa TypeScript). Jika project ternyata TypeScript, berhenti dan tanya.
- Tailwind CSS **v3.4** lewat `tailwind.config.js`.
  Alasan: semua token terkumpul di satu file yang mudah diaudit dan dikunci.
- Font self-hosted lewat Fontsource: **Plus Jakarta Sans** (sans) dan **DM Mono** (mono).
  Alasan: tanpa request ke Google Fonts, lebih cepat, tidak ada layout shift.
- Ikon: `lucide-react`. Helper class: `clsx` + `tailwind-merge` di `src/lib/cn.js`.
- Props: `prop-types` + aturan ESLint `react/prop-types`.
  Catatan: React 19 **tidak** memvalidasi `propTypes` saat runtime, jadi penjaganya adalah ESLint (statis).
- GSAP, ScrollTrigger, SplitText, Lenis: **baru dipasang di Fase 2**, bukan sebelumnya.

## Fase kerja (kerjakan hanya fase yang diminta pengguna)
0. Audit dan penyesuaian project (`/setup-project.md`).
1. Tampilan **statis** per section, sesuai desain.
2. Animasi dan interaksi (GSAP, smooth scroll, custom cursor, tooltip, preview proyek, jam navbar).
3. Integrasi CMS.

## Sumber kebenaran desain
- Screenshot ada di `design/sections/` (`00-full-page.jpg` adalah acuan keseluruhan). Penjelasan per section ada di `design/notes/`.
- **Ukuran file screenshot 2592px lebar = 1,8x dari skala 1440px.** Bagi semua hasil ukur dengan 1,8.
- Urutan section (7): Navbar (sticky), Hero, About, Selected Work, Services, CTA, Footer.
- Dilarang menambah, menghapus, atau menyusun ulang section.
- Jika screenshot dan catatan pengguna bertentangan, **catatan pengguna menang**, lalu sebutkan pertentangannya.

## Cara berkomunikasi
- Jawab dalam bahasa Indonesia.
- **Setiap keputusan wajib disertai alasan singkat** di ringkasan akhir tugas.
- Ada yang ambigu (warna, ukuran, perilaku, konten)? **Tanya dulu**, jangan menebak.
- Jangan ngide. Kerjakan persis sesuai desain dan penjelasan. Tidak ada fitur, section, copy, atau gaya tambahan.
- Dilarang memakai emoji di UI (bendera, ikon, dan sejenisnya dibuat sebagai aset SVG).
- Perilaku atau animasi yang belum dijelaskan pengguna: **jangan dibuat**. Cukup catat "menunggu detail perilaku".
