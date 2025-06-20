import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Corrected import
import autoprefixer from 'autoprefixer' // Corrected import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Use imported module directly
        autoprefixer, // Use imported module directly
      ],
    },
  },
})