import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ TailwindCSS doesn’t need to be manually imported
export default defineConfig({
  plugins: [react()],
})
