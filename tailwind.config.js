/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#23A6F0',  // Özel renk
      secondary: '#23A6F0',  // Hover rengi veya ikinci renk
      textColorWhite: '#ffffff',
      dotColorBlue: '#23A6F0',
      dotColorGreen: '#23856D',
      dotColorOrange: '#E77C40',
      dotColorBlack: '#252B42',
      // Diğer renkler de burada tanımlanabilir
    },
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.btn-primary': {
        backgroundColor: '#23A6F0',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        fontWeight: '700',
        transition: 'background-color 0.3s ease',
        color: '#ffffff',
        height: '52px',
        width: '160px',
        '&:hover': {
          backgroundColor: '#1c8ac5',
        },

      },
    });
  },],
}

