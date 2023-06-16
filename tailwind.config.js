/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Manrope", "serif"],
    },
    extend: {
      screens:{
        'md':{'min':'400px'},
        'lg':{'min':'760px'}
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
