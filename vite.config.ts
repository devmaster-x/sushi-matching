import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  base: '/',
})