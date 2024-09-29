/* @Description:packages/press/docs/.vuepress/config.js @author:378237242@qq.com @date:2024/9/29 */
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: "zh-CN",
  theme: plumeTheme({
    // more...
  }),
  bundler: viteBundler(),
});
