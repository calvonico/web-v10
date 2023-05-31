/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  // darkMode: ['class', '[data-mode="dark"]'],
  // darkMode: 'class',
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var, sans-serif",],
      },
    },
  },
  plugins: [],
}