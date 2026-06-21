import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
