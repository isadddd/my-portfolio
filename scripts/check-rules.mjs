/**
 * check-rules.mjs: pengecek aturan proyek yang tidak bisa ditangkap ESLint.
 * Dijalankan lewat `npm run check`. Keluar dengan kode 1 jika ada pelanggaran:
 * warna hardcode, inline style, nilai arbitrer Tailwind, emoji, URL gambar eksternal,
 * alt kosong, arah import atomic yang salah, komponen yang mengimpor data/services,
 * dan file tanpa komentar penjelasan di baris pertama.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');

if (!existsSync(SRC)) {
  console.error('Folder src/ tidak ditemukan. Jalankan dari root project.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const toPosix = (p) => p.split(sep).join('/');
const lineOf = (text, index) => text.slice(0, index).split('\n').length;

const files = walk(SRC).filter((f) => /\.(jsx?|css)$/.test(f));
const problems = [];
const add = (file, line, message) =>
  problems.push({ file: toPosix(relative(ROOT, file)), line, message });

// Aturan per baris. jsOnly = hanya untuk .js/.jsx.
const LINE_RULES = [
  {
    message: 'Warna hardcode (hex/rgb/hsl). Pakai token Tailwind dari tailwind.config.js.',
    pattern: /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b|\b(?:rgb|hsl)a?\(/,
    skip: (line) => /href=|\bid=|\bto=/.test(line),
  },
  {
    message: 'Inline style dilarang. Pakai class Tailwind (buat token jika perlu).',
    pattern: /\bstyle=\{/,
    jsOnly: true,
  },
  {
    message: 'Nilai arbitrer Tailwind (mis. w-[37px]) dilarang. Buat token di tailwind.config.js.',
    pattern: /(?:^|[\s"'`:])(?!data-|aria-|group-|peer-)[a-z][\w-]*-\[[^\]]+\]/,
    jsOnly: true,
  },
  {
    message: 'Emoji dilarang di UI.',
    pattern: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u,
  },
  {
    message: 'URL gambar eksternal dilarang. Simpan aset di src/assets/.',
    pattern: /https?:\/\/[^\s"'`)]+\.(?:png|jpe?g|webp|gif|svg|avif)\b|images\.unsplash\.com/i,
  },
];

// Import hanya boleh ke level yang lebih rendah. data/ dan services/ hanya untuk pages.
const FORBIDDEN_IMPORTS = {
  atoms: ['molecules', 'organisms', 'templates', 'pages', 'data', 'services'],
  molecules: ['organisms', 'templates', 'pages', 'data', 'services'],
  organisms: ['templates', 'pages', 'data', 'services'],
  templates: ['pages', 'data', 'services'],
};

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');
  const isCss = file.endsWith('.css');
  const rel = toPosix(relative(SRC, file));

  // 1. Baris pertama harus komentar penjelasan.
  const first = lines.find((l) => l.trim() !== '') ?? '';
  if (!/^\s*(\/\*|\/\/)/.test(first)) {
    add(file, 1, 'Baris pertama harus komentar singkat yang menjelaskan fungsi file.');
  }

  // 2. Aturan per baris.
  lines.forEach((line, i) => {
    for (const rule of LINE_RULES) {
      if (rule.jsOnly && isCss) continue;
      if (rule.skip?.(line)) continue;
      if (rule.pattern.test(line)) add(file, i + 1, rule.message);
    }
  });

  if (isCss) continue;

  // 3. Arah import atomic dan larangan import data/services di komponen.
  const layer = Object.keys(FORBIDDEN_IMPORTS).find((l) => rel.startsWith(`components/${l}/`));
  if (layer) {
    for (const m of text.matchAll(/(?:from|import)\s*\(?\s*['"]([^'"]+)['"]/g)) {
      for (const banned of FORBIDDEN_IMPORTS[layer]) {
        if (new RegExp(`(^|/)${banned}(/|$)`).test(m[1])) {
          add(file, lineOf(text, m.index), `${layer} dilarang mengimpor dari "${banned}" (${m[1]}).`);
        }
      }
    }
  }

  // 4. Gambar wajib punya alt yang tidak kosong (<img /> dan <Image />).
  for (const m of text.matchAll(/<(?:img|Image)\b[\s\S]*?\/>/g)) {
    const tag = m[0];
    const hasAlt = /\balt=/.test(tag) || /\{\s*\.\.\./.test(tag);
    const emptyAlt = /\balt=(?:""|''|\{\s*(?:""|''|``)\s*\})/.test(tag);
    if (!hasAlt || emptyAlt) add(file, lineOf(text, m.index), 'Gambar tanpa alt atau alt kosong.');
  }
}

if (problems.length > 0) {
  console.error(`\nDitemukan ${problems.length} pelanggaran aturan proyek:\n`);
  for (const p of problems) console.error(`  ${p.file}:${p.line}  ${p.message}`);
  console.error('\nPerbaiki lalu jalankan ulang.');
  process.exit(1);
}

console.log(`OK: ${files.length} file diperiksa, tidak ada pelanggaran.`);
