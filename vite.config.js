import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Keep every public page in the GitHub Pages production build.
export default defineConfig({
  base: '/ferienwohnung-am-kapellenberg/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        tips: resolve(import.meta.dirname, 'tips.html'),
        datenschutz: resolve(import.meta.dirname, 'datenschutz.html'),
        impressum: resolve(import.meta.dirname, 'impressum.html'),
        schwarzwaldsteig: resolve(import.meta.dirname, 'schwarzwaldsteig.html'),
        wiesensteig: resolve(import.meta.dirname, 'wiesensteig.html'),
        himmelssteig: resolve(import.meta.dirname, 'himmelssteig.html'),
        sinfoniesteig: resolve(import.meta.dirname, 'sinfoniesteig.html'),
        teufelskanzelsteig: resolve(import.meta.dirname, 'teufelskanzelsteig.html')
      }
    }
  }
});
