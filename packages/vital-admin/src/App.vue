<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 16:57:42
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-01 14:37:52
 * @FilePath: \vital-admin\packages\vital-admin\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-config-provider :theme="theme" inline-theme-disabled class="h-full overflow-hidden">
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
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue'
import type { Ref } from 'vue'
import { darkTheme, NIcon } from 'naive-ui'
import type { GlobalTheme, MenuOption } from 'naive-ui'
import { AliwangwangOutlined, CodeSandboxOutlined } from '@vicons/antd'
import { useThemeStore } from '@/stores'
import { BaseLayout, SystemLogo } from '@whr2349/vital-material'
import SysOptionsPanel from '@/components/sysOptionsPanel/SysOptionsPanel.vue'
import logoSvg from '@/assets/logo.svg';
const theme = ref<GlobalTheme | null>(null)
console.log(darkTheme)

useThemeStore().$subscribe((mutation, state) => {
  // theme.value = state.theme
  console.log(mutation)
  console.log(state)
  if (state.darkPatterns) {
    theme.value = darkTheme
  } else {
    theme.value = null
  }
})
// 菜单的折叠状态
const menuCollapsed = ref(false)
// 定义一个函数，用于处理侧边栏折叠事件
const onSidebarCollapseHandler = (collapse: boolean) => {
  // 将折叠状态设置为collapse
  menuCollapsed.value = collapse
  // 设置logo标题的显示状态
  logoRef.value?.showTitleChange(!collapse)
}
const layoutRef: Ref<InstanceType<typeof BaseLayout> | null> = ref(null)
const logoRef: Ref<InstanceType<typeof SystemLogo> | null> = ref(null)
// 定义一个变量sideLock，初始值为false
let sideLock = false
// 定义一个函数btnClickHandler
const btnClickHandler = () => {
  // 将sideLock的值设置为取反
  sideLock = !sideLock
  // 将sideLock的值设置为layoutRef的值的sidebarCollapseHandler函数的返回值
  layoutRef.value?.sidebarCollapseHandler(sideLock)
  logoRef.value?.showTitleChange(!sideLock)
}

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase'
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
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
const renderMenuLabel = (option: MenuOption) => {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, option.label as string)
  }
  return option.label as string
}
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man') return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null
  return h(NIcon, null, { default: () => h(AliwangwangOutlined) })
}
const sysOptionsPanelRef = ref<InstanceType<typeof SysOptionsPanel> | null>(null)
const onClickSysOpions = () => {
  sysOptionsPanelRef.value?.changeSysOptionsShowState()
}
// 用vue3和naive-ui写一段主页代码题切换
</script>
