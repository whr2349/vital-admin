<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 14:29:11
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-05 09:49:27
 * @FilePath: \vital-admin\packages\components\src\components\layout\BaseLayout.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="h-full bg-slate-500 flex">
    <div class="bg-slate-400 flex flex-col relative" :style="sidebarStyle">
      <div class="bg-slate-300" :style="headStyle" v-if="slots['logo']">
        <slot name="logo"></slot>
      </div>
      <div class="bg-slate-200 flex-1" v-if="slots['sidebar']">
        <slot name="sidebar"></slot>
      </div>
      <Icon class="absolute right-0 inset-y-0 my-auto" size="20" color="#8b949e">
        <LeftCircleOutlined />
      </Icon>
    </div>
    <div class="flex-1 bg-slate-400 flex flex-col">
      <div class="bg-slate-200" :style="headStyle" v-if="slots['head']">
        <slot name="head"></slot>
      </div>
      <div class="bg-slate-100 flex-1" v-if="slots['main']"><slot name="main"></slot></div>
      <div class="bg-slate-600" :style="footStyle" v-if="slots['foot']">
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { LeftCircleOutlined } from '@vicons/antd'
import { Icon } from '@vicons/utils'
// 组件初始化，设置默认的logo和head为同样的高度60px，foot高度40px，sidebar宽度200px
// 侧边栏可收起，设置收起时的宽度
const props = defineProps({
  // 侧边栏宽度
  sidebarWidth: {
    type: String,
    default: '200px'
  },
  // 收起宽度
  sidebarCollapseWidth: {
    type: String,
    default: '60px'
  },
  // logo和head的高度
  headHeight: {
    type: String,
    default: '60px'
  },
  // foot的高度
  footHeight: {
    type: String,
    default: '40px'
  }
})
// 获取 setupContext.slots
const slots = useSlots()

const sidebarStyle = computed(() => {
  return {
    width: props.sidebarWidth
  }
})
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
</script>

<style scoped></style>
