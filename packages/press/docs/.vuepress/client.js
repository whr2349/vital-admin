import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      const material = (await import("vital-material")).default;
      await import("vital-material/style:style.css");
      app.use(material);
    }
  },
  setup() {},
  rootComponents: [],
});
