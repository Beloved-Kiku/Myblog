import RouteRecordRaw from "./addType";
export default [
  {
    path: "/",
    redirect: "/home",
    hidden: false,
  },
  //配置首页
  {
    path: "/home",
    name: "home",
    hidden: false,
    component: () => import("@/home/home.vue"),
  },
  {
    path: "/details",
    name: "details",
    hidden: false,
    component: () =>
      import("@/components/content/details/contentValue/index.vue"),
  },
] as RouteRecordRaw[];
