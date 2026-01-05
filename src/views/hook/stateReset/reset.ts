// reset.ts
import { ref, reactive } from "vue";

/**
 * 重置变量：函数写法
 * @params cb: () => T 返回值的函数
 * @returns {state, reset} state: ref<T> reset: () => void
 */
export function useResetRefByFn<T>(cb: () => T) {
  const state = ref<T>(cb());
  const reset = () => {
    state.value = cb();
  };
  return {
    state,
    reset,
  };
}

// 默认深拷贝的函数
const defaultClone = (data: any) => {
  if (!data || typeof data !== "object") {
    return data;
  }
  return JSON.parse(JSON.stringify(data));
};

/**
 * 重置变量：对象写法
 * @params data: T 需要重置的对象
 * @params clone: (data: T) => T 深拷贝函数
 */
export function useResetRefByObj<T>(data: T, clone = defaultClone) {
  const state = ref<T>(data);
  const initialValue = clone(data);
  const reset = () => {
    state.value = clone(initialValue);
  };
  return {
    state,
    reset,
  };
}

/**
 * 重置对象：reactive
 * @params data: T 需要重置的对象
 * @params clone: (data: T) => T 深拷贝函数
 * @returns {state, reset} state: reactive<T> reset: () => void
 */
export function useResetReactive<T extends Record<string, any>>(
  data: T,
  clone = defaultClone
) {
  const state = reactive<T>(clone(data));
  const reset = () => {
    // 获取原始数据的所有键
    const keys = Object.keys(data);
    // 删除所有现有属性
    keys.forEach((key: string) => {
      delete state[key as string];
    });
    // 重新赋值
    Object.assign(state, clone(data));
  };
  return [state, reset] as const;
}
