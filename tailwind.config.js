/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'Helvetica','sans-serif']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"]
  }
}
