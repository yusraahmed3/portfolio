const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },

      fontFamily: {
        sacramento: ["Sacramento"],
        radioCanada: ["RadioCanada"],
        montserrat: ["Montserrat"],
      },
      colors: {
        gold: "#CFB53B",
        secBg: "#E0AA6E",
        terBg: "#e0afa0",
        mainBg: "#201E21",
        "facebook-blue": "#4267B2",
        "twitter-blue": "#1DA1F2",
        "instagram-blue": "#515BD4",
        "insta-pink": "#DD2A7B",
        "insta-purple": "##8134AF",
        github: "#666666",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
    screens: {
      'xs': '390px',
      ...defaultTheme.screens,
    },
  
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
