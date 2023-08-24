<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-24 10:24:34
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-08-24 16:55:19
 * @FilePath: \vital-admin\packages\vital-admin\src\layout\components\HeaderLayout.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="flex justify-between">
    <div>
      <n-button quaternary circle @click="changeActivate">
        <template #icon>
          <n-icon><Cog /></n-icon>
        </template>
      </n-button>
    </div>
    <VitalOptions ref="VitalOptionsRef"></VitalOptions>
  </div>
</template>

<script setup lang="ts">
import { Cog } from '@vicons/ionicons5'
import VitalOptions from '@/layout/components/VitalOptions.vue'
const VitalOptionsRef: Ref = ref(null)
const changeActivate = () => VitalOptionsRef.value.changeActivate()
</script>

<style scoped></style>
