import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "首页",
    link: "/",
    icon: "material-symbols:home-outline",
  },
  {
    text: "指南",
    link: "/notes/guide/介绍.md",
    icon: "icon-park-outline:guide-board",
    activeMatch: "^/guide/",
  },
  {
    text: "组件",
    link: "/notes/components/布局/1.基本布局.md",
    icon: "lets-icons:materials",
    activeMatch: "^/components/",
  },
  {
    text: "博客",
    link: "/blog/",
    icon: "material-symbols:article-outline",
  },
]);
