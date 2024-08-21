/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "very-dark-blue": "#111729",
      "dark-blue": "#1D1B48",
      "blue": "#3662E3",
      "very-dark-gray": "#20293A",
      "dark-gray": "#364153",
      "gray": "#4A5567",
      "grayish-white": "#CDD5E0",
    },
    extend: {
      fontSize: {
        "large": "2.5rem",
        "title": "1.25rem",
        "text-b": "1rem",
        "text-s": "0.75rem"
      },
      backgroundImage: {
        'search-icon': "url('./src/assets/images/Search.svg')",
      }
    },
  },
  plugins: [],
}