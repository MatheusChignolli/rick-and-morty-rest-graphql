/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    minWidth: {
      20: '80px',
    },
    extend: {
      colors: {
        graphql: '#e535ab',
        rest: '#2c3c5c',
      },
    },
  },
  plugins: [],
}
