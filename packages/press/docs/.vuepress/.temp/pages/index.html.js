import comp from "D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"tintPlate\":210,\"hero\":{\"name\":\"Vital-Admin\",\"text\":\"一个清新优雅功能丰富的前端快速开发模版工程与组件\",\"actions\":[{\"theme\":\"brand\",\"text\":\"快速开始 →\",\"link\":\"/guide/intro/\"},{\"theme\":\"alt\",\"text\":\"Github\",\"link\":\"https://github.com/whr2349/vital-admin\"}]}}],\"gitInclude\":[],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"index.md\",\"categoryList\":[],\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
