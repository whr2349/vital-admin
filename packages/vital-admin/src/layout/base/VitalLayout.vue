<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-23 16:58:58
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-04 10:28:57
 * @LastEditTime: 2023-09-01 15:22:21
 * @FilePath: \vital-admin\packages\vital-admin\src\layout\base\VitalLayout.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="h-screen relative">
    <n-layout position="absolute">
      <!-- <n-layout has-sider class="h-16">
        <n-layout-sider
          bordered
          content-style="overflow: hidden;"
          :collapsed="collapsed"
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          @update:collapsed="siderUpdate"
          class="border-0 border-solid border-b-1 border-slate-100"
        >
          <SystemLogo :show-title="collapsed"></SystemLogo>
        </n-layout-sider>
        <n-layout
          bordered
          class="border-0 border-solid border-b-1 border-default-border"
          content-style="overflow: hidden;display:flex;align-items:center;"
        >
          <HeaderLayout></HeaderLayout>
        </n-layout>
      </n-layout> -->
      <n-layout-header bordered>
        <n-layout has-sider class="h-16">
          <n-layout-sider
            bordered
            content-style="overflow: hidden;"
            :collapsed="collapsed"
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            @update:collapsed="siderUpdate"
          >
            <SystemLogo :show-title="collapsed"></SystemLogo>
          </n-layout-sider>
          <n-layout content-style="overflow: hidden;display:flex;align-items:center;">
            <HeaderLayout></HeaderLayout>
          </n-layout>
        </n-layout>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px">
        <n-layout-sider
          bordered
          content-style=""
          :collapsed="collapsed"
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          @update:collapsed="siderUpdate"
        >
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout :native-scrollbar="false">
          <n-layout-content content-style="padding: 24px;" :native-scrollbar="false">
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
            <n-h2>平山道</n-h2>
          </n-layout-content>
          <n-layout-footer bordered position="absolute" style="height: 34px;">
            城府路
          </n-layout-footer>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import { h, ref, type Component } from 'vue'
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
import HeaderLayout from '@/layout/components/HeaderLayout.vue'

defineOptions({
  name: 'VitalLayout'
})
const collapsed = ref(false)
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
const siderUpdate = (value: boolean) => {
  console.log(value)
  collapsed.value = value
}
</script>

<style scoped></style>
