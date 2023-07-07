<template>
  <div :class="{ defCard:!isFixed, fixedCard :isFixed}" v-show="isShow">
    <div class="timeCard">
      <div class="time-year-mouth-date">
        {{ CurrentTime.currentYear+'年'+CurrentTime.currentMonth+'月'+CurrentTime.currentDay+'日' }}
    </div>
      <div class="time-text">
        {{ CurrentTime.currentDateFormat }}
      </div>
      <div class="time-day">
        {{ CurrentTime.currentWeekDay }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash';
import {ref,onBeforeUnmount,Ref,toRef} from  'vue'
import  currentDate  from '@/tools/currentDate.ts'
//处理滚动事件
 let isShow =ref(false)
let isFixed = ref(false)
const handleScroll = debounce(() => {
     const scrollHeight = window.scrollY || document.documentElement.scrollTop;;
     const showTriggerHeight = 240
     const FixedTriggerHeight = 790
     if(scrollHeight >= showTriggerHeight){
        isShow.value = true
     }
     else{
        isShow.value  =false
     }

     if(scrollHeight>=FixedTriggerHeight){
        isFixed.value =true
     }
     else{
        isFixed.value =false
     }
});
// 监听滚动事件
window.addEventListener('scroll', handleScroll);
onBeforeUnmount(()=>{
window.removeEventListener('scroll',handleScroll)
})
//生成实时时间
interface DateType {
    currentDateFormat?: string;
    currentYear?: number;
    currentMonth?: number;
    currentDay?: number;
    currentWeekDay?:string[]
}
const CurrentTime:Ref<DateType>  = ref({})
setInterval(()=>{
    CurrentTime.value = currentDate()
},1000)


</script>
<style scoped>
.fixedCard{
  margin-top:3.125rem /* 50/16 */ /* 30/16 */;
  padding: 1.25rem /* 20/16 */;
  width: 20%;
  height: 9.375rem /* 150/16 */;
  margin-bottom: 1%;
  border-radius: 10px;
  background-color: #222222;
  transition: all .8s;
  position: fixed;
  top: 0.25rem /* 100/16 */;
  right: 4rem /* 30/16 */;
}
.defCard {
  margin-top:2.125rem /* 50/16 */ /* 30/16 */;
  padding: 1.25rem /* 20/16 */;
  width: 30%;
  height: 9.375rem /* 150/16 */;
  margin-bottom: 1%;
  border-radius: 10px;
  background-color: #222222;
  transition: all .8s;}
.time-text{
    font-size: 3rem;
    font-family: "AAA"
}

.timeCard {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.time-year-mouth-date {
  font-size: 1.1rem;
  white-space: nowrap;
}
.time-day {
  font-size: 1.1rem;
  margin-top: 0.625rem /* 10/16 */;
}
</style>
