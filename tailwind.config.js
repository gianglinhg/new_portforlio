/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      height: {
        custom: '700px',
      },
      padding: {
        "40-c": "40rem",
      },
      colors: {
      'blue-ff': '#0050ff',
      'yellow-ce': '#e6dace',
    },
    },
  },
  plugins: [],
}