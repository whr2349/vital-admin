<!--
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-08-18 16:57:42
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-08-23 16:50:23
 * @FilePath: \vital-admin\packages\vital-admin\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <n-config-provider>
    <n-layout content-style="height:100vh;">
      <n-layout-header bordered>
        <div class=""><SystemLogo :show-title="collapsed"></SystemLogo></div>
      </n-layout-header>
      <n-layout-content bordered class="">
        <n-layout has-sider content-style="height: 800px;">
          <n-layout-sider
            bordered
            :collapsed="collapsed"
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :native-scrollbar="false"
            @update:collapsed="siderUpdate"
          >
            <n-menu :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions" />
          </n-layout-sider>
          <n-layout>
            <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
            <n-layout-footer>成府路</n-layout-footer>
          </n-layout>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { h, type Component, ref } from 'vue'
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
