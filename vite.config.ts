import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    compression({
      // Opciones del plugin
      verbose: true, // Muestra mensajes en la consola
      disable: false, // Deshabilita si no quieres usar la compresión
      threshold: 10240, // Archivos menores a 10KB no se comprimen
      algorithm: 'gzip', // Algoritmo de compresión
      ext: '.gz', // Extensión de los archivos comprimidos
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
