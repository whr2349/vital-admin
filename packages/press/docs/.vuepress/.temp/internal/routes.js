export const redirects = JSON.parse("{\"/components/components.html\":\"/article/zrs6p5ew/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/zrs6p5ew/", { loader: () => import(/* webpackChunkName: "article_zrs6p5ew_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/article/zrs6p5ew/index.html.js"), meta: {"title":"components"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
