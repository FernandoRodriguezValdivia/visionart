/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* 'custom-violet': '#712F8E', */
        'primario': '#712F8E',
        'primario-hover': '#602879',
        'secundario': '#205A60',
        'secundario-light': '#C8D4D5',
        'custom-gray-10': '#E8E8E8',
        'custom-gray-20': '#D9D9D9',
        'custom-gray-50': '#9E9E9E',
        'custom-gray-70': '#747474',
        'custom-gray-80': '#5C5C5C',
        'custom-gray-90': '#323232',
        'custom-black': '#080808',
        'custom-errores': '#A01E1D'
        
      },
      fontSize: {
        'xxs': '0.6875rem', // 11px
      },
      borderWidth: {
        '4': '4px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        bitter: ['Bitter', 'serif'],
       
        
      },
    },
  },
  plugins: [],
};
