import { watch, unref, type Ref, type ShallowRef } from "vue";

export function useEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void;
export function useEvent<K extends keyof HTMLElementEventMap>(
  el: Ref<HTMLElement | null> | ShallowRef<HTMLElement | null>,
  type: K,
  listener: (ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void;
export function useEvent(...args: any[]): () => void {
  const el = typeof args[0] === "string" ? window : args.shift();
  return watch(
    () => unref(el),
    (val, _, onCleanup) => {
      if (!val) return;
      const element = val.ref || val;
      element.addEventListener(...args);
      onCleanup(() => element.removeEventListener(...args)); // 绑定当前el的解绑事件
    },
    {
      immediate: true,
    }
  );
}
