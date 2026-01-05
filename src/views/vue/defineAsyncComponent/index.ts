import { h, shallowRef } from 'vue'

interface Options {
  loader: () => Promise<any>,
  loadingComponent?: () => any,
  errorComponent?: () => any,
  timeout?: number
}

export const defineAsyncComponent = (options: Options | (() => Promise<any>)) => {
  // 不再考虑options的类型做不同的使用，如果它是函数，那么就转换为一个对象
  if (typeof options === 'function') {
    options = { loader: options }
  }
  const defineComponent = () => h('div', '') // 默认占位组件

  const { loader, loadingComponent = defineComponent, errorComponent = defineComponent, timeout = 5000 } = options

  // 再写一个函数，返回一个new Promise。这样就能手动修改new Promise的状态
  const loaderComponent = () => {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        reject('加载超时')
      }, timeout)
      loader().then(resolve, reject)
    })
  }

  return {
    setup(_: any, { slots, attrs }: any) {
      // 这是一个函数式组件
      const component = shallowRef(loadingComponent)
      // 执行回调函数，获取组件
      loaderComponent()
        .then((res: any) => {
          if (res && res[Symbol.toStringTag] === 'Module') {
            component.value = res.default
          }
          else {
            component.value = res
          }
        })
        .catch(() => {
          component.value = errorComponent
        })
      return () => {
        return h(component.value, attrs, slots)
      }
    }
  }
}