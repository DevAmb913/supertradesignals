import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// No direct imports for tailwindcss/autoprefixer needed here when postcss.config.js is used

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'postcss' key is now automatically picked up from postcss.config.js
  // So, no need for the 'css' object here if postcss.config.js is present.
  // Keeping it simple as postcss.config.js handles the plugins directly.
})