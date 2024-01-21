import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    target: 'es2015'
  },
  server: {
    port: 5173
  },
  preview: {
    port: 4173
  }
});
