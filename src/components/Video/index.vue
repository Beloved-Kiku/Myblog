<template>
  <div class="videobox" v-for="k,index in temp" :key="index">
    <div class="videoTag">
      <n-tag :bordered="false" type="info" size="large">
        <h2>
          {{ k.video_title }}
        </h2>
      </n-tag>
      <n-tag :bordered="false" type="success"> Time:{{ k.updatedAt }} </n-tag>
    </div>
    <div class="downLoad" @click="downLoadVideo(k.video_aliyunpath)">
      <n-tag :bordered="false" type="success">
        <h4>下载</h4>
      </n-tag>
    </div>
    <vue3VideoPlay
        v-bind="options"
        :poster="k.background_image"
        :src="k.video_aliyunpath"
      />
    <!-- <n-upload action="http://127.0.0.1:3000/api/uploadvideo">
      <n-button>上传文件</n-button>
    </n-upload> -->
    <n-divider />
  
  </div>
 
</template>
<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import { getVideoListApi } from "@/api/video/index.ts";
//获取视频列表数据
let temp = ref();
getVideoListApi().then((res: any) => {
  temp.value = res.data;
});
//播放器基本配置
const options = reactive({
  width: "850px", //播放器高度
  height: "450px", //播放器高度
  color: "#409eff", //主题色
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: true, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
//下载视频
const downLoadVideo = (url: string) => {
  window.open(url, "_self");
};
onMounted(()=>{

})
nextTick(()=>{
  window.scrollTo(0, 0)
})
</script>
<style scoped>
.videoTag {
  display: flex;
  flex-direction: column;
}
.videobox {
  position: relative;
}
.downLoad {
  position: absolute;
  right: 0;
  top: 0.9375rem /* 15/16 */ /* 10/16 */;
}
.downLoad:hover h4 {
  cursor: pointer;
}
</style>
