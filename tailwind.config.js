/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat, system-ui"],
        jaro: ["Jaro, sans-serif"]
      },
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        maintext: "rgb(var(--maintext))",
        subtext: "rgb(var(--subtext))"
      }
    },
  },
  plugins: [],
}