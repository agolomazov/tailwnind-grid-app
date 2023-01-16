/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Codensed", "sans-serif"],
      },
    },
  },
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
