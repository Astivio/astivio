/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette Astivio — bleu ardoise profond : crédibilité, expertise, santé
        brand: {
          50:  '#EEF2F9',
          100: '#C5D3E8',
          200: '#9BB5D1',
          300: '#7297BA',
          400: '#4879A3',
          500: '#2B5299',
          600: '#1E3A5F', // Couleur primaire principale
          700: '#162C4A',
          800: '#0F1F35',
          900: '#071220',
        },
        // emerald-500 (#10B981) est l'accent — déjà dans Tailwind, utilisé via emerald-*
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
