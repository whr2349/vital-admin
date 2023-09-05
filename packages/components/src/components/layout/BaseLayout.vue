<template>
  <div class="h-full bg-slate-500 flex">
    <div class="bg-slate-400 flex flex-col" :style="sidebarStyle">
      <div class="bg-slate-300" :style="headStyle" v-if="slots['logo']">
        <slot name="logo"></slot>
      </div>
      <div class="bg-slate-200 flex-1" v-if="slots['sidebar']">
        <slot name="sidebar"></slot>
      </div>
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

// 组件初始化，设置默认的logo和head为同样的高度60px，foot高度40px，sidebar宽度200px
const props = defineProps({
  sidebarWidth: {
    type: String,
    default: '200px'
  },
  sidebarCollapseWidth: {
    type: String,
    default: '60px'
  },
  headHeight: {
    type: String,
    default: '60px'
  },
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
