/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(22, 119, 255)",
        primary2: "rgb(22, 119, 255, 0.2)",

        dark1: "rgb(18, 18, 18)", // dark bg
        dark2: "rgb(30, 30, 30)", // dark bg

        dark3: "rgba(140, 140, 140, 0.9) ",
        dark4: "rgba(255, 255, 255, 0.87)", // dark text
       

        lite1: "rgb(250, 250, 251)",
        lite2: "rgb(245, 245, 245)", // lite comp bg
        lite3: "rgb(217, 217, 217)", // lite comp bg hover
        lite4: "rgb(89, 89, 89)", // hover bg comp
        lite5:"rgba(255, 255, 255, 0.05)" // hover bg comp navlink

      }
    },
  },
  plugins: [],
}