module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blue': 'hsl(233, 26%, 24%)',
      'green': 'hsl(136, 65%, 51%)',
      'cyan': 'hsl(192, 70%, 51%)',
      'gray': 'hsl(233, 8%, 62%)',
      'lightgray': 'hsl(220, 16%, 96%)',
      'offwhite': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {
      animation: {
        drop: 'drop 500ms ease-in-out',
        lower: 'lower 1500ms ease-out',
        fadein: 'fadein 2000ms ease-in-out',
      },
      keyframes: {

        drop: {
          '0%': {
            transform: 'translate3d(0, -50%, 0)',
            opacity: '0'
          },
          '100%': {
            transform: 'none',
            opacity: '1'
          },
        },

        lower: {
          '0%': {
            transform: 'translate3d(0, -10%, 0)',
            opacity: '0'
          },
          '100%': {
            transform: 'none',
            opacity: '1'
          },
        },

        fadein: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },

      }
    },
  },
  plugins: [],
}
