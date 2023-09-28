<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-04 14:29:11
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-08 15:18:06
 * @FilePath: \components\src\components\layout\BaseLayout.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="h-full flex" :class="{ dark: themeMode === 'dark' }">
    <div
      class="flex flex-col relative transition-all duration-300"
      :style="sidebarStyle"
      v-if="props.layoutMode === 'vertical'"
    >
      <div
        class="border-solid border-0 border-gray-700/9 dark:border-neutral-50/15"
        :class="[showLogoRightBorder ? 'border-r' : '', showLogoBottomBorder ? 'border-b' : '']"
        :style="logoStyle"
        v-if="slots['logo']"
      >
        <slot name="logo"></slot>
      </div>
      <div
        class="flex-1 border-solid border-0 overflow-hidden border-gray-700/9 dark:border-neutral-50/15"
        v-if="slots['sidebar']"
        :class="[showSidebarRightBorder ? 'border-r' : '']"
      >
        <slot name="sidebar"></slot>
      </div>
      <Icon
        v-if="props.showSidebarCollapseButton"
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
        class="border-solid border-0 w-full border-gray-700/9 dark:border-neutral-50/15"
        :class="[showHeadBottomBorder ? 'border-b' : '']"
        :style="headStyle"
        v-if="slots['head']"
      >
        <div
          class="border-solid border-0 border-gray-700/9 dark:border-neutral-50/15"
          :class="[showLogoRightBorder ? 'border-r' : '', showLogoBottomBorder ? 'border-b' : '']"
          :style="logoStyle"
          v-if="slots['logo'] && props.layoutMode !== 'vertical'"
        >
          <slot name="logo"></slot>
        </div>
        <slot name="head"></slot>
      </div>
      <div class="flex-1 overflow-hidden" v-if="slots['main']">
        <slot name="main"></slot>
      </div>
      <div
        class="border-solid border-0 overflow-hidden border-gray-700/9 dark:border-neutral-50/15"
        :class="[showFootTopBorder ? 'border-t' : '', showLogoBottomBorder ? 'border-b' : '']"
        :style="footStyle"
        v-if="slots['foot']"
      >
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import { LeftCircleTwotone } from '@vicons/antd';
import { Icon } from '@vicons/utils';
import type { LayoutAttr } from '@/types/components';

// 组件初始化，设置默认的logo和head为同样的高度60px，foot高度40px，sidebar宽度200px
// props 设置默认值
const props = withDefaults(defineProps<Partial<LayoutAttr.IProps>>(), {
  sidebarWidth: '200px',
  sidebarCollapseWidth: '60px',
  headHeight: '60px',
  footHeight: '40px',
  showSidebarRightBorder: true,
  showLogoBottomBorder: true,
  showLogoRightBorder: true,
  showHeadBottomBorder: true,
  showFootTopBorder: true,
  showSidebarCollapseButton: true,
  layoutMode: 'vertical',
  themeMode: 'light',
});
const emit = defineEmits<LayoutAttr.IEmit>();
// 获取 setupContext.slots
const slots = useSlots();

const sidebarStyle = ref({ width: props.sidebarWidth });
const headStyle = computed(() => {
  return {
    height: props.headHeight,
  };
});
const logoStyle = computed(() => {
  return {
    height: props.headHeight,
    width: props.sidebarWidth,
  };
});
const footStyle = computed(() => {
  return {
    height: props.footHeight,
  };
});
// 侧边栏收起按钮
let sidebarCollapseLock = ref(false);
const sidebarCollapseHandler = (isCollapse: boolean) => {
  sidebarCollapseLock.value = isCollapse;
  if (sidebarCollapseLock.value) {
    sidebarStyle.value.width = props.sidebarCollapseWidth;
    logoStyle.value.width = props.sidebarCollapseWidth;
  } else {
    sidebarStyle.value.width = props.sidebarWidth;
    logoStyle.value.width = props.sidebarWidth;
  }
  emit('onSidebarCollapseChange', isCollapse);
};
defineExpose({ sidebarCollapseHandler });
</script>

<style scoped></style>
