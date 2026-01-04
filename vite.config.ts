import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import { PreloadImage } from './src/utils/preloadImage'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    UnoCSS(),
    PreloadImage({
      dir: 'src/assets/images/*.{jpg,png,svg,webp}',
      attrs: {
        rel: 'prefetch'
      }
    }), // 预加载图片
  ],
  server: {
    port: 814,
  },
  css: {
    preprocessorOptions: {
      sass: {
        // 忽略特定的 deprecation 警告
        silenceDeprecations: ['if-function']
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
