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
        600: "#16a34a",
        300:"#86efac"
      },
      lightSlate:"#ccd6f6",
      Slate:"#8892b0",
      Darknavy:"#112240",
      Slate:"#a8b2d1"
    },
    clipPath: {
      mypolygon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  },
  },
  plugins: [require("daisyui"),
  require('tailwind-clip-path'),
],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}
