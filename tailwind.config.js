/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ['"Fjalla One"', 'sans-serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
      keyframes: {
        rotateX: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateX: 'rotateX 1s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}