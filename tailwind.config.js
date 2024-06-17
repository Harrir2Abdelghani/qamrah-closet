/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"],
      play: ["Playwrite", "cursive"],
    },
    extend: {
      colors: {
        primary : "#d1634d",
        dark : "#111111",
            },
      container: {
        center: true,
        padding : {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

