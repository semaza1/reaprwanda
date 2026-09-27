/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asyv-green': '#47805f',
        'asyv-orange': '#f39c45',
        'asyv-bg': '#eef7ef',
        'asyv-footer': '#363636',
      },
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
        bebas: ['bebas-neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
