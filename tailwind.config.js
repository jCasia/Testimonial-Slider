/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorDarkBlue: 'hsl(240, 38%, 20%)',
        colorGrayBlue: 'hsl(240, 18%, 77%)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
    screens: {
      tabletsm: '500px',
      tabletmd: '565px',
      tabletlg: '720px',
      laptop: '1024px',
      laptopmd: '1440px',
    },
  },
  plugins: [],
};
