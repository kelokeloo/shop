import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// element 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 设置代理
  server: {
    proxy: {
      // 个人理解，如果使用http://localhost:3000/api, 就会代理去访问，http://localhost:3001/api
      '/api':{
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/api/, '/api')
      }
    }
  }
})
