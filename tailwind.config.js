/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'WorkSans':'WorkSans'
      },
      colors:{
        'lightPink':"hsl(275, 100%, 97%)",
        'GrayishPurple':"hsl(292, 16%, 49%)",
        'DarkPurple':"hsl(292, 42%, 14%)"
      }
    },
  },
  plugins: [],
}