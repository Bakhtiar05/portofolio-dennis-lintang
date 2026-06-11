import { defineConfig } from 'vite';

export default defineConfig({
  //base: '/portofolio-dennis-lintang/',//
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
