import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      'react-icons/lib': 'react-icons/lib/index.js'
    }
  },
  optimizeDeps: {
    include: [
      'react-icons/fa6', 'react-icons/fa', 'react-icons/md', 'react-icons/hi', 
      'react-icons/ai', 'react-icons/bs', 'react-icons/io', 'react-icons/ri', 
      'react-icons/fi', 'react-icons/gi', 'react-icons/go', 'react-icons/im', 
      'react-icons/tb', 'react-icons/ti', 'react-icons/vsc', 'react-icons/wi', 
      'react-icons/cg', 'react-icons/di', 'react-icons/fc', 'react-icons/gr', 
      'react-icons/hi2', 'react-icons/io5', 'react-icons/lu', 'react-icons/pi', 
      'react-icons/rx', 'react-icons/si', 'react-icons/sl', 'react-icons/tfi'
    ]
  },
  esbuild: {
    target: 'es2020'
  }
})
