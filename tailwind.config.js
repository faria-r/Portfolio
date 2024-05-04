/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      navy:"#0a192f",
      green:{
        300:"#5eead4",
        600: "#5eead4",
        300:"#5eead4"
      },
      white:"#FFFFFF",
      black:'#020617',
      teal:"#5eead4",
      lightSlate:"#ccd6f6",
      Slate:"#8892b0",
      Darknavy:"#112240",
      Slate:"#a8b2d1"
    },
    clipPath: {
      mypolygon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
     mypoly: "polygon(51% 99%, 100% 59%, 100% 100%, 0 99%, 0 59%)"
  },
  },
  plugins: [require("daisyui"),
  require('tailwind-clip-path'),
],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}
