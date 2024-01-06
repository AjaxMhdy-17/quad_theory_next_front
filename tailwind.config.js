/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
     colors :{
      background__color__full : "#EEEFF0",
      background__color__white : "#fff",
      logo__color : "#221314",
      text__color__primary : "#11263C",
      text__color__secondary : "#536273",
      text__color__dimmedWhite : "#ECD3AE",
      background__color__primary : "#F69F30",
      background__color__secondary : "#F05F30",
      mobile__slider__background : "#FF8D54"
     },
     fontSize : {
      sm : "13px",
      base : "16px"
     },
     backgroundImage: {
      'slider_bg_image' : "url('/asset/slider_img.png')",
    }
    },
  },
  plugins: [],
}
