import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '',
  server: {
    port: 9000,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/SNR.js'),
      name: 'SNR',
      fileName: 'SNR'
    }
  }
});
