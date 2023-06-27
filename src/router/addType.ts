import type { RouteRecordRaw } from "vue-router";
// 对RouteRecordRaw类型进行扩展  方便控制路由
declare module "vue-router" {
  interface _RouteRecordBase {
    hidden?: boolean;
  }
}
export default RouteRecordRaw;
