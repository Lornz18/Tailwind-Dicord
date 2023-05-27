/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary: 'hsl(235.14,82.78%,59.02%)',
        grey: '#e8edf0'
      }
    },
  },
  plugins: [],
}

