import { defineConfig, presetUno, presetAttributify } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  presets: [
    presetUno({
      rules: [
        ['container', () => ({})],
      ],
    }),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  content: {
    filesystem: ["**/*.{html,vue,md}"],
  },
});
