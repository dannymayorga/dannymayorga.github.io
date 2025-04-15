import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Github Pages dannymayorga.com/
export default defineConfig({
  base: '/',
  plugins: [react()],
})