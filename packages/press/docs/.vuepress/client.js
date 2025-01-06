import { defineClientConfig } from "vuepress/client";
import "virtual:uno.css";

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    (await import("virtual:uno.css")).default;
    if (typeof window !== "undefined") {
      const material = (await import("vital-material")).default;
      await import("vital-material/style:style.css");
      app.use(material);
    }
  },
  setup() {},
  rootComponents: [],
});
