/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'gentium-book-plus': ['Gentium Book Plus', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'body-light': '#f0f0f0',
        'button-light': '#c2c2c2'
      }
    },
  },
  plugins: [],
}
