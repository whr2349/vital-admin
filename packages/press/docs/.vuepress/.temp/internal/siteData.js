export const siteData = JSON.parse("{\"base\":\"/Vital-Admin/\",\"lang\":\"zh-CN\",\"title\":\"Vital-Admin\",\"description\":\"Vital-Admin前端快速开发模版工程与组件\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
