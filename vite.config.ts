import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
console.log(process.env);

export default defineConfig({
  base: '/twoYearsWithVale/',
  plugins: [react()],
})
