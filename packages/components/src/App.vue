<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 17:04:20
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-04 16:54:07
 * @FilePath: \vital-admin\packages\components\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import BaseLayout from './components/layout/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #logo>logo</template>
    <template #sidebar>sidebar</template>
    <template #head>head</template>
    <template #main>main</template>
    <template #foot>foot</template>
  </BaseLayout>
</template>

<style scoped></style>
