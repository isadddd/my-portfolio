# Catatan section: 01-navbar

## Screenshot
`design/sections/01-navbar.jpg` (potongan paling atas; navbar menumpuk di atas Hero). Acuan keseluruhan: `00-full-page.jpg`.
Lebar file 2592px = 1,8x dari 1440px. Bagi semua hasil ukur dengan 1,8.

## Terlihat di desain
- Sticky di paling atas. Tidak ada latar terlihat: transparan di atas Hero hitam. Padding kiri-kanan **16px**.
- Kiri: logo goresan putih di dalam tanda kurung siku, `[ logo ]`.
- Kanan, berurutan: jam `2:08PM SOLO, ID`, garis pemisah `—`, `MENU`, `CONTACT ME`, lalu bendera Indonesia dalam lingkaran kecil.
- Teks DM Mono, huruf besar, ukuran kecil, warna `sand`.

## Pemetaan warna (dari screenshot)
Teks `sand`. Latar transparan. Logo dan bendera adalah aset.

## Pertanyaan terbuka (jawab sebelum build)
1. Saat navbar melewati section krem (About, Services), teks tetap `sand` (jadi tidak terbaca) atau berubah warna, atau dapat latar? berubah warna, misal background `ink` maka text jadi `sand`. ketika background `sand` maka text menjadi `brand`. ketika background `brand` maka text menjadi `sand`
2. `MENU` membuka apa? (overlay layar penuh, dropdown, atau scroll ke section) untuk menu dibuat hover muncul dropdown berisi about, works, services dengan padding 16px gap 16px text DM mono
3. `CONTACT ME` menuju ke mana? (scroll ke CTA, mailto, atau WhatsApp) scroll ke footer aja sepertinya
4. Bendera dibuat sebagai SVG (emoji dilarang di UI). Filenya ada? itu tidak usah dibuat dulu aja karna sebenernya planningnya itu mau kubuat multilanguage
5. Logo asli ada? Jika tidak, pakai placeholder. pakai placeholder yang udah aku sediain di src dulu aja sesuai image

## Fase 1 (statis)
Jam ditampilkan dummy tetap `2:08PM`. Dibuat sebagai slot yang mudah diganti jam live WIB di Fase 2.

## Fase 2 (menunggu detail)
Jam live zona Asia/Jakarta, perilaku sticky, aksi `MENU`, hover.