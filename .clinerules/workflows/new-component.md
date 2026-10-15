# /new-component.md · Membuat satu komponen

Input dari pengguna: nama komponen dan levelnya (atom, molecule, atau organism). Jika level belum jelas, tanyakan.

## Langkah
1. Cek `src/components/` apakah komponen serupa sudah ada. Jika ada, usulkan memakai ulang atau menambah `variant`, bukan membuat baru.
2. Konfirmasi level dengan aturan `02-architecture.md` (isinya hanya boleh berasal dari level lebih rendah).
3. Buat file `Nama.jsx` (datar, PascalCase) dengan:
   - komentar 1-2 baris di baris pertama yang menjelaskan fungsi komponen,
   - `propTypes` lengkap, default lewat default parameter,
   - prop `className` yang digabung lewat `cn()`,
   - elemen semantik yang tepat,
   - styling hanya dengan token (`03-styling.md`).
4. Konten datang dari props. Dilarang mengimpor `data/` atau `services/`.
5. Jalankan `npm run check`.
6. Laporkan file yang dibuat, keputusan dan alasannya, serta pertanyaan yang tersisa.
