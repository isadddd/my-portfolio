# Panduan: memasang dan memakai paket Cline untuk portfolio irsyadbgs

Paket ini dibuat untuk **project Vite + React (JavaScript) yang sudah kamu buat**. Paket tidak membuat project baru dan tidak menimpa `package.json`, `vite.config.js`, atau `src/` milikmu.

## 1. Isi paket

```
cline-setup/
├── .clinerules/              # aturan yang dibaca Cline di setiap tugas
│   ├── 01-project.md         # tujuan, stack, fase, 7 section, cara berkomunikasi
│   ├── 02-architecture.md    # atomic design + kontrak siap CMS
│   ├── 03-styling.md         # hanya token Tailwind, padding 16/50px, palet, font
│   ├── 04-assets.md          # aset dari src/assets, alt tidak boleh kosong
│   ├── 05-code-quality.md    # komentar tiap file, a11y, SEO, performa
│   ├── 06-workflow.md        # satu section per tugas, Plan lalu Act
│   ├── 07-animation.md       # GSAP, Lenis, cursor (HANYA Fase 2)
│   └── workflows/
│       ├── setup-project.md  # audit lalu sesuaikan project Vite-mu
│       ├── build-section.md
│       ├── review-section.md
│       └── new-component.md
├── .clineignore
├── assets-todo.md            # aset yang masih placeholder (sudah terisi awal)
├── design/
│   ├── sections/             # screenshotmu sudah dipotong per section
│   └── notes/                # catatan per section, sudah terisi dari screenshot
├── scripts/check-rules.mjs   # pengecek otomatis (sudah diuji)
└── PANDUAN.md
```

## 2. Cara memasang di project yang sudah ada

1. Pastikan project Vite-mu bisa jalan: `npm install` lalu `npm run dev` menampilkan halaman bawaan Vite.
2. Ekstrak zip. Salin **isinya** ke root project, yaitu folder yang berisi `package.json`. Hasilnya `.clinerules/` sejajar dengan `package.json`.
   Folder tersembunyi (`.clinerules`) dan `.clineignore` harus ikut tersalin.
3. Buka project di VS Code, lalu buka panel Cline dan pastikan semua file di Rules aktif.
4. Di chat Cline pilih **Plan Mode**, lalu jalankan `/setup-project.md`.
   Cline akan **mengaudit dulu**: versi Vite dan React, ESLint, ada tidaknya Tailwind, file demo bawaan. Dia melaporkan apa yang dipertahankan, diubah, dan dihapus. Baca, jawab pertanyaannya, lalu setujui.
5. Pindah ke **Act Mode**. Cline menyesuaikan project sampai `npm run check` lulus.

## 3. Mengerjakan tiap section

Urutan saran: 01 Navbar, 02 Hero, 03 About, 04 Selected Work, 05 Services, 06 CTA, 07 Footer.

1. Buka `design/notes/<section>.md`. Isinya sudah saya tulis dari screenshot. Bagian yang perlu kamu isi hanya **Pertanyaan terbuka**. Jawab langsung di file itu.
2. Di Cline (**Plan Mode**) jalankan `/build-section.md` dan sebut nama section.
3. Cline menyusun inventaris komponen, mengusulkan token (ukuran font, radius, dan lainnya) beserta alasan, dan bertanya. Jawab dan setujui.
4. Pindah ke **Act Mode**. Cline menulis kode lalu menjalankan `npm run check`.
5. Bandingkan hasilnya di browser dengan `design/sections/`, lalu jalankan `/review-section.md` untuk audit.
6. Selisih kecil: minta perbaikan spesifik ("judul 4px terlalu kecil di 1440px"). Setelah puas, lanjut.

Fase 2 (animasi, jam navbar, tooltip, custom cursor, preview proyek): tulis detail perilaku di bagian "Fase 2" catatan section, lalu minta Cline mengerjakannya satu per satu.

## 4. Kalau hasil Cline mulai "slop"

Jangan hanya memperbaiki hasilnya. Tambahkan **satu baris aturan** ke file `.clinerules` yang relevan supaya tidak terulang. Aturan yang bagus itu spesifik dan bisa dicek.

