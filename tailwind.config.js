/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--rubik)"],
      },
      height: {
        "screen-svh": ["100vh", "100svh"],
      },
      width: {
        "mobile-sport-game-viewport": "calc(100vw - 45px)",
      },
      colors: {
        primary: "#5162FF",
        "primary-hard": "#2A3DEE",
        "primary-dark": "#081057",
        dark: "#161b1d",
        "dark-lighter": "#747474",
        "dark-hard": "rgba(255, 255, 255, 0.05)",
        "solid-blue": "#5162FF",
      },
      animation: {
        "slide-up": "slide-up 350ms cubic-bezier(0.15, 1.15, 0.6, 1)",
      },
      boxShadow: {
        xxs: "0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 0px 0px #2A3DEE inset",
        xs: "0px 1px 0px 0px rgba(255, 255, 255, 0.10)",
        "xs-y":
          "0px 1px 0px 0px rgba(255, 255, 255, 0.07) inset, 0px -1px 0px 0px rgba(78, 78, 78, 0.25) inset",
        "xs-bottom": "0px -1px 0px 0px rgba(255, 255, 255, 0.10)",
        "2xl-bottom": "0px 6px 0px 0px rgba(255, 255, 255, 0.10)",
        "xs-right": "1px 0px 0px 0px rgba(255, 255, 255, 0.10)",
        "3xl":
          "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 0px 0px #2A3DEE inset",
        "4xl":
          "0px 3px 0px 0px rgba(78, 78, 78, 0.25), 0px 1px 0px 0px rgba(255, 255, 255, 0.07) inset",
        "5xl":
          "0px 1px 0px 0px rgba(255, 255, 255, 0.07) inset, 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset",
        "6xl":
          "0px 1.32337px 0px 0px rgba(255, 255, 255, 0.07) inset, 0px -3.9701px 0px 0px #232729 inset;",
      },
      borderRadius: {
        xl: "10px",
      },
      transitionDuration: {
        0.5: "0.5s",
      },
      letterSpacing: {
        sm: "-0.78px",
        xs: "-0.72px",
        6: "0.6px",
      },
      fontSize: {
        xxs: "13px",
        md: "14px",
        slg: "17px",
        10: "10px",
        11: "11px",
        15: "15px",
      },
      spacing: {
        18: "18px",
        50: "50px",
        54: "54px",
        88: "88px",
      },
      opacity: {
        3: "0.03",
        5: "0.05",
        7: "0.07",
        12: "0.12",
        16: "0.16",
      },
      margin: {
        medium: "7px",
      },
      padding: {
        medium: "7px",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
