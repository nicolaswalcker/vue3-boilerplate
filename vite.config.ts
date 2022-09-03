import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/sass/normalize';
          @import '@/assets/sass/variables';
          @import '@/assets/sass/colors';
          @import '@/assets/sass/breakpoints';
          @import '@/assets/sass/global';
          @import '@/assets/sass/keyframes';
          @import '@/assets/sass/mixins';
          @import '@/assets/sass/utils';
        `,
      },
    },
  },
});
