// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: "class",
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
