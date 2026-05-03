import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/blue-shamrock-farm/',
    base: '',
    plugins: [react()],
    server: {
        proxy: {
            '/drupal-jsonapi': {
                target: 'https://blueshamrock.farm',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/drupal-jsonapi/, '/drupal/jsonapi'),
            },
            '/drupal': {
                target: 'https://blueshamrock.farm',
                changeOrigin: true,
            },
        },
    },
    // build: {
    //     minify: false,
    // },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});
