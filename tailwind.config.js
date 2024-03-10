/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '468px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'text': 'var(--text)',
 'background': 'var(--background)',
 'primary': 'var(--primary)',
 'secondary': 'var(--secondary)',
 'accent': 'var(--accent)',
      },
      fontFamily: {
        secondary: ["Manrope", "sans-serif"],
        primary: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}