/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero': "url('/src/images/hero.jpg')",
        'bag':  "url('/src/images/bag.jpg')",
        'coat':  "url('/src/images/coat.jpg')",
        'jacket':  "url('/src/images/jacket.jpg')",
        'stand':  "url('/src/images/stand.jpg')",
        'sit':  "url('/src/images/sit.jpg')",
        'men':  "url('/src/images/men.png')",
        'women':  "url('/src/images/women.png')",
        'jewelry':  "url('/src/images/jewelry.png')",
        'store':  "url('/src/images/store.jpg')"
      }
    },
  },
  plugins: [],
}