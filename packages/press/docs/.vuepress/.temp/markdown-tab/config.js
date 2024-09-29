import CodeTabs from "D:/projects/my/vital-admin/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_typescript@5.1.6_vuepress@2.0.0-_7mqbnaf3q23uadqqysvmud2cdu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "D:/projects/my/vital-admin/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_typescript@5.1.6_vuepress@2.0.0-_7mqbnaf3q23uadqqysvmud2cdu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/projects/my/vital-admin/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_typescript@5.1.6_vuepress@2.0.0-_7mqbnaf3q23uadqqysvmud2cdu/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
