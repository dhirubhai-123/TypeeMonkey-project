import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'media', // Ensures media files are placed in the 'media' directory
  },
  // Optional: Configure the public directory if you use it
  publicDir: 'public'
});
