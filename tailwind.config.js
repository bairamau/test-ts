/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#181616',
        'background-primary': 'rgb(246, 245, 238)',
        'accent-primary': 'rgb(123 218 211)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 32s infinite linear'
      }
    }
  },
  plugins: []
}
