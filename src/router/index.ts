import { createRouter, createWebHistory, _RouteRecordBase } from "vue-router";
import RouteRecordRaw from "./addType";
import HomeRoutes from "./home";
import ErrorRoutes from "./Error";
import CommentRoutes from "./Comment";
const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  ...ErrorRoutes,
  ...CommentRoutes,
  //配置出错路由
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
