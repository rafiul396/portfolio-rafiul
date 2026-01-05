/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "surface-dark": "#1e293b",
        "card-dark": "#1e293b",
        "border-dark": "#232f48",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: { 
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px" 
      },
    },
  },
  plugins: [],
}