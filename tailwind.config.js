/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
