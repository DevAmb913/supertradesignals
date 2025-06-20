    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial!
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'], // Set Montserrat as default sans-serif font
          },
          keyframes: {
            blob: {
              '0%': { transform: 'translate(0px, 0px) scale(1)' },
              '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
              '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
              '100%': { transform: 'translate(0px, 0px) scale(1)' },
            }
          },
          animation: {
            blob: 'blob 7s infinite cubic-bezier(0.6, 0.2, 0.4, 1.0)',
          }
        },
      },
      plugins: [],
    }