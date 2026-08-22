import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Static build used by GitHub Pages. The normal Vinext/Sites build remains
// unchanged, so both hosts are generated from the same page and project data.
export default defineConfig({
  root: 'github-pages',
  base: '/',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
  build: {
    outDir: '../dist-pages',
    emptyOutDir: true,
  },
});
