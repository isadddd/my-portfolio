// Token desain proyek. Satu-satunya tempat nilai warna dan ukuran boleh ditulis mentah.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: '#E11D2E',
      ink: '#0A0A0A',
      sand: '#EBE9E3',
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: { page: '50px' },
    },
  },
  plugins: [],
};