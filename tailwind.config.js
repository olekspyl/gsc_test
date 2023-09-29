/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#EE991A',
        black: '#000000',
        blackText: '#060605',
        darkPurple: '#1B191D',
        grey: '#333333',
        greyLight: '#8C8983',
        light: '#F2E8D9',
        white: '#FFFFFF',
      },
      fontFamily: {
        oswald: ['Oswald'],
        rubik: ['Rubik'],
        inter: ['Inter'],
      },
      fontSize: {
        tablet: ['40px', '48px'],
        baseHeight: ['16px', '26px'],
        copied: ['12px', '18px'],
        footer: ['14px', '20px'],
        rights: ['15px', '20px'],
        footerEnd: ['13px', '18px'],
        footerTab: ['16px', '20px'],
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      backgroundImage: {
        header: 'linear-gradient(180deg, #181512 -21.24%, rgba(24, 21, 18, 0.00) 93.16%)',
      },
    },
  },
  plugins: [],
};
