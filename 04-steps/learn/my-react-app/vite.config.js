import react          from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vite.dev/config/
export default defineConfig( {
    plugins: [react()],
    server : {
        host : true,
        open : true,
        port : 3000,
        proxy: {
            '/api': {
                target      : 'http://localhost:3000',
                changeOrigin: true,
                secure      : false,
            },
        },
    },
} )
