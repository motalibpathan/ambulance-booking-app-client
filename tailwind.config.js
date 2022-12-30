const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      red: "#f91944",
      white: "#ffffff",
      blue: colors.blue,
      gray: colors.gray,
      rose: colors.rose,
      black: "#000000",
      green: colors.green,
      redTwo: colors.red,
      yellow: colors.yellow,
    },
  },
  plugins: [],
};
