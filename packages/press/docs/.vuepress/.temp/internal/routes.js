export const redirects = JSON.parse("{\"/%E6%8C%87%E5%8D%97/%E6%8C%87%E5%8D%971.html\":\"/article/7re5012z/\",\"/notes/guide/%E4%BB%8B%E7%BB%8D.html\":\"/guide/intro/\",\"/notes/components/%E5%B8%83%E5%B1%80/1.%E5%9F%BA%E6%9C%AC%E5%B8%83%E5%B1%80.html\":\"/components/%E5%B8%83%E5%B1%80/1.%E5%9F%BA%E6%9C%AC%E5%B8%83%E5%B1%80/\",\"/notes/components/%E5%B8%83%E5%B1%80/2.LOGO.html\":\"/components/%E5%B8%83%E5%B1%80/2.LOGO/\",\"/notes/guide/%E7%BB%84%E4%BB%B6/%E8%BD%AE%E6%92%AD%E5%9B%BE.html\":\"/guide/components/swiper/\",\"/notes/guide/%E7%BB%84%E4%BB%B6/%E9%93%BE%E6%8E%A5%E5%8D%A1%E7%89%87.html\":\"/guide/components/link-card/\",\"/notes/guide/%E7%BB%84%E4%BB%B6/%E9%9A%90%E7%A7%98%E6%96%87%E6%9C%AC.html\":\"/guide/components/plot/\",\"/notes/guide/%E7%BB%84%E4%BB%B6/%E9%A6%96%E9%A1%B5%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8.html\":\"/guide/components/home-box/\",\"/notes/guide/%E5%B5%8C%E5%85%A5/bilibili.html\":\"/guide/embed/video/bilibili/\",\"/notes/guide/%E5%B5%8C%E5%85%A5/pdf.html\":\"/guide/embed/pdf/\",\"/notes/guide/%E5%B5%8C%E5%85%A5/youtube.html\":\"/guide/embed/video/youtube/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/7re5012z/", { loader: () => import(/* webpackChunkName: "article_7re5012z_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/article/7re5012z/index.html.js"), meta: {"title":"指南1"} }],
  ["/guide/intro/", { loader: () => import(/* webpackChunkName: "guide_intro_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/intro/index.html.js"), meta: {"title":"主题介绍234","icon":"mdi:tooltip-text-outline"} }],
  ["/components/%E5%B8%83%E5%B1%80/1.%E5%9F%BA%E6%9C%AC%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "components_布局_1.基本布局_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/components/布局/1.基本布局/index.html.js"), meta: {"title":"基本布局","icon":"solar:qr-code-outline+"} }],
  ["/components/%E5%B8%83%E5%B1%80/2.LOGO/", { loader: () => import(/* webpackChunkName: "components_布局_2.LOGO_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/components/布局/2.LOGO/index.html.js"), meta: {"title":"LOGO","icon":"fluent:app-title-20-regular"} }],
  ["/guide/components/swiper/", { loader: () => import(/* webpackChunkName: "guide_components_swiper_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/components/swiper/index.html.js"), meta: {"title":"轮播图","icon":"dashicons:images-alt2"} }],
  ["/guide/components/link-card/", { loader: () => import(/* webpackChunkName: "guide_components_link-card_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/components/link-card/index.html.js"), meta: {"title":"链接卡片","icon":"solar:card-send-linear"} }],
  ["/guide/components/plot/", { loader: () => import(/* webpackChunkName: "guide_components_plot_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/components/plot/index.html.js"), meta: {"title":"“隐秘”文本","icon":"lets-icons:hide-eye"} }],
  ["/guide/components/home-box/", { loader: () => import(/* webpackChunkName: "guide_components_home-box_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/components/home-box/index.html.js"), meta: {"title":"首页布局容器","icon":"tabler:container"} }],
  ["/guide/embed/video/bilibili/", { loader: () => import(/* webpackChunkName: "guide_embed_video_bilibili_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/embed/video/bilibili/index.html.js"), meta: {"title":"Bilibili 视频","icon":"ri:bilibili-fill"} }],
  ["/guide/embed/pdf/", { loader: () => import(/* webpackChunkName: "guide_embed_pdf_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/embed/pdf/index.html.js"), meta: {"title":"PDF 阅读","icon":"teenyicons:pdf-outline"} }],
  ["/guide/embed/video/youtube/", { loader: () => import(/* webpackChunkName: "guide_embed_video_youtube_index.html" */"D:/projects/my/vital-admin/packages/press/docs/.vuepress/.temp/pages/guide/embed/video/youtube/index.html.js"), meta: {"title":"Youtube 视频","icon":"mdi:youtube"} }],
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
