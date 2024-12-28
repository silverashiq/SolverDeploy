import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://solversilver.com', // Your production backend address
        changeOrigin: true,
        secure: true, // Use true if your production backend is HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite path if necessary
      },
    },
  },
})
