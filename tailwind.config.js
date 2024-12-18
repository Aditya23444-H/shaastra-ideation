/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        p5: "#501957",
        p6: "#672391",
        p7a1: "#7a1775",
        p7a2: "#7a2c91",
        p8: "#8d4da1",
        p9: "#9701d0",
      },
      boxShadow:{
        'right': '10px 0px 15px -3px rgba(0, 0, 0, 0.1)', // Only right side
      },
      // keyframes: {
      //   typing: {
      //     'from': { width: '0' },
      //     'to': { width: '100%' },
      //   },
      //   blink: {
      //     'from, to': { 'border-color': 'transparent' },
      //     '50%': { 'border-color': 'black' },
      //   },
      // },
      // animation: {
      //   typing: 'typing 3.5s steps(40, end) forwards', // Typing effect
      //   blink: 'blink 0.75s step-end infinite', // Optional caret blink
      // },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animate-pause': {
          'animation-play-state': 'paused', // Pause utility
        },
      });
    },
  ],
}


