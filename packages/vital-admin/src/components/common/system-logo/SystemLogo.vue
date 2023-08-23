<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-22 15:50:12
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-08-23 10:49:01
 * @FilePath: \vital-admin\packages\vital-admin\src\components\common\system-logo\SystemLogo.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="flex items-center justify-center h-12">
    <logoSvg class="h-5 justify-center"></logoSvg>
    <h2 class="ml-3" v-show="!props.showTitle">vital-amdin</h2>
    <!-- <img class="w-12 h-12" :src="logoSvg" /> -->
    <!-- <embed :src="logoSvg" type="image/svg+xml" /> -->
  </div>
</template>

<script setup lang="ts">
import logoSvg from '@/components/common/system-logo/logo.svg'
const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped></style>
