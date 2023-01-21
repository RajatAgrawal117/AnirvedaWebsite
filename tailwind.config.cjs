/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C9872B",
        secondary: {
          DEFAULT: "#B69575",
          opacity: "#161616",
          15: "rgba(182, 149, 117, 0.15)",
        },
        tertiary: "#0F0F0F",
        inputFieldColor: "rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        Yeseva: ["Yeseva One", "sans-serif"],
        Abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
}
