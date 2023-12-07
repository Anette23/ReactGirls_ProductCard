/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headings: ['Rosario', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text: "hsl(246, 36%, 95%)",
        background: "rgb(0,12,23)",
        primary: "#90043A",
        secondary: "hsl(212, 100%, 26%)",
      },
    },
  },
  plugins: [],
}
