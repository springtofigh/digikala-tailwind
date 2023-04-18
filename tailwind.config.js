module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Shabnam"],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ]
  }