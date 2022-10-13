defaultTheme = require('tailwindcss/defaultTheme');
fontFamily = defaultTheme.fontFamily;
fontFamily.sans = [
  'Tahoma',
  'system-ui'
];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: fontFamily
  },
  plugins: [],
}