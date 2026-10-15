# Catatan section: 07-footer

## Screenshot
`design/sections/07-footer.jpg` (tinggi ±572px di skala 1440).

## Terlihat di desain
- Latar `ink`.
- Kanan atas, dua kolom tautan `font-mono` kecil `sand`, tiap tautan dalam tanda kurung siku:
  - kolom 1: `[ about ]`, `[ works ]`, `[ services ]`
  - kolom 2: `[ linkedin ]`, `[ instagram ]`, `[ whatsapp ]`, `[ e-mail ]`
- Segitiga merah kecil di sisi kiri `[ about ]` dan `[ linkedin ]`.
- Bawah: wordmark raksasa `irsyadbgs` (`font-sans` tebal, `sand`), memenuhi hampir seluruh lebar dan terpotong di sisi bawah.
- Paling bawah, tengah: `©2026` kecil (`font-mono`).

## Pemetaan warna (dari screenshot)
Latar `ink`. Teks dan wordmark `sand`. Segitiga `brand`.

## Pertanyaan terbuka (jawab sebelum build)
1. Segitiga merah itu kondisi default atau hanya terlihat saat hover?
2. Tujuan tautan (about, works, services: scroll ke section; LinkedIn, Instagram, WhatsApp, e-mail: URL-nya)? Jika belum ada, dummy bertanda `TODO(cms)`.
3. Wordmark dipotong di bawah: berapa persen tinggi huruf yang terlihat? (ukur dari file; konfirmasi bahwa pemotongan disengaja)
4. Ukuran wordmark fluid mengikuti lebar layar (token `clamp()` di config). Setuju?

## Fase 2 (menunggu detail)
Hover tautan dan segitiga, entrance wordmark.
