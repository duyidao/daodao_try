import { provide, inject } from "vue";

export const contextKey = Symbol("prrovideInjectContext");

export const provideContext = <T>(contextValue: T) => {
  provide(contextKey, contextValue);
  return contextValue;
};

export const injectContext = (value?: string) => {
  return inject(contextKey, value || "我是默认内容");
};
