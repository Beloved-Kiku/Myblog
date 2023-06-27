import RouteRecordRaw from "./addType";
export default [
  //配置不同错误的展示路由
  {
    path: "/404",
    name: "404-NotFound",
    meta: {
      errorMessage: "网页不存在",
    },
    component: () => import("@/components/Error/Error.vue"),
  },
] as RouteRecordRaw[];
