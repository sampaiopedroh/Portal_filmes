/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        2: "2",
        3: "3",
      },
      container: {
        center: true,
        padding: "1rem", 
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};