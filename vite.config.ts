import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      './runtimeConfig': './runtimeConfig.browser',
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        json(),
      ],
    },
  },
})
