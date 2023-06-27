// 执行ts各种适配
declare module "*vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@liripeng/vue-audio-player";
declare module "declare module 'vue3-markdown-it";
declare module "@/api/content/index.js";
