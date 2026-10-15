# 06 · Cara kerja

## Satu tugas = satu section
- Kerjakan **satu section per tugas**. Jangan menyentuh section lain.
- Mulai dengan **Plan Mode**. Tampilkan rencana, daftar pertanyaan, dan usulan token, lalu **tunggu persetujuan** sebelum menulis kode.
- Gunakan `/build-section.md` untuk membuat section, `/review-section.md` untuk memeriksa, dan `/new-component.md` untuk satu komponen.

## Sebelum menulis
1. Baca screenshot di `design/sections/` dan catatan di `design/notes/`. Jika belum ada, minta ke pengguna.
2. Cek komponen yang sudah ada. **Pakai ulang sebelum membuat baru.**
3. Tulis semua ambiguitas sebagai pertanyaan. Jangan menebak.

## Sebelum menyatakan selesai
1. Jalankan `npm run check` (ESLint, script aturan, Prettier, build). Harus lulus.
2. Jalankan dev server dan bandingkan dengan screenshot pada 1440px, 768px, dan 375px.
3. Sebutkan selisih yang masih ada dengan jujur. Jangan menyatakan "sudah persis" kalau belum.

## Format laporan akhir (singkat)
- File yang dibuat atau diubah, masing-masing satu baris tujuan.
- **Keputusan dan alasannya.**
- Pertanyaan yang masih terbuka.
- Aset yang masih placeholder (sudah dicatat di `assets-todo.md`).
- Hal yang menunggu detail perilaku dari pengguna.

## Git
Jangan melakukan commit atau push kecuali diminta pengguna.
