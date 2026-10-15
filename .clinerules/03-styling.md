# 03 · Styling (Tailwind, hanya token)

## Aturan keras
Semua styling lewat class Tailwind dengan nilai yang berasal dari `tailwind.config.js`.
Dilarang di dalam `src/`:
- Hex, `rgb()`, atau `hsl()` (hanya boleh ada di `tailwind.config.js`).
- Atribut `style={...}` (inline style).
- Nilai arbitrer seperti `w-[37px]` atau `bg-[#fff]`. Butuh nilai baru? Buat token di config dulu, tanyakan ke pengguna, lalu pakai namanya.
- `!important` dan `@apply` (satu-satunya pengecualian: `@layer base` di `src/index.css`).

Pengecualian tunggal di luar `src/`: meta `theme-color` di `index.html` butuh hex. Beri komentar penjelasan di sampingnya.

## Warna (hanya tiga, kunci di `theme.colors`)
| Token | Nilai | Dipakai untuk |
|---|---|---|
| `brand` | #E11D2E | aksen utama |
| `ink` | #0A0A0A | teks utama dan section gelap |
| `sand` | #EBE9E3 | latar terang |

- `theme.colors` di-override penuh, jadi `white`, `black`, dan `gray-*` **tidak ada**. Alasannya agar tidak ada warna liar masuk.
- Butuh turunan (teks pudar, garis tipis)? Gunakan opacity dari token: `text-ink/60`, `border-ink/10`.
- Butuh warna keempat? Tanya pengguna, jangan menambah sendiri.
- Screenshot sudah memakai palet ini. Elemen yang tampak di luar palet (titik hijau "available for projects", latar putih kartu logo teknologi) ditandai di catatan section: **tanyakan** token-nya ke pengguna sebelum dipakai.
- Warna di dalam gambar (foto, logo teknologi, poster proyek) adalah aset, bukan token.

## Font
- `font-sans` = Plus Jakarta Sans, `font-mono` = DM Mono. Tidak ada font lain.
- Pembagian (dari screenshot): `font-sans` untuk judul besar (huruf kecil semua, tracking sangat rapat). `font-mono` untuk navbar, label, paragraf, tombol, tooltip, dan meta.
- Impor hanya bobot yang dipakai (latin saja) agar ringan.

## Layout
- Header: padding kiri-kanan **16px** (`px-4`) di semua ukuran layar.
- Semua content section: **16px di mobile**, **50px mulai breakpoint `md`**.
  Token: `spacing.page = 50px`, dipakai lewat atom `Container` (`px-4 md:px-page`). Jangan menulis padding ini ulang di section.
- Mobile-first: class dasar untuk mobile, lalu `md:` dan `lg:`. Alasan: CSS lebih kecil dan logika responsif lebih mudah dibaca.
- Lebar acuan desain 1440px. Layout dibuat fluid, bukan dikunci 1440px.

## Skala tipografi, radius, spacing, shadow
- Ukur dari screenshot (1440px), lalu daftarkan sebagai token di `fontSize`, `borderRadius`, `spacing`, dan seterusnya.
- Nilai fluid (mis. judul raksasa) boleh memakai `clamp()` **di dalam config**.
- **Usulkan token baru ke pengguna lengkap dengan alasan sebelum dipakai.** Jangan menambah diam-diam.

## Kerapian
- Class diurutkan otomatis oleh `prettier-plugin-tailwindcss`.
- Gabungkan class kondisional dengan `cn()`.
