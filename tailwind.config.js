module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      fontFamily: {
        body: ['Shabnam' , 'sans-serif'],
        display:['Shabnam' , 'sans-serif']
      },
      extend: {}
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ]
  }