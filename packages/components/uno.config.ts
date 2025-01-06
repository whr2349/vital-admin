/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 14:33:32
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-08 10:19:47
 * @FilePath: \components\uno.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  // ...UnoCSS选项
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
      },
    },
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
});
