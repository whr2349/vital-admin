import { defineClientConfig } from "vuepress/client";
import material from "vital-material";
import "vital-material/style:style.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(material);
  },
  setup() {},
  rootComponents: [],
});
