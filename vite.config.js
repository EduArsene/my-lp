import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-lp/', // usa el nombre exacto de tu repo

  plugins: [react()],
})
