import { customRef } from 'vue'

export function loading = customRef(() => {
  let loadingCount = 0;

  return {
    get() {
      track();
      return loadingCount > 0;
    },
    set(value) {
      if (value) {
        loadingCount++;
      } else {
        loadingCount--;
      }
      loadingCount = Math.max(loadingCount, 0);
      trigger();
    }
  };
})