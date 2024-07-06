/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ['inter'],
        "circularSTD" : ['Circular STD']
      },
      colors : {
        "ungu" : '#5D50C6',
        "pink" : '#F85E9F',
        "orange" : '#FF5722',
        "abu" : '#222831'
      }
    },
  },
  plugins: [],
}

