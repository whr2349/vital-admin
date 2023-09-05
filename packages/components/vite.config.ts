/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 17:04:20
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-04 14:38:16
 * @FilePath: \vital-admin\packages\components\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
