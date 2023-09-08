/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-05 16:18:06
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-08 14:13:00
 * @FilePath: \components\src\types\components.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export declare namespace LayoutAttr {
  type IProps = {
    // 侧边栏宽度
    sidebarWidth: string
    // 侧边栏收起时宽度
    sidebarCollapseWidth: string
    // 头部高度
    headHeight: string
    // 底部高度
    footHeight: string
    // 是否显示收起、展开按钮
    showSidebarCollapseButton: boolean
    // 是否显示右侧边框
    showSidebarRightBorder: boolean
    // 是否显示底部边框
    showLogoBottomBorder: boolean
    // 是否显示右部边框
    showLogoRightBorder: boolean
    // 是否显示头部边框
    showHeadBottomBorder: boolean
    // 是否显示底部边框
    showFootTopBorder: boolean
    // 布局模式
    layoutMode: 'vertical' | 'horizontal'
    // 主题模式
    themeMode: 'light' | 'dark'
  }
  type IEmit = {
    // 侧边栏收起事件
    (event: 'onSidebarCollapseChange', collapse: boolean): void
  }
}
export declare namespace SystemLogoAttr {
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