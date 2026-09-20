// vite.config.mjs
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  resolve: {
    alias: {
      // Alias @ → src (equivalente di quello fornito da vue-cli)
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Escludi gli elementi personalizzati swiper-container e swiper-slide dalla compilazione di Vue
          isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide',
        },
      },
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: true, // Assicura che l'API delle opzioni di Vue sia disponibile
    __VUE_PROD_DEVTOOLS__: false, // Disabilita gli strumenti di sviluppo Vue in produzione
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // Disabilita il controllo del mismatch di hydration
  },
  build: {
    outDir: 'dist',
  },
});
