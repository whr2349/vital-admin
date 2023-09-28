<template>
  <div class="">
    <n-drawer v-model:show="SysOptionsPanelShow" :width="400" placement="right">
      <n-drawer-content title="斯通纳" closable>
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useBoolean } from '../hooks/hooks';
defineOptions({
  name: 'SysOptionsPanel',
});

const SysOptionsPanelShow = ref(false);
const changeShowState = (value: boolean | undefined) => {
  // if(typeof value === 'undefined'){
  // }
};
defineExpose({ changeShowState });
</script>

<style scoped></style>
