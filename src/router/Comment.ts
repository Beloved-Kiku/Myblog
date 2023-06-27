import RouteRecordRaw from "./addType";
export default [
  {
    path: "/comment",
    name: "CommentList",
    component: () => import("@/components/CommentList/index.vue"),
  },
] as RouteRecordRaw[];
