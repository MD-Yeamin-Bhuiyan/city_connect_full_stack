/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccbg: '#F9F8F6',
        ccsurface: '#EFE9E3',
        ccborder: '#D9CFC7',
        ccaccent: '#C9B59C',
        cctext: '#1a1a1a',
        ccprimary: '#2B4C59' // Added a deep teal for strong buttons/headers based on AI choice
      }
    },
  },
  plugins: [],
}