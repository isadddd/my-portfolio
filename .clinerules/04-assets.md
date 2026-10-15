# 04 · Aset

## Aturan keras
- Semua gambar dan ikon berasal dari `src/assets/` dan diimpor lewat Vite (`import foto from '@/assets/images/...'`).
  Dilarang URL eksternal (Unsplash dan sejenisnya) dan dilarang hotlink.
- **Dilarang mengarang, men-generate, atau mengunduh gambar sendiri.**
- **`alt` tidak boleh kosong, di mana pun.** Tulis deskripsi yang bermakna.
  Elemen yang murni dekoratif dibuat sebagai SVG inline dengan `aria-hidden="true"`, bukan `<img>`.
- Penamaan file: huruf kecil, tanda hubung, tanpa spasi (mis. `portrait-cutout.png`).

## Kalau aset belum ada
1. Pakai atom `AssetPlaceholder` (blok `bg-ink/10` berukuran sama dengan aslinya, `role="img"`, `aria-label` berisi alt).
2. Catat di `assets-todo.md` (nama file yang diharapkan, lokasi, ukuran, dipakai di mana).
3. Jangan berhenti hanya karena aset kosong. Layout tetap harus jadi.
4. Saat file asli ditaruh di folder dengan nama yang sama, ganti impor tanpa mengubah layout.

## Atom `Image`
- Props: `src`, `alt` (wajib), `width`, `height` (wajib, mencegah layout shift), `priority`.
- `priority` hanya untuk gambar yang terlihat saat halaman dibuka (hero): `loading="eager"` dan `fetchPriority="high"`.
- Gambar lainnya: `loading="lazy"` dan `decoding="async"`.
- Jika `src` kosong, render `AssetPlaceholder`. Jika `alt` kosong, lempar error saat development.

## Format dan ukuran
- Foto: `.webp`. Ikon dan ilustrasi: `.svg`. `.png` hanya untuk cutout transparan.
- Target di bawah 300 KB per gambar (hero boleh lebih besar, tetap dikompres).
- Jangan pernah memakai file di `design/` sebagai aset situs. Folder itu hanya referensi.
