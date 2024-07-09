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
        "abu" : '#222831',
        "krim" : '#FACD49' 
      },
      dropShadow : {
        "sm-shadow" : [
          '0px 548px 219px rgba(0,0,0, 0.01)',
          '0px 308px 185px rgba(0,0,0, 0.04)',
          '0px 34px 75px rgba(0,0,0, 0.07)',
          '0px 0px 0px rgba(0,0,0, 0.07)'
        ]
      },
      backgroundImage : {
        "pp-client" : "url('./public/assets/img/testimonial-client-profile-photo.jpg')"
      }
    },
  },
  plugins: [],
}

