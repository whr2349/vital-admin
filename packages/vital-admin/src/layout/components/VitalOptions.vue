<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-24 16:06:14
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-01 11:07:35
 * @FilePath: \vital-admin\packages\vital-admin\src\layout\components\VitalOptions.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <n-drawer v-model:show="active" :width="350" :placement="placement">
      <n-drawer-content closable title="主题配置">
        <n-form
          ref="formRef"
          :model="model"
          label-placement="left"
          require-mark-placement="right-hanging"
          label-align="left"
          class="vital-options"
        >
          <n-form-item label="暗黑" path="darkPatterns">
            <n-switch v-model:value="model.darkPatterns" />
          </n-form-item>
        </n-form>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { DrawerPlacement } from 'naive-ui'
import { useThemeStore } from '@/stores'

const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const deActivate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const changeActivate = () => {
  active.value = !active.value
}
const model: Ref = ref({
  darkPatterns: false
})
watchEffect(() => {
  // 更新主题
  useThemeStore().changeDarkPatterns(model.value.darkPatterns)
})
defineExpose({
  activate,
  deActivate,
  changeActivate
})
</script>

<style scoped>
:deep(.vital-options .n-form-item .n-form-item-blank) {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;
  width: 100%;
}
</style>
