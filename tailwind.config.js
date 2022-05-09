module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms')
  ],
}
