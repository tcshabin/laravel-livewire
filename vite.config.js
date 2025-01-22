import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '0.0.0.0',      // Ensures Vite listens on all network interfaces
        port: 5176,            // You can keep this or change if needed
        hmr: {
            host: 'localhost',  // Set this to 'localhost' to enable HMR
            port: 5176,         // Port for HMR should match Vite's port
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
