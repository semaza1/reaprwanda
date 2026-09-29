/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reap-green': '#30B028',
        'reap-dark-green': '#003400',
        'reap-yellow': '#F6B408',
        'reap-blue': '#0193D7',
        'reap-bg': '#FFFFFF',
        'reap-text': '#003400',
      },
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
        bebas: ['bebas-neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
