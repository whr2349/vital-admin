/* @Description:packages/press/docs/.vuepress/config.js @author:378237242@qq.com @date:2024/9/29 */
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import navbar from "./navbar";
import notes from "./notes";

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: "zh-CN",
  base: "/vital-admin/",
  title: "Vital-Admin",
  description: "Vital-Admin前端快速开发模版工程与组件",
  theme: plumeTheme({
    logo: "/logo.svg",
    profile: {
      name: "Theme Plume",
    },
    navbar,
    notes,
    plugins: {
      comment: {
        provider: "Giscus", // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: "whr2349/vital-admin",
        repoId: "R_kgDOKJif0Q",
        category: "General",
        categoryId: "DIC_kwDOKJif0c4CjZZd",
      },
      markdownEnhance: {
        demo: true,
        vuePlayground: true,
      },
    },
  }),
  bundler: viteBundler({
    viteOptions: {
      // resolve: {
      //   alias: {
      //     'swiper/modules': 'swiper/modules'
      //   }
      // },
      // optimizeDeps: {
      //   include: ['swiper/modules']
      // },
      // ssr: {
      //   // 将可能会使用到 window 对象的依赖添加到 noExternal 中
      //   noExternal: ['vue-router', 'swiper', '@vue/repl']
      // }
    }
  }),
});
// <script src="https://giscus.app/client.js"
//         data-repo="whr2349/vital-admin"
//         data-repo-id="R_kgDOKJif0Q"
//         data-category="General"
//         data-category-id="DIC_kwDOKJif0c4CjZZd"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="zh-CN"
//         crossOrigin="anonymous"
//         async>
// </script>
