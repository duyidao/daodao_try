import { provide, inject, computed } from 'vue'

export const contextKey = Symbol('prrovideInjectContext')

export const provideContext = (contextValue) => {
  provide(contextKey, contextValue)
  return contextValue
}

export const injectContext = (value?: string = '我是默认内容') => {
  return inject(contextKey, computed(() => value))
}
