import { watch, unref } from "vue";

export function useEvent(...args: any[]) {
  const el = typeof args[0] === "string" ? window : args.shift();
  return watch(
    () => unref(el),
    (val, _, onCleanup) => {
      if (!val) return;
      val.addEventListener(...args);
      onCleanup(() => val.removeEventListener(...args)); // 绑定当前el的解绑事件
    },
    {
      immediate: true,
    }
  );
}
