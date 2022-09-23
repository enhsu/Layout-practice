/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        header_h: '5rem',
        x_w: '1.5rem'
      },
      inset: {
        header_h: '5rem'
      },
      colors: {
        netflix_red: {
          DEFAULT: "#d22531"
        }
      }
    },
  },
  plugins: [],
}
