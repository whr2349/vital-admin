/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-25 13:54:06
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-01 10:52:04
 * @FilePath: \vital-admin\packages\vital-admin\src\stores\theme\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', () => {
  const darkPatterns = ref(false)
  function changeDarkPatterns(value: boolean) {
    console.log('stores.theme:', value)
    darkPatterns.value = value
    console.log(darkPatterns)
  }
  return { darkPatterns, changeDarkPatterns }
})
