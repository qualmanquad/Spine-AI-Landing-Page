/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          12: '#11181c', // Headline text & dark backgrounds
          11: '#717476', // Body text
          8: '#949596',  // Disabled text
          6: '#e4e5e6', // Borders & dividers
          3: '#f3f4f5', // Soft backgrounds & accents
          1: '#fdfdfd', // Container / Card backgrounds
        },
        accent: {
          purple: '#6e56cf',  // Slate Purple
          azure: '#007FFF',   // Brilliant Azure (standard azure, as provided values were incorrect)
          pink: '#e93d82',    // Cerise Pink
        },
        brand: {
          dark: '#11181c',    // Slate 12
          light: '#fdfdfd',   // Slate 1
          accent: '#6e56cf'   // Slate Purple
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
