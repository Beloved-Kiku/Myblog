<template>
  <KeepAlive>
    <n-tabs
      type="card"
      @update:value="handleUpdateValue"
      :default-value="defaultValue"
    >
      <n-tab-pane
        v-for="x in result"
        :key="x.id"
        :tab="x.article_title"
        :name="x.article_title"
      >
        <Details :KeyWord="defaultValue"></Details>
        xxx
      </n-tab-pane>
    </n-tabs>
  </KeepAlive>
</template>

<script lang="ts" setup>
import Details from "./details/details.vue";
import { getHeadLine } from "@/api/content/index.js";
import { Ref, ref } from "vue";
let result: Ref<String | any> = ref("");
let defaultValue: Ref<String | any> = ref("JavaScript");
getHeadLine().then((res: any) => {
  defaultValue.value = res.data[0].article_title;
  result.value = res.data;
});

const handleUpdateValue = (value: string) => {
  defaultValue.value = value;
};
</script>
