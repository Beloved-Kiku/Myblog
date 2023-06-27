import { ref, watch, Ref } from "vue";

function useDebounce(value: Ref, delay: number): Ref {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  const debouncedValue = ref(value);

  watch(
    () => value,
    () => {
      clearTimeout(timerId!);
      timerId = setTimeout(() => {
        debouncedValue.value = value;
      }, delay) as unknown as ReturnType<typeof setTimeout>;
    }
  );

  return debouncedValue.value;
}
export default useDebounce;
