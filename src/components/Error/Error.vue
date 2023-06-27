<template>
  <div class="exception">
    <div class="img">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
      />
    </div>
    <div class="content">
      <h1>{{ErrorRoute.meta.errorMessage}}</h1>
      <div class="desc"></div>
      <div class="action">
        <p>{{ counter+"s后返回首页" }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter,useRoute } from "vue-router";
const ErrorRoute = useRoute()
const ErrorRouter = useRouter();
const counter = ref(5)
if (counter.value > 0){
    let  times = () => {  
        let timer = window.setInterval(() => {
            counter.value--
            if (counter.value === 0) {
                clearInterval(timer)
                ErrorRouter.replace('/')
            }
        }, 1000)
    }
    times()
}
</script>
<style>
.exception {
  display: flex;
  min-height: 500px;
  height: 80%;
  align-items: center;
  text-align: center;
  margin-top: 150px;
}
.content {
  display: inline-block;
  flex: auto;
}
h1 {
  color: #434e59;
  font-size: 72px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 24px;
}
.desc {
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 16px;
}
.img {
  display: inline-block;
  padding-right: 52px;
  zoom: 1;
}
.img img{
    height: 360px;
    max-width: 430px;
}
</style>
