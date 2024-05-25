/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "880px" },
      sm: { max: "760px" },
      xsm: { max: "630px" },
      xxsm: { max: "465px" },

      swResizeLg: { max: "660px" },
      swResizeMd: { max: "490px" },
      swResizeSm: { max: "448px" },
      currenciesSm: { min: "760px" },

      textSm: { max: "540px" },
    },
    colors: {
      mainGrey: "#333230",
      midGrey: "#767676",
      midGrey2: "#686868",
      midGrey3: "#585858",
      darkGrey: "#262626",
      sand: "#D9D4BE",
      lightSand: "#FEFAE8",
      mainOrange: "#ffbf00",
      notActive: "#585C58",
      brown: "#3B3132",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
