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
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.25)' },
        },
        kenburnsTop: {
          '0%': {
            transform: 'scale(1) translateY(0)',
            'transform-origin': '50% 16%'
          },
          '100%': {
            transform: 'scale(1.25) translateY(-15px)',
            'transform-origin': 'top'
          },
        },
      },
      animation: {
        'spin-once': 'rotate 1s linear',
        'zoom-in': 'zoom 10s linear infinite',
        'kenburns': 'kenburnsTop 10s ease-out both',
        'underline': 'underline 0.5s ease-out forwards',
 
      },
      transitionProperty: {
        'color': 'color',
        'text-decoration': 'text-decoration',
        'width': 'width',
      },
      colors: {
        'custom-blue': '#00A7FF',
      },
    },
  },
  plugins: [],
};