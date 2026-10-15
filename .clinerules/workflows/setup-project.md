# /setup-project.md · Menyesuaikan project Vite yang sudah ada (Fase 0)

Pengguna sudah membuat project Vite + React (JavaScript) kosong. **Jangan menjalankan `npm create vite` dan jangan membuat project baru.**
Tujuan: menyesuaikan project itu sampai `npm run check` lulus. **Belum membuat section apa pun.**
Sebutkan alasan tiap keputusan di laporan akhir. Berhenti dan tanya jika ada langkah yang gagal.

## Tahap A · Audit (Plan Mode, jangan mengubah apa pun)
Baca dan laporkan temuannya:
1. `package.json`: versi `vite`, `react`, `react-dom`, `eslint`, dependency lain yang sudah ada, dan script yang ada.
2. `node -v` dan `npm -v`. Laporkan jika versi Node terlalu lama untuk Vite yang terpasang.
3. Bahasa: `src/main.jsx` (JavaScript) atau `src/main.tsx` (TypeScript)? Jika TypeScript, **berhenti dan tanya**.
4. `vite.config.js`, `eslint.config.js` (atau `.eslintrc*`), `index.html`, serta isi `src/` dan `public/`.
5. Apakah Tailwind atau PostCSS sudah terpasang, dan versi berapa? Jika Tailwind v4 sudah ada, **berhenti dan tanya** (aturan proyek memakai v3.4).
6. Paket aturan yang sudah disalin pengguna: `.clinerules/`, `scripts/check-rules.mjs`, `design/`, `assets-todo.md`. Pastikan lengkap.

Lalu tampilkan tabel: **dipertahankan**, **diubah**, **dihapus** (hanya file demo bawaan Vite), dan **pertanyaan**.
**Tunggu persetujuan pengguna** sebelum Tahap B.

## Tahap B · Penyesuaian (Act Mode)
Aturan: pertahankan yang sudah benar dan ubah seminimal mungkin. Jangan menimpa `package.json`, `vite.config.js`, atau `eslint.config.js`. Edit bagian yang perlu saja.

### 1. Dependency (pasang hanya yang belum ada)
- Runtime: `lucide-react clsx tailwind-merge prop-types @fontsource-variable/plus-jakarta-sans @fontsource/dm-mono`
- Dev: `tailwindcss@3.4 postcss autoprefixer prettier prettier-plugin-tailwindcss eslint-plugin-jsx-a11y eslint-plugin-react`

### 2. `tailwind.config.js` (buat jika belum ada, salin persis)
```js
// Token desain proyek. Satu-satunya tempat nilai warna dan ukuran boleh ditulis mentah.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: '#E11D2E',
      ink: '#0A0A0A',
      sand: '#EBE9E3',
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: { page: '50px' },
    },
  },
  plugins: [],
};
```
Skala tipografi, radius, dan token lain **belum** ditulis. Itu diukur dari screenshot saat mengerjakan section pertama dan disetujui pengguna dulu.

### 3. `postcss.config.js` (jika belum ada)
```js
// Menjalankan Tailwind dan autoprefixer saat build.
export default { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

### 4. `src/index.css` (gantikan isi demo bawaan Vite)
```css
/* Entry Tailwind dan gaya dasar halaman. Satu-satunya tempat @apply diizinkan. */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body { @apply bg-ink font-sans text-sand antialiased; }
}
```
Latar dasar `ink` dipilih karena section pertama (Hero) hitam. Jika audit menunjukkan hal lain, tanyakan.

### 5. Font
Di `src/main.jsx` impor hanya bobot yang dipakai:
`@fontsource-variable/plus-jakarta-sans/index.css` dan `@fontsource/dm-mono/400.css`.
Tanyakan pengguna bobot DM Mono lain (mis. 500) sebelum menambah.

### 6. Alias `@/`
- `vite.config.js`: tambahkan `resolve.alias['@'] = fileURLToPath(new URL('./src', import.meta.url))` pada config yang sudah ada.
- `jsconfig.json`: `{ "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["src/*"] } }, "include": ["src"] }`

### 7. ESLint dan Prettier
- Edit `eslint.config.js` bawaan Vite: aktifkan `jsx-a11y` (rekomendasi, `alt-text` = error), `react/prop-types` = error, `no-console` = warn.
  Alasan `react/prop-types`: React 19 tidak memvalidasi propTypes saat runtime, jadi pengecekan dilakukan statis.
- `.prettierrc`: `{ "semi": true, "singleQuote": true, "printWidth": 100, "plugins": ["prettier-plugin-tailwindcss"] }`

### 8. Bersihkan file demo bawaan Vite
Hapus hanya yang tercantum di tabel Tahap A (biasanya `src/App.css`, `src/assets/react.svg`, `public/vite.svg`) dan kosongkan isi demo di `App.jsx`.
Ganti `App.jsx` dengan komponen kosong berkomentar penjelasan. File lain jangan disentuh.

### 9. Skeleton folder
Buat folder kosong sesuai `02-architecture.md` (tambahkan `.gitkeep` jika perlu).
Buat `src/lib/cn.js` (clsx + tailwind-merge) dengan komentar penjelasan di baris pertama.
Pastikan `.gitignore` memuat `node_modules` dan `dist`.

### 10. SEO dasar
Rapikan `index.html` sesuai bagian SEO di `05-code-quality.md`: ganti title bawaan Vite ("Vite + React") dan favicon bawaan. Konten dummy diberi komentar `TODO`.
Buat `public/robots.txt` dan `public/sitemap.xml`.

### 11. Script `package.json`
Tambahkan (jangan menghapus script bawaan):
`"check": "eslint . && node scripts/check-rules.mjs && prettier --check \"src/**/*.{js,jsx,css}\" && vite build"`
Jika ESLint memprotes folder `scripts/`, tambahkan ke daftar ignore.

## Tahap C · Verifikasi
Jalankan `npm run check` sampai lulus, lalu `npm run dev` dan pastikan halaman kosong tampil tanpa error konsol.
Laporkan sesuai format di `06-workflow.md`, termasuk daftar file yang diubah dan dihapus beserta alasannya.
