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
      keyframes: {
        'lab-bubble': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
        'lab-liquid': {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'lab-bubble': 'lab-bubble 2.4s ease-in-out infinite',
        'lab-liquid': 'lab-liquid 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}