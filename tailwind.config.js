/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Futura', ...defaultTheme.fontFamily.sans]
      },
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
        marquee: 'marquee 32s infinite linear',
        'spin-slow': 'spin 15s linear infinite reverse'
      }
    }
  },
  plugins: []
}
