<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-22 15:50:12
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-08 14:42:32
 * @FilePath: \components\src\components\system-logo\SystemLogo.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="flex items-center justify-center h-full overflow-hidden">
    <slot name="logoImg"> </slot>
    <h2 class="ml-3" v-show="showTitleRef">
      <slot></slot>
    </h2>
  </div>
</template>

<script setup lang="ts">
import {type Ref, ref, watchEffect } from 'vue';
declare namespace SystemLogoAttr {
  type IProps = {
    showTitle:boolean
    // 宽度
    systemLogoWidth: string
    // 收起时宽度
    systemLogoCollapseWidth: string
  }
  type IEmit = {
    // 侧边栏收起事件
    (event: 'onShowTitleChange', collapse: boolean): void
  }
}

const emit = defineEmits<SystemLogoAttr.IEmit>();
const props = withDefaults(defineProps<Partial<SystemLogoAttr.IProps>>(), {
  showTitle: true,
});
watchEffect(() => {
  emit('onShowTitleChange', props.showTitle);
});
const showTitleRef:Ref = ref(props.showTitle);
const showTitleChange = (value: boolean) => {
  console.log('showTitleChange:', value);
  showTitleRef.value = value;
  emit('onShowTitleChange', value);
};
defineExpose({
  showTitleChange,
});
</script>

<style scoped></style>
