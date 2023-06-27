import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//配置自动导入ui组件库
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
//配置path alias
import path, { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    //配置根路径别名
    alias: {
      "@": resolve(__dirname, ".", "src"),
    },
    //省略扩展名
    extensions: [".mjs", ".js", ".ts"],
  },
});
