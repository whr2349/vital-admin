<!--language: Vue-->
<template>
  <div class="">
    <n-drawer v-model:show="SysOptionsPanelShow" :width="300" placement="right">
      <n-drawer-content title="页面设置" closable>
        <div class="flex justify-between items-center">
          <div>顶部高度</div>
          <div class="w-40">
            <n-input-number :default-value="1075" :parse="parseCurrency" :format="formatCurrency" />
          </div>
        </div>
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

const {
  bool: SysOptionsPanelShow,
  setBool: setSysOptionsPanelShow,
  toggle: toggleSysOptionsPanelShow,
} = useBoolean(false);

const changeSysOptionsShowState = (value?: boolean) => {
  // 如果value的类型是undefined，则执行toggleSysOptionsPanelShow函数
  if (typeof value === 'undefined') {
    toggleSysOptionsPanelShow();
    // 否则，执行setSysOptionsPanelShow函数，并传入value参数
  } else {
    setSysOptionsPanelShow(value);
  }
};
const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|¥|\s)/g, '').trim();
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums);
  return nums === '' ? null : Number.NaN;
};
const formatCurrency = (value: number | null) => {
  if (value === null) return '';
  return `${value.toLocaleString('en-US')} ¥`;
};
defineExpose({ changeSysOptionsShowState });
</script>

<style scoped></style>
