/*
 * @Author: whr2349 378237242@QQ.com
 * @Date: 2023-09-05 16:18:06
 * @LastEditors: whr2349 378237242@QQ.com
 * @LastEditTime: 2023-09-07 08:45:48
 * @FilePath: \vital-admin\packages\components\src\typings\layout.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
declare namespace BaseLayoutSpace {
  interface IProps {
    // 侧边栏宽度
    sidebarWidth: string
    // 侧边栏收起时宽度
    sidebarCollapseWidth: string
    // 头部高度
    headHeight: string
    // 底部高度
    footHeight: string
    // 是否显示右侧边框
    showSidebarRightBorder: boolean
    // 是否显示底部边框
    showLogoBottomBorder: boolean
    // 是否显示右部边框
    showLogoRightBorder: boolean
    // 是否显示头部边框
    showheadBottomBorder: boolean
    // 是否显示底部边框
    showFootTopBorder: boolean
  }
  interface IEmit {
    // 侧边栏收起事件
    (event: 'onSidebarCollapseChange', collapse: boolean): void
  }
}
