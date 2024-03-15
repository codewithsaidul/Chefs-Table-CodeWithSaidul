/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#150B2B',
        'title-color': '#150B2B',
        'primary-color': '#0BE58A',
      },
},
  },
  plugins: [require("daisyui")],
}

