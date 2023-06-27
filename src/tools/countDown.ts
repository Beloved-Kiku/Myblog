import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";
export function useCountDown() {
  const counter = ref(0);
  const { pause, resume } = useIntervalFn(
    () => {
      if (counter.value === 0) {
        pause();
      } else {
        counter.value--;
      }
    },
    1000,
    { immediate: false }
  );
  const start = (num: number) => {
    counter.value = num;
    resume();
  };

  return { counter, start };
}
