<template>
  <n-button @click="activate('right')"> 左 </n-button>
  <n-drawer
    display-directive="show"
    :show="active"
    :width="400"
    :height="300"
    resizable
    :trap-focus="false"
    :block-scroll="false"
    :show-mask="false"
     class="drawer"
    :placement="placement"
  >
    <n-drawer-content closable title="听音乐放松一下" >
      <div id="Music">
          <audio-player
            ref="audioPlayer"
            :show-volume-button="false"
            :audio-list="audioList.map((elm) => elm.url)"
            theme-color="#ff2929"
            :before-play="hanthandleBeforePlay"
          />
        </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
// 局部引入
import AudioPlayer from "@liripeng/vue-audio-player";
import type { DrawerPlacement } from "naive-ui";
import { Ref, ref } from "vue";
const audioList = [
  {
    name: "音频1",
    url: "https://www.0dutv.com/upload/dance/F25F74A0B8FF82503241801D0E2CA5CD.mp3",
  },
  {
    name: "音频2",
    url: "https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3",
  },
];
const placement = ref<DrawerPlacement>("right");
const active = ref(false);
const activate = (state: DrawerPlacement) => {
  active.value = true;
  placement.value = state;
};
// 播放前做的事
const hanthandleBeforePlay =(next:any)=> {
  let currentAudioName:Ref<String|any> = ref('')
  // 这里可以做一些事情...
  //获取组件DOM
  next()
  //currentAudioName = audioList[document.getElementById('Music')?.currentPlayIndex].name

  next() // 开始播放
}
</script>
<style>
#Music {
  margin-top:8%;
}
.drawer{
  width: 200px;
  height: 30%;
  font-size: 8rem;
}
</style>
