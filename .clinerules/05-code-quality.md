# 05 · Kualitas kode, aksesibilitas, SEO, performa

## Kode
- **Setiap file diawali komentar 1-2 baris** yang menjelaskan fungsi file itu. Ini dicek otomatis.
- Function component dan hooks. Tidak ada class component.
- Tidak ada `console.log`, kode yang dikomentari, atau variabel tak terpakai.
- TODO hanya dengan format `// TODO(fase-2): ...` atau `// TODO(cms): ...`.
- Jangan menambah dependency tanpa izin pengguna. Sebutkan nama paket, fungsinya, dan ukurannya.
- Jangan mengubah file di luar cakupan tugas.

## Aksesibilitas
- Landmark semantik: `header`, `nav`, `main`, `section`, `footer`. Satu `<h1>` saja (di Hero). Urutan heading tidak boleh melompat.
- Tombol untuk aksi, `<a>` untuk navigasi.
- Tombol ikon wajib `aria-label`. Fokus keyboard harus terlihat (`focus-visible:` dengan token warna).
- Accordion: `aria-expanded` dan `aria-controls`.
- Teks dummy tetap harus bahasa yang masuk akal. Dilarang lorem ipsum.

## SEO (satu halaman, SPA)
- `index.html`: `lang`, `<title>`, meta description, canonical, Open Graph, Twitter card, JSON-LD `Person`. Isi dummy diberi komentar `TODO`.
- `public/robots.txt` dan `public/sitemap.xml` (domain dummy diberi TODO).
- Heading dan teks asli ada di DOM (bukan gambar teks).
- Catatan untuk Fase 3: halaman detail proyek per URL butuh prerender atau SSR. Tanyakan pengguna sebelum memilih solusinya.

## Performa
- Gambar sesuai `04-assets.md`. Hanya hero yang eager.
- Animasi hanya pada `transform` dan `opacity`.
- Jangan memakai `useEffect` untuk data turunan. Jangan `memo` tanpa bukti kebutuhan.
- Target: build kecil, tanpa library berat, tanpa layout shift.
