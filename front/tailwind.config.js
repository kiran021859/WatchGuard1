/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boring-grey': '#F1F1F1',
      },
      gridTemplateColumns: {
        'page':'20% 80%',
        'nav':'2.5% 97.5%',
        'post':'15% 85% ', 
        'comment':'90% 10%',
      },
    },
  },
  plugins: [],
}