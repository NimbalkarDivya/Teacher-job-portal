/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#1E40AF',
        'gray-light': '#F3F4F6',
        'gray-dark': '#374151',
      },
    },
  },
  plugins: [],
}