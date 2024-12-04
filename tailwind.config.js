/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/assets/bg1.png')",
        'bg2': "url('/assets/bg2.png')",
      },
      colors: {
        black: "#191919",
        color1: "#00CCB8",
        color2: "#FFD95A",
        color3: "#17C964",
        color4: "#4F4F4F",
        color5: "#C2D9FF",
        color6: "#CE0000"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        "05": "0.5px",
      }
    },
  },
  plugins: [],
}

