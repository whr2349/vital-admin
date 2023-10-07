<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 16:57:42
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-01 14:37:52
 * @FilePath: \vital-admin\packages\vital-admin\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-config-provider :theme="theme" inline-theme-disabled>
    123
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { useThemeStore } from '@/stores'
const theme = ref<GlobalTheme | null>(null)
console.log(darkTheme)

useThemeStore().$subscribe((mutation, state) => {
  // theme.value = state.theme
  console.log(mutation)
  console.log(state)
  if(state.darkPatterns){
    theme.value = darkTheme
  }else{
    theme.value = null
  }
})

// 用vue3和naive-ui写一段主页代码题切换
</script>
