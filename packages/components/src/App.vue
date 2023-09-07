<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 17:04:20
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-07 16:32:20
 * @FilePath: \vital-admin\packages\components\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import BaseLayout from './components/layout/BaseLayout.vue'
const onSidebarCollapseHandler = (collapse: boolean) => {
  console.log(collapse)
}
const layoutRef: Ref<InstanceType<typeof BaseLayout> | null> = ref(null)

// 定义一个变量sideLock，初始值为false
let sideLock = false
// 定义一个函数btnClickHandler
const btnClickHandler = () => {
  // 将sideLock的值设置为取反
  sideLock = !sideLock
  // 将sideLock的值设置为layoutRef的值的sidebarCollapseHandler函数的返回值
  layoutRef.value?.sidebarCollapseHandler(sideLock)
}
</script>

<template>
  <BaseLayout
    sidebarWidth="250px"
    @onSidebarCollapseChange="onSidebarCollapseHandler"
    :showSidebarCollapseButton="true"
    ref="layoutRef"
  >
    <template #logo>logo</template>
    <template #sidebar>
      <div v-for="key in 100" :key="key">sidebar</div>
    </template>
    <template #head>head</template>
    <template #main><button @click="btnClickHandler">api调用侧边栏展开和收起</button></template>
    <template #foot>foot</template>
  </BaseLayout>
</template>

<style scoped></style>
