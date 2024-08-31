/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        violetModerate: "	#7541c8",
        grayischBlue: "#48556a",
        blackischBlue: "#19212e",
      },
    },
  },
  plugins: [],
};
