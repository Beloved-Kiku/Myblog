import { createApp } from "vue";
//导入配置fontSize
import "./assets/appconfig/fontSize";
import "./assets/appconfig/font.css";
//导入路由
import router from "./router/index";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
import "virtual:svg-icons-register";
import App from "./App.vue";
import "highlight.js/styles/github.css";
const app = createApp(App);
app.use(router).use(vue3videoPlay);
app.mount("#app");
