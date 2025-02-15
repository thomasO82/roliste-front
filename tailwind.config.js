
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/App.{js,jsx,ts,tsx}",
    "./src/index.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main" : "#B09F04",
      }
    },
  },
  plugins: [],
}

