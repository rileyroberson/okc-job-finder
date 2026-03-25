/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        okc: {
          blue: '#003087',
          red: '#C8102E',
          gold: '#F5A623',
        },
      },
    },
  },
  plugins: [],
}
