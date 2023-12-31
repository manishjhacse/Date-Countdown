/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'move-right':{
          from:{
            left:'0px',
            transform:'translateX(0%)'
          },
          to:{
            left:'50%',
            transform:'translateX(-50%)'
          }
        },
        'move-left':{
          from:{
            right:'0px',
            transform:'translateX(0%)'
          },
          to:{
            right:'50%',
            transform:'translateX(80px)'
          }
        },
        'drop-down':{
          from:{
            visibility:'visible'
          },
          to:{
            visibility:'hidden'
          }

        }

      },
      animation:{
        'move-right':'move-right 1.5s ease-in 1 forwards',
        'move-left':'move-left 1.5s ease-in 1 forwards',
        'drop-down':'drop-down 0.1s ease-in-out 1.4s 1 forwards',
      }

    },
  },
  plugins: [],
}