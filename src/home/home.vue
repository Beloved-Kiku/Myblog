<template>
  <SlideShow></SlideShow>
  <div :class="{ container: isShowInfo, containers: !isShowInfo }">
     <SideBar
      :isShowInfo="isShowInfo"
      @changeIsShowState="changeIsShowState"
    ></SideBar>
    <div class="home">
        <Content/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import Footer from "@/components/Footer/Footer.vue";
import Content from "@/components/content/index.vue";
import SlideShow from "@/components/SlideShow/SlideShow.vue";
import SideBar from "@/components/SideBar/index.vue";
import { ref } from "vue";
import type { Ref } from "vue";
//获取盒子
//控制手风琴侧边栏 默认状态
let isShowInfo: Ref<Boolean> = ref(false);
//修改手风琴状态
const changeIsShowState = (state: Boolean) => {  
  isShowInfo.value = state;
};
</script>
<style scoped>
.container {
  width: 50%;
  transition: width 0.5s ease-in-out;
  background-color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  overflow-x: auto;
  padding-top: 1.5%;
  margin: 0 auto;
}
.containers {
  width: 60%;
  transition: width 0.5s ease-in-out;
  background-color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  overflow-x: auto;
  padding-top: 1.5%;
  margin: 0 auto;
}
</style>
