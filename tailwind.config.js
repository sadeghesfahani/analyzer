/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: {
            300: "#535456",
            400: "#3e3f42",
            500: "#292A2D",
            600: "#1F1F1F",
            700: "#0F0F0F",

          }

        }
    },
  },
  plugins: [],
}
