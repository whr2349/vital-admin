<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 14:29:11
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-06 10:50:59
 * @FilePath: \components\src\components\layout\BaseLayout.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="h-full flex">
    <div class="flex flex-col relative transition-all duration-300" :style="sidebarStyle">
      <div
        class="border-solid border-0 border-gray-700/9"
        :class="{
          'border-r': showLogoRightBorder,
          'border-b': showLogoBottomBorder
        }"
        :style="headStyle"
        v-if="slots['logo']"
      >
        <slot name="logo"></slot>
      </div>
      <div
        class="flex-1 border-solid border-0 border-gray-700/9"
        v-if="slots['sidebar']"
        :class="{ 'border-r': showSidebarRightBorder }"
      >
        <slot name="sidebar"></slot>
      </div>
      <Icon
        class="absolute cursor-pointer right-0 inset-y-0 my-auto transition-all duration-300 translate-x-1/2 rounded-full bg-white"
        :class="{ 'rotate-180': sidebarCollapseLock }"
        size="20"
        color="#8b949e"
        @click="sidebarCollapseHandler(!sidebarCollapseLock)"
      >
        <LeftCircleTwotone />
      </Icon>
    </div>
    <div class="flex-1 flex flex-col">
      <div
        class="border-solid border-0 border-gray-700/9"
        :class="{
          'border-b border-r-gray-700/9': showheadBottomBorder
        }"
        :style="headStyle"
        v-if="slots['head']"
      >
        <slot name="head"></slot>
      </div>
      <div class="flex-1" v-if="slots['main']"><slot name="main"></slot></div>
      <div
        class="border-solid border-0 border-gray-700/9"
        :class="{
          'border-t': showFootTopBorder
        }"
        :style="footStyle"
        v-if="slots['foot']"
      >
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { LeftCircleTwotone } from '@vicons/antd'
import { Icon } from '@vicons/utils'

const emit = defineEmits(['onSidebarCollapseChange'])
// 组件初始化，设置默认的logo和head为同样的高度60px，foot高度40px，sidebar宽度200px
// 侧边栏可收起，设置收起时的宽度
const props = withDefaults(defineProps<BaseLayout.Props>(), {
  // 侧边栏宽度
  sidebarWidth: '200px',
  // 收起宽度
  sidebarCollapseWidth: '60px',
  // logo和head的高度
  headHeight: '60px',
  // foot的高度
  footHeight: '40px',
  showSidebarRightBorder: true,
  showLogoBottomBorder: true,
  showLogoRightBorder: true,
  showheadBottomBorder: true,
  showFootTopBorder: true
})
// 获取 setupContext.slots
const slots = useSlots()

const sidebarStyle = ref({ width: props.sidebarWidth })
const headStyle = computed(() => {
  return {
    height: props.headHeight
  }
})
const footStyle = computed(() => {
  return {
    height: props.footHeight
  }
})
// 侧边栏收起按钮
let sidebarCollapseLock = ref(false)
const sidebarCollapseHandler = (isCollapse: boolean) => {
  sidebarCollapseLock.value = isCollapse
  if (sidebarCollapseLock.value) {
    sidebarStyle.value.width = props.sidebarCollapseWidth
  } else {
    sidebarStyle.value.width = props.sidebarWidth
  }
  emit('onSidebarCollapseChange', isCollapse)
}
</script>

<style scoped></style>
