// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "608px",
      lg: "804px",
      xl: "1280px",
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
