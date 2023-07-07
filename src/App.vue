<template>
  <div :class="{ darkbox: themeDark, lightbox: !themeDark }">
    <n-config-provider

      :theme="darkTheme"
      :theme-overrides="themeDark ? darkTheme : lightThemeOverrides"
    >
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>
<script setup lang="ts">
import { url } from "inspector";
import { NConfigProvider, darkTheme, GlobalThemeOverrides } from "naive-ui";

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontSize:'12px', 
    primaryColor: "#22222",
  },
  Card: {
    color: "#222222",
    colorEmbedded: "#ffffff",
    titleTextColor: "#222222",
    textColor: "#222222",
  },
  Tabs: {
    tabTextColorActiveLine: "#ffffff",
    tabColor: "#333",
  },
  // ...
};
const themeDark = true;
const style = document.createElement('style');

//import Music from './Music/Music.vue';
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
html #app:before {
  position: fixed;
  content: "";
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  opacity: 0.2;
  transition: background-color 0.8s;
  pointer-events: none;
}
.lightbox {
  width: 100%;
  max-width: 100%;
  overflow-y: auto;
  background: url(./assets/前端.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.darkbox {
  width: 100%;
  max-width: 100%;
  overflow-y: auto;
  background-color: #222222;
}
</style>
