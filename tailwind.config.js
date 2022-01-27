module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5c7aea',
        'light-blue': '#EDF1FC',
        'dark': '#222222',
        'light-dark': '#3B3B3B',
        'dark-gray': '#8F8F8F',
        'normal-gray':'#9F9F9F',
        'middle-gray': '#787878',
        'light-gray': '#EDF1FC',
        'mid-orange': '#FF9737',  
      },
      leading: {
        'lg': '72.8px',
        '5.1': '21px',
      },
      height:{
        '98':'28rem',
        '99': '30rem',
        '100':'32rem',
        '102':'37rem',
      },
      width:{
        '98':'42rem',
      },
      borderRadius:{
        '4xl':'2.5rem'
      },
      inset:{
        '98':'26rem'
      },
    },
    
  },
  plugins: [],
};
