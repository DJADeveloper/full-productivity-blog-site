/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',      // Deep Charcoal
        secondary: '#F7F7F7',    // Light Stone
        accent: '#4C82F7',       // Electric Blue
        highlight: '#D9D7F1',    // Soft Lavender
        cta: '#4EF1A0',         // Mint Green
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 