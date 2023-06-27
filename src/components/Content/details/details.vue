<template>
  <div class="box">
    <n-card 
      v-if="props.KeyWord!=='视频列表'"
      :title="x.markdownTitle"
      v-for="x in Current_details"
      :key="x.id"
      embedded
      :bordered="false"
      size="huge"
    >
      <div class="card" @click="gotoMarkDownPage(x)">
        {{ x.markdownTitle }}
      </div>
    </n-card>
      <Video
        v-else
        />
  </div>
</template>

<script lang="ts" setup>
import { getCurrentDetails } from "@/api/content/index.js";
import  Video  from '@/components/Video/index.vue'
import { Ref, ref } from "vue";
import { useRouter} from "vue-router";
//引入监听页面滚动函数
//接收props 改变数据
let Current_details: Ref<String | any> = ref("");
interface PropsType {
  KeyWord: String;
}
const props = withDefaults(defineProps<PropsType>(), {
  KeyWord: String,
});
//tab栏切换实时获取数据
getCurrentDetails(props.KeyWord).then((res: any) => {
  Current_details.value = res.data.end;
});
const router = useRouter();
//携带参数跳转到details
const gotoMarkDownPage = (data: any) => {
  router.push({
    path: "/details",
    query: {
      id: data.id,
      text: data.markdownValue,
      title: data.markdownTitle,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      markdownCurrent: data.markdownCurrent,
    },
  });
};
// //实时监听页面滚动位置
// const setNowHeight = () => {
//   localStorage.setItem(
//     "nowHeight",
//     JSON.stringify(document.documentElement.scrollTop) as string
//   );
// };
// window.addEventListener("scroll", setNowHeight);
// onBeforeRouteLeave(() => {
//   //卸载事件
//   window.removeEventListener("scroll", setNowHeight);
// });
// //判断是否是从details页面回来 如果是则提取出保存到的页面位置状态
// router.beforeEach((to, from) => {
//   if (from.path == "/details") {
//     window.scrollTo(
//       0,
//       parseInt(window.localStorage.getItem("nowHeight") as string)
//     );
//   }
// });
</script>
<style scoped>
.n-card {
  max-width: 100%;
  height: 150px;
  margin-bottom: 1%;
}
</style>
