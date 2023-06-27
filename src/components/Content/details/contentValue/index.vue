<template>
       <div class="main-header"
        style="  background:url('https://api.biuioi.com/random-picture/index.php') center
                 center / cover no-repeat rgb(34, 34, 34);">
              <div class="text">
                <h2 class="page-description">
                 {{ getCurrentRoute.query.markdownCurrent }}
                </h2>
                <h3 class="page-author">
                  setupTime:{{ getCurrentRoute.query.createdAt }}
                </h3>
                <h3 class="page-author">
                  {{getCurrentRoute.query.title }}
                </h3>
              </div>
          </div>
       <div class="contentValue view-mask">
        <div  class="context" v-html="html"></div>
      </div>
      推荐
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { useRoute, RouteLocationNormalizedLoaded,useRouter } from 'vue-router';
//引入markdown解析
import { marked } from "marked";
marked.options({
  mangle: false,
  headerIds:false
})
let html: any = ref('')
//获取文章信息
const getCurrentRoute = <RouteLocationNormalizedLoaded | any>useRoute()
  html.value =getCurrentRoute.query.text
  html.value = marked.parse(html.value)
//路由监听进入置顶
const Router  =useRouter()
Router.beforeEach((to)=>{
  if(to.path=='/details'){
    window.scrollTo(0,0)
  }
})
</script>
<style scoped>
.view-mask{
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none ;
  filter: grayscale(100%);
  filter: invert(100%);
  filter: brightness(70%);
  filter: saturate(200%);
  background-color:#fffae8;
  opacity: .9;
  z-index: 999999;
}

.contentValue {
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;

}
 .text {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;

}
pre{
  color: red;
}
.main-header {
  background-size: cover no-repeat;
  box-shadow: 0 1px 2px #969696b3;
  height: 40vh;
  left: 0;
  text-align: center;
  top: 0;
  width: 100%;
}

.page-author,
.page-description {
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.01rem;
  margin: 0;
  text-shadow: 0 0.1875rem /* 3/16 */ 0.375rem /* 6/16 */ #00000080;
  font-family: Long Cang, cursive;
}

.page-title {
  font-size: 5rem;
  letter-spacing: -1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  mix-blend-mode: screen;
  color: #fff;
  font-weight: 200;
  text-shadow: 0 3px 6px #0000004d;
}
@media only screen and (max-width: 720px) {
  .main-header {
    height: 40vh;
    margin-bottom: 0.9375rem /* 15/16 */;
    max-height: 40vh;
  }
}

@media only screen and (max-width: 960px) {
  .main-header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 50vh;
    max-height: 50vh;
    min-height: 15rem /* 240/16 */;
  }
}

@media only screen and (max-width: 1200px) {
  .main-header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 60vh;
    max-height: 60vh;
    min-height: 15rem /* 240/16 */;
  }
}
@media only screen and (max-width: 720px) {
  .page-description {
    -webkit-line-clamp: 2;
    font-size: 1.6rem;
  }
}

@media only screen and (max-width: 1200px) {
  .page-description {
    -webkit-line-clamp: 4;
    font-size: 2rem;
    line-height: 2rem;
  }
}

@media only screen and (max-width: 1200px) {
  .page-author {
    font-size: 1.3rem !important;
    line-height: 1.3em;
  }
}

@media only screen and (max-width: 720px) {
  .page-author {
    font-size: 1rem !important;
  }
}
</style>
