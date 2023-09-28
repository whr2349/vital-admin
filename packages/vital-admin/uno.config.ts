/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-22 09:33:10
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-04 10:40:52
 * @LastEditTime: 2023-09-01 14:49:21
 * @FilePath: \vital-admin\packages\vital-admin\uno.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from 'unocss'
// import { presetWind } from 'unocss'
export default defineConfig({
  // ...UnoCSS选项
  // presets: [presetWind()]
  theme: {
    // ...
    colors: {
      default: {
        border: 'rgba(var(--n-border-color),0.09)'
      }
    }
  }
})
