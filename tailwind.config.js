/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030007',
        "small-text": '#08040D',
        primary: '#884FFE',
        "primary-dark": '#130B1D',
        gray: '#BFBFBF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Sora', 'sans-serif']
      },
      container: {
        padding: '1rem',
        screens: {
          xl: '1200px',
          '2xl': '1200px',
        }
      }
    },
  },
  plugins: [],
}
