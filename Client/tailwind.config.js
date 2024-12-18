import postcss from "postcss";
import { plugin } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./main.jsx", "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
    },
  },
 
  plugins: [],
}