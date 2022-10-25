/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "pry-color": "#2E3192",
        "sec-color": "#B6CAF2",
        "mid-color": "#F1F2F2",
        "semi-sec-color": "#ECF1FA",
      },

      
      fontFamily: {
        "larken": ["Larken DEMO"],
        "kyivType": ["KyivType Sans"],
     
      }, 

      screens: {
        400: { raw: "(min-width: 400px)" },
        320: { raw: "(min-width: 320px)" },
        350: { raw: "(min-width: 350px)" },
        380: { raw: "(min-width: 380px)" },
        450: { raw: "(min-width: 450px)" },
        500: { raw: "(min-width: 500px)" },
        560: { raw: "(min-width: 560px)" },
        340: { raw: "(min-width: 340px)" },
        800: { raw: "(min-width: 800px)" },
        890: { raw: "(min-width: 890px)" },
        700: { raw: "(min-width: 700px)" },
        900: { raw: "(min-width: 900px)" },
        930: { raw: "(min-width: 930px)" },
        500: { raw: "(min-width: 500px)" },
        1000: { raw: "(min-width: 1000px)" },
        1130: { raw: "(min-width: 1130px)" },
        1200: { raw: "(min-width: 1200px)" },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
  ],
};
