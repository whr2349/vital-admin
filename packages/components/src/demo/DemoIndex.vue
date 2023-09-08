<template>
  <BaseLayout
    sidebarWidth="200px"
    @onSidebarCollapseChange="onSidebarCollapseHandler"
    :showSidebarCollapseButton="true"
    ref="layoutRef"
  >
    <template #logo>
      <SystemLogo ref="logoRef">
        <template #logoImg>
          <logoSvg class="h-5 justify-center"></logoSvg>
        </template>
        <div class="text-dark text-lg">viatl-admin</div>
      </SystemLogo>
    </template>
    <template #sidebar>
      <div v-for="key in 100" :key="key">sidebar</div>
    </template>
    <template #head>head</template>
    <template #main
      ><button @click="btnClickHandler">api调用侧边栏展开和收起</button>
      <div v-for="key in 100" :key="key">sidebar</div></template
    >
    <template #foot>foot</template>
  </BaseLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import BaseLayout from '../components/layout/BaseLayout.vue'
import SystemLogo from '../components/system-logo/SystemLogo.vue'
import logoSvg from './logo.svg'
defineOptions({
  name: 'DemoIndex'
})
const onSidebarCollapseHandler = (collapse: boolean) => {
  logoRef.value?.showTitleChange(!collapse)
}
const layoutRef: Ref<InstanceType<typeof BaseLayout> | null> = ref(null)
const logoRef: Ref<InstanceType<typeof SystemLogo> | null> = ref(null)
// 定义一个变量sideLock，初始值为false
let sideLock = false
// 定义一个函数btnClickHandler
const btnClickHandler = () => {
  // 将sideLock的值设置为取反
  sideLock = !sideLock
  // 将sideLock的值设置为layoutRef的值的sidebarCollapseHandler函数的返回值
  layoutRef.value?.sidebarCollapseHandler(sideLock)
  logoRef.value?.showTitleChange(!sideLock)
}
</script>
<style scoped></style>