`npm run check` otomatis menolak: warna hardcode, `style={}`, nilai arbitrer seperti `w-[37px]`, emoji, URL gambar eksternal, `alt` kosong, import atomic yang salah, komponen yang mengimpor `data/`, dan file tanpa komentar penjelasan.

## 5. Keputusan yang saya ambil (beserta alasan)

| Keputusan | Alasan |
|---|---|
| Screenshot saya potong jadi 7 file + 1 acuan penuh | Cline lebih akurat membaca satu section per gambar. File aslinya 2592px = 1,8x dari 1440px, jadi semua ukuran harus dibagi 1,8 (sudah tertulis di aturan). |
| Catatan section saya isi dari yang terlihat di screenshot | Kamu bilang sulit menjelaskan detail. Dengan begini kamu cukup menjawab pertanyaan terbuka. Perilaku dibiarkan kosong sesuai permintaanmu. |
| Project yang ada tidak dibuat ulang, diaudit dulu | Aturanmu: sesuaikan dengan React kosongan yang sudah ada. Audit mencegah menimpa konfigurasi yang sudah benar. |
| JavaScript (JSX) + `prop-types` + ESLint `react/prop-types` | React 19 tidak memvalidasi `propTypes` saat runtime. ESLint menjadi penjaga yang sebenarnya. |
| Tailwind v3.4 | Token terkumpul di `tailwind.config.js`, mudah dikunci dan diaudit. Versi 4 memakai konfigurasi di CSS. |
| `theme.colors` hanya `brand`, `ink`, `sand` | Menghilangkan semua warna bawaan agar warna liar tidak bisa masuk. Turunan lewat opacity (`text-ink/60`). |
| Padding content 16px mobile, 50px mulai `md` (768px), lewat atom `Container` | Satu tempat untuk aturan ini. Header tetap 16px. |
| `font-sans` untuk judul besar, `font-mono` untuk teks kecil | Sesuai yang terlihat di screenshot. |
| Font lewat Fontsource | Lebih cepat, tanpa request pihak ketiga, tanpa layout shift. |
| Komponen datar (`Button.jsx`) | Lebih sedikit file. Folder hanya jika komponen punya banyak file. |
| Organism hanya menerima props, `pages` memanggil `services/content.js` | Saat CMS datang, cukup ganti isi `services/`. |
| Animasi, jam, tooltip, dan cursor ditunda ke Fase 2 | Sesuai permintaanmu: statis dulu. |

## 6. Hal yang perlu kamu putuskan (ada di "Pertanyaan terbuka" tiap catatan)

1. **Titik hijau "available for projects"** (Hero) ada di luar palet tiga warna. Perlu token tambahan atau diganti.
2. **Latar putih kartu logo teknologi** (About) juga di luar palet.
3. **Navbar di atas section krem**: teks `sand` akan tidak terbaca. Perlu aturan warna atau latar.
4. **Tujuan semua tautan** (CONTACT ME, CTA e-mail dan WhatsApp, media sosial footer). Sementara dummy bertanda `TODO(cms)`.
5. **Padding 50px** saya tetapkan mulai `md` (768px). Kalau tablet butuh nilai tengah, katakan.
6. **Bendera Indonesia** harus berupa SVG karena emoji dilarang di UI.

## 7. Catatan jujur

- Saya tidak bisa melihat foldermu, jadi workflow memakai tahap audit. Kalau mau saya sesuaikan lebih spesifik, tempel isi `package.json` dan hasil `ls`/`tree` folder projectmu.
- Script pengecek sudah saya uji dengan contoh yang melanggar dan yang bersih. Aturan dan workflow Cline belum saya coba di Cline sungguhan, jadi wajar kalau ada yang perlu disetel setelah section pertama.
- Posisi dan ukuran foto Hero hanya perkiraan dari screenshot. Cline diminta mengukur ulang dari file.
- Untuk halaman detail proyek per URL, SPA saja kurang ideal untuk SEO. Kita putuskan di Fase 3.
