# 02 · Arsitektur (atomic design + siap CMS)

## Level dan arah import
Import hanya boleh ke level yang **lebih rendah**.

| Level | Isi | Boleh import dari |
|---|---|---|
| atoms | elemen terkecil: Button, Heading, Text, Label, Image, Icon, Link, Container | `lib`, `hooks`, `assets` |
| molecules | gabungan atom: NavItem, ProjectCard, FaqItem, SectionHeader | atoms |
| organisms | satu section utuh: Navbar, Hero, About, Footer | atoms, molecules |
| templates | kerangka halaman: MainLayout | organisms, atoms |
| pages | mengambil konten lalu mengisi template | templates, organisms, `services` |

Dilarang: atom mengimpor molecule, molecule mengimpor organism, dan seterusnya.
Alasan: ketergantungan satu arah membuat komponen bisa dipakai ulang dan diuji sendiri.

Gunakan alias `@/` (mengarah ke `src/`), bukan path relatif panjang seperti `../../../`.

## Struktur folder
```
src/
  assets/images, assets/icons
  components/atoms, molecules, organisms, templates
  pages/
  data/        # konten dummy, satu file per jenis konten
  services/    # content.js: fungsi getX() yang mengembalikan konten
  hooks/
  lib/         # cn.js dan helper kecil
  index.css, main.jsx, App.jsx
design/
  sections/    # screenshot per section
  notes/       # penjelasan per section
```
- Satu komponen = satu file `Nama.jsx`, **datar** (tanpa folder per komponen).
  Buat folder hanya jika komponen punya lebih dari satu file (misalnya preview proyek yang kompleks).
- Nama file komponen PascalCase, `export default` satu komponen per file.
- Komponen yang melewati ±150 baris wajib dipecah.

## Kontrak siap CMS (penting)
Konten nanti diganti dengan CMS, jadi komponen tidak boleh tahu dari mana konten berasal.
- atoms, molecules, organisms, dan templates **hanya menerima konten lewat props**. Dilarang mengimpor `data/` atau `services/`.
- `pages/*` memanggil `services/content.js`, lalu membagikan hasilnya ke organism.
- `services/content.js` sekarang mengembalikan isi `data/`. Nanti isinya diganti fetch ke CMS tanpa mengubah komponen.
  Fase 1: fungsinya sinkron (lebih sederhana). Berpindah ke async baru di Fase 3.
- Bentuk data (kunci camelCase bahasa Inggris):
  - Item list wajib punya `id` dan `slug`.
  - Gambar: `{ src, alt }`. Link: `{ label, href }`.
  - Teks panjang: array string (satu string per paragraf).
  - Dilarang ada JSX, className, atau HTML di dalam data.
- Teks UI yang tampil di desain (label tombol, judul section, label navbar) juga lewat data (`data/site.js`), agar bisa diedit lewat CMS.

## Props
- Semua komponen punya `propTypes`. Nilai default lewat default parameter.
  (React 19 tidak memvalidasi propTypes saat runtime. Validasinya dijaga ESLint `react/prop-types`.)
- Gunakan prop `variant` untuk variasi tampilan (mis. `Button variant="solid | outline"`), bukan komponen duplikat.
- Setiap komponen menerima `className` dan menggabungkannya lewat `cn()`.
