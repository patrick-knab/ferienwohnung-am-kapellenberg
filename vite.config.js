import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ferienwohnung-am-kapellenberg/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tips: resolve(__dirname, 'tips.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        wiesensteig: resolve(__dirname, 'wiesensteig.html'),
        schwarzwaldsteig: resolve(__dirname, 'schwarzwaldsteig.html'),
        himmelssteig: resolve(__dirname, 'himmelssteig.html'),
        teufelskanzelsteig: resolve(__dirname, 'teufelskanzelsteig.html'),
        sinfoniesteig: resolve(__dirname, 'sinfoniesteig.html'),
      }
    }
  }
})
