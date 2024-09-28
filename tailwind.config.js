/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],  // Agrega Helvetica aquí
      },
    },
  },
  plugins: [],
}

