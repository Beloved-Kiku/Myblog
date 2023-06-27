<template>
  <div class="shadowBox" v-if="props.isShowInfo"></div>
  <div :class="{ info: props.isShowInfo, infos: !props.isShowInfo }">
    <n-collapse ref="DomNode" 
    :theme-overrides="selectThemeOverrides"
    default-expanded-names="1" @item-header-click="handleItemHeaderClick" accordion>
      <n-collapse-item :title="title" display-directive="show">
        <n-card>
          <div class="adminInfo">
            <div class="avatar">
              <n-avatar :size="80" src="https://belovedvscode.oss-cn-chengdu.aliyuncs.com/image/F1A255DFD4181797364E4D477E7D3DD0.png" />
            </div>
            <div class="details" style="display: flex; flex-direction: column">
              <span>昵称:Beloved </span>
              <span>爱好:前端开发</span>
              <span>爱好:xxx</span>
            </div>
          </div>
          <n-divider />
          <div class="currentInfo">
            <span>随笔:xxx</span>
            <span>文章:xxx</span>
            <span>面试:xxx</span>
            <span>面试:xxx</span>
          </div>
          <n-divider />
          <n-input 
          :theme-overrides="SelectThemeInput"
           placeholder="随便搜搜吧!">
            <template #prefix>
              <Svg name="search"></Svg>
            </template>
          </n-input>
          <n-divider />
          <!---列表-->
          <div class="list">
            <a href="#">
              <li class="Currentitem">
                <Svg name="userGroup"></Svg>
                <div>友链</div>
                <div>i</div>
              </li>
            </a>
            <a href="#">
              <li class="Currentitem">
                <Svg name="books"></Svg>
                <div>书单</div>
                <div>ii</div>
              </li>
            </a>
                <a href="#">
                <li class="Currentitem">
                  <Svg name="books"></Svg>
                  <div>留言</div>
                  <div>iii</div>
                </li>
              </a>
            <a href="https://github.com/Beloved-ZR">
              <li class="Currentitem">
                <Svg name="github"></Svg>
                <div>github</div>
                <div>iv</div>
              </li>
            </a>
            <a href="https://gitee.com/belovedZr">
              <li class="Currentitem">
                <Svg name="gitee"></Svg>
                <div>gitee</div>
                <div>iiv</div>
              </li>
            </a>
          </div>
          <!--前端开发文档推荐-->
          <div class="Docs" title="d">
            <n-collapse :theme-overrides="selectThemeOverrides" display-directive="show">
              <n-collapse-item title="前端开发" name="1">
                <n-collapse :theme-overrides="selectThemeOverrides" display-directive="show">
                  <n-collapse-item title="知名讲师" name="1">
                    <a href="https://space.bilibili.com/3493293832800451?spm_id_from=333.337.0.0">B站紫阳道长</a>
                  </n-collapse-item>
                  <n-collapse-item title="HTML" name="2">
                    <a href="https://www.w3school.com.cn/">W3school文档</a>
                  </n-collapse-item>
                  <n-collapse-item title="CSS" name="3">
                    <div>Css</div>
                  </n-collapse-item>
                  <n-collapse-item title="JavaScript" name="4">
                    <a href="https://developer.mozilla.org/zh-CN/">Mdn文档</a>
                  </n-collapse-item>
                  <n-collapse-item title="webPack" name="5">
                    <a href="https://webpack.js.org/">WebPack官方文档</a>
                  </n-collapse-item>
                  <n-collapse-item title="Node.js" name="6">
                    <div>快速通过</div>
                  </n-collapse-item>
                  <n-collapse-item title="Vue.js" name="7">
                        <n-collapse-item title="Vue周边生态" name="8">
                         <n-collapse-item title="常用组件库" name="9">
                          <a href="https://element.eleme.cn/#/zh-CN">ElementUi</a>
                          <a href="https://vant-ui.github.io/vant/#/zh-CN">VantUi</a>
                          <a href="https://element.eleme.cn/#/zh-CN">ViteSvg</a>
                          <a href="https://www.naiveui.com/zh-CN">NaiveUi</a>
                          <a href="https://doc.vvbin.cn/guide/introduction.html">VbenAdmin</a>
                         </n-collapse-item>
                       </n-collapse-item>
                    <a href="https://vuejs.org/">Vue官方文档</a>
                  </n-collapse-item>
                  <n-collapse-item title="React.js" name="10">
                    <a href="https://react.dev/">React官方文档</a>
                  </n-collapse-item>
                </n-collapse>
              </n-collapse-item>
            </n-collapse>
          </div>
        </n-card>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<script lang="ts" setup>
import type { CollapseProps } from "naive-ui";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import Svg from "@/components/svgComponent/index.vue";
import { selectThemeOverrides , SelectThemeInput } from './Theme'
//手风琴部分
const DomNode: Ref<HTMLElement | null> = ref(null);
interface PropsType {
  isShowInfo: Boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  isShowInfo: Boolean,
});
const emits = defineEmits(["changeIsShowState"]);
let title = ref("LYC");
const handleItemHeaderClick: CollapseProps["onItemHeaderClick"] = ({}) => {
  if (props.isShowInfo == false) {
    //侧边信息栏打开
    title.value = "欢迎访问博客~";
    emits("changeIsShowState", !props.isShowInfo);
  } else {
    title.value = "LYC";
    emits("changeIsShowState", !props.isShowInfo);
  }
};
//手风琴结束
onMounted(() => { });
</script>
<style scoped>
.n-collapse>>>.n-collapse-item {
  margin: 0;
}

.info>>>.n-calendar-dates {
  display: flex;
  flex-wrap: wrap;
  color: #fff;
}

.info>>>.n-calendar-cell {
  width: 4.75rem
    /* 76/16 */
  ;
}

a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 0.1875rem
    /* 3/16 */
  ;
}

.currentList {
  width: 100%;
  list-style: none;
}

.Currentitem {
  display: flex;
  justify-content: space-between;
}

.currentInfo {
  display: flex;
  flex-wrap: nowrap;
}

.currentInfo span {
  flex: 1;
}

.shadowBox {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  pointer-events: none;
  opacity: 0.6;
  z-index: 10;
}

.info>>>.n-input {
  background-color: #ffffff1a;
  outline: none;
  font-size: 0.75rem
    /* 12/16 */
  ;
}

.n-card>>>.n-card__content {
  background: url("@/assets/o_221114135508_sidebar_bg_2.webp") center center / cover no-repeat rgb(34, 34, 34);
  height: 100%;
  color: #fff;
}

.adminInfo {
  display: flex;

  justify-content: space-between;
}

.info {
  position: fixed;
  transition: width 0.5s ease-in-out;
  left: 0;
  top: 0;
  width: 20%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  overflow-x: auto;
  height: 100%;
  color: #fff;
  background: url("@/assets/o_221114135508_sidebar_bg_2.webp") center center / cover no-repeat rgb(34, 34, 34);
  z-index: 999;
}
@media only screen and (max-width: 900px) {

  .info,
  .infos {
    display: none;
  }
}

.infos {
  position: fixed;
  left: 0;
  top: 0;
  width: 10%;
  transition: width 0.3s ease-in-out;
  overflow-x: auto;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
}</style>
