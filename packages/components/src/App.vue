<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 17:04:20
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-07 09:19:34
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
const layoutRef: Ref = ref(null)
const btnClickHandler = () => {
  console.log(layoutRef)
}
</script>

<template>
  <BaseLayout
    sidebarWidth="250px"
    @onSidebarCollapseChange="onSidebarCollapseHandler"
    ref="layoutRef"
  >
    <template #logo>logo</template>
    <template #sidebar>sidebar</template>
    <template #head>head</template>
    <template #main><button @click="btnClickHandler">hhhh</button></template>
    <template #foot>foot</template>
  </BaseLayout>
</template>

<style scoped></style>
