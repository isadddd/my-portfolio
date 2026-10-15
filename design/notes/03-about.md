# Catatan section: 03-about

## Screenshot
`design/sections/03-about.jpg` (tinggi ±900px di skala 1440).

## Terlihat di desain
- Latar `sand` (krem).
- Label kecil `— hello, i'm irsyad` (`font-mono`, `irsyad` miring). Label tampak menjorok ke kanan (±133px dari kiri) dibanding paragraf (mulai di 50px). Ukur ulang dari file.
- Paragraf besar `font-mono`, warna `brand`, lebar sekitar separuh kiri. Teks dummy Lorem Ipsum ("Lorem Ipsum is simply dummy text of the printing and typesetting industry..."). Di screenshot, bagian awal teks penuh merah dan sisanya pudar (kondisi tengah animasi sorot per huruf).
- Sisi kanan: kartu logo teknologi yang tersebar (Laravel, Vue, WordPress, React, Shopify), berbentuk kotak membulat terang dengan bayangan tipis. Kartu Shopify punya titik merah di pojok dan tooltip kotak hitam bertuliskan `Shopify` (`font-mono`, teks `sand`).

## Pemetaan warna (dari screenshot)
Latar `sand`. Label `ink`. Paragraf `brand` (bagian pudar = `brand` dengan opacity). Tooltip: latar `ink`, teks `sand`. **Latar kartu logo tampak putih/terang di luar palet.**

## Pertanyaan terbuka (jawab sebelum build)
1. Di Fase 1 (statis), paragraf tampil **seluruhnya penuh merah** atau meniru kondisi di screenshot (sebagian pudar)?
2. Latar kartu logo teknologi: token apa? (mis. `sand` lebih terang lewat opacity atau token baru)
3. Label menjorok ±133px itu disengaja?
4. Tooltip Shopify: tampil statis di Fase 1 atau hanya Fase 2?
5. Logo teknologi: file asli ada atau placeholder?

## Fase 2 (menunggu detail)
Sorot per huruf saat scroll, kartu melayang (spatial scene), tooltip, entrance.
Catatan untuk Fase 1: pecah paragraf per kata di markup agar mudah dipecah per huruf nanti, tanpa menambah animasi.
