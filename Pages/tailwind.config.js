/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your React components for Tailwind awareness
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'translate(-400px, -270px) rotate(0deg)' },
          '100%': { transform: 'translate(-400px, -270px) rotate(-180deg)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        'spin-once': 'rotate 1s linear',
        'zoom-in': 'zoom 10s linear infinite',
      },
      transitionProperty: {
        'color': 'color',
        'text-decoration': 'text-decoration',
      },
      colors: {
        'custom-blue': '#00A7FF',
      },
    },
  },
  plugins: [],
};