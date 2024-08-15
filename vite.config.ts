import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/blue-shamrock-farm/',
    base: '',
    plugins: [react()],
    // build: {
    //     minify: false,
    // },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});
