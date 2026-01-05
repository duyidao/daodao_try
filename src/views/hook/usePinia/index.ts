import { ref, type Ref } from "vue";

const defineStore = <T>(fn: () => T) => {
  let state: T;
  return () => {
    if (state) {
      return state;
    }
    return (state = fn());
  };
};

export const usePinia = defineStore<{
  count: Ref<number>;
  addCount: (number?: number) => void;
}>(() => {
  const count = ref(0);
  const addCount = (number: number = 1) => {
    count.value += number;
  };

  return {
    count,
    addCount,
  };
});
