/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#14213D",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      screens: {
        xs: "450px",
      },

      keyframes: {
        starBlink: {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(0.7) rotate(0deg)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.4) rotate(20deg)",
          },
        },
      },

      animation: {
        "star-blink": "starBlink 1.5s infinite ease-in-out",
        "star-blink-fast": "starBlink 1s infinite ease-in-out",
        "star-blink-slow": "starBlink 2s infinite ease-in-out",
      },
    },
  },

  plugins: [],
};
