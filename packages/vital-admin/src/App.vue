<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
    >
      <n-layout>
        <n-layout-header bordered><SystemLogo></SystemLogo></n-layout-header>
        <n-layout-content bordered>
          <n-menu :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions" />
        </n-layout-content>
      </n-layout>
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>颐和园路</n-layout-header>
      <n-layout-content bordered > 平山道 </n-layout-content>
      <n-layout-footer bordered>成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h, defineComponent, type Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import SystemLogo from '@/components/common/system-logo/SystemLogo.vue'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(PersonIcon),
    children: [
      {
        label: '鼠',
        key: 'rat',
        icon: renderIcon(WineIcon)
      }
    ]
  }
]
const sysTitle = [
  {
    label: 'vital-admin',
    icon: renderIcon(BookIcon)
  }
]
</script>
