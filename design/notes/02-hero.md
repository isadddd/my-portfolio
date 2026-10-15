# Catatan section: 02-hero

## Screenshot
`design/sections/02-hero.jpg` (tinggi ±900px di skala 1440, satu layar penuh). Navbar menumpuk di atasnya.

## Terlihat di desain
- Latar `ink` (hitam).
- Judul besar `code with a point of view.` warna `brand` (merah), `font-sans` tebal, huruf kecil semua, tracking sangat rapat, rata tengah.
- Di bawah judul, rata kanan: `irsyadbgs` miring (italic), `brand`.
- Paragraf `font-mono` kecil, `sand`, di tengah-kiri, teks dummy: "Mungkin ini bisa dijadikan tentang about me singkat. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been..." (terpotong oleh foto di kanannya).
- 6 foto tersebar dengan ukuran berbeda-beda (semua aset, perkiraan posisi di skala 1440, ukur ulang dari file):
  1. monyet kecil, kiri atas (±100x135)
  2. kucing putih, atas tengah, menimpa sebagian judul (±195x255)
  3. potret pria, kanan atas (±205x280)
  4. monyet berearphone, kiri tengah (±180x240)
  5. orang pose yoga, bawah tengah (±110x145)
  6. fotografer, kanan bawah (±195x260)
- Kanan bawah: titik hijau + `available for projects` (`font-mono` kecil, `sand`).

## Pemetaan warna (dari screenshot)
Latar `ink`. Judul dan `irsyadbgs` `brand`. Paragraf dan status `sand`. **Titik hijau di luar palet.**

## Pertanyaan terbuka (jawab sebelum build)
1. Titik hijau "available for projects": tambah token (mis. `status`) dengan nilai apa, atau ganti ke token yang ada?
untuk yang berwarna hijau itu sebenernya dot hijau yang berkedip nyala mati dan dibuat fixed position yang nantinya akan tertutup section CTA dan Footer
2. Urutan tumpukan: foto kucing di depan atau di belakang judul? (dan foto lain terhadap paragraf)
dibelakang judul semua kecuali yang foto manusia
3. Foto asli sudah ada atau pakai placeholder dulu? Posisi dan ukuran di atas perkiraan: sudah sesuai dengan yang kamu mau?
fotonya ada didalam folder src
4. Paragraf: pakai teks dummy apa adanya atau ada teks asli? 
seperti di foto yang kamu lihat

## Fase 2 (menunggu detail)
Animasi entrance judul dan foto, parallax atau gerak foto, hover.
