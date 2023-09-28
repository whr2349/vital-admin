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
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
      />
    </template>
    <template #head>head</template>
    <template #main>
      <button @click="btnClickHandler">api调用侧边栏展开和收起</button>
      <div v-for="key in 100" :key="key">sidebar</div></template
    >
    <template #foot>foot</template>
  </BaseLayout>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';
import type { Ref } from 'vue';
import BaseLayout from '../components/layout/BaseLayout.vue';
import SystemLogo from '../components/system-logo/SystemLogo.vue';
import logoSvg from './logo.svg';
import { NIcon, NMenu } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { AliwangwangOutlined } from '@vicons/antd';

defineOptions({
  name: 'DemoIndex',
});
const collapsed = ref(true);
const onSidebarCollapseHandler = (collapse: boolean) => {
  logoRef.value?.showTitleChange(!collapse);
};
const layoutRef: Ref<InstanceType<typeof BaseLayout> | null> = ref(null);
const logoRef: Ref<InstanceType<typeof SystemLogo> | null> = ref(null);
// 定义一个变量sideLock，初始值为false
let sideLock = false;
// 定义一个函数btnClickHandler
const btnClickHandler = () => {
  // 将sideLock的值设置为取反
  sideLock = !sideLock;
  // 将sideLock的值设置为layoutRef的值的sidebarCollapseHandler函数的返回值
  layoutRef.value?.sidebarCollapseHandler(sideLock);
  logoRef.value?.showTitleChange(!sideLock);
};

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
];
const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, option.label as string);
  }
  return option.label as string;
};
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man') return true;
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null;
  return h(NIcon, null, { default: () => h(AliwangwangOutlined) });
};
const expandIcon = () => {
  return h(NIcon, null, { default: () => h(AliwangwangOutlined) });
};
</script>
<style scoped></style>
