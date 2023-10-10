<template>
  <n-config-provider inline-theme-disabled class="h-full overflow-hidden">
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
        <div class="h-full overflow-overlay">
          <n-menu
            :collapsed="menuCollapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
          />
        </div>
      </template>
      <template #head>
        <div class="flex items-center justify-between h-full p-x-4">
          <div><n-input placeholder="搜索"></n-input></div>
          <div class="flex items-center">
            <n-icon
              class="cursor-pointer hover:bg-gray-900/9 rounded"
              size="24"
              color="#333639"
              @click="onClickSysOpions"
            >
              <CodeSandboxOutlined />
            </n-icon>
          </div>
        </div>
      </template>
      <template #main>
        <div class="h-full">
          <button @click="btnClickHandler">api调用侧边栏展开和收起</button>
          <div v-for="key in 100" :key="key">sidebar</div>
        </div>
      </template>
      <template #foot>foot</template>
    </BaseLayout>
    <SysOptionsPanel ref="sysOptionsPanelRef"></SysOptionsPanel>
  </n-config-provider>
</template>
<script setup lang="ts">
import { ref, h } from 'vue';
import type { Ref } from 'vue';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { AliwangwangOutlined, CodeSandboxOutlined } from '@vicons/antd';
import BaseLayout from '../components/layout/BaseLayout.vue';
import SystemLogo from '../components/system-logo/SystemLogo.vue';
import logoSvg from './logo.svg?component';
import SysOptionsPanel from '../components/sysOptionsPanel/SysOptionsPanel.vue';

defineOptions({
  name: 'DemoIndex',
});
// 菜单的折叠状态
const menuCollapsed = ref(false);
// 定义一个函数，用于处理侧边栏折叠事件
const onSidebarCollapseHandler = (collapse: boolean) => {
  // 将折叠状态设置为collapse
  menuCollapsed.value = collapse;
  // 设置logo标题的显示状态
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
const sysOptionsPanelRef = ref<InstanceType<typeof SysOptionsPanel> | null>(null);
const onClickSysOpions = () => {
  sysOptionsPanelRef.value?.changeSysOptionsShowState();
};
</script>
<style scoped></style>
