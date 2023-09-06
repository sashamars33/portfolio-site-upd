/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Manrope', 'Helvetica','sans-serif'],
      serif: ['Barlow', 'Helvetica','sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#297dbb",
        
"secondary": "#5055b2",
        
"accent": "#ff4a31",
        
"neutral": "#060508",
        
"base-100": "#fff",
        
"info": "#ff7171",
        
"success": "#365314",
        
"warning": "#ef4444",
        
"error": "#e01a2e",
        },
      },
    ],
  }
}
