import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor_three_core': ['three'],
                    'vendor_drei': ['@react-three/drei'],
                    'vendor_fiber': ['@react-three/fiber'],
                    'vendor_ui': ['framer-motion', 'lucide-react', 'react-router-dom'],
                }
            }
        },
        chunkSizeWarningLimit: 1200,
    }
})
