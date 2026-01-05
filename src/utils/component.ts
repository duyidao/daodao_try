interface ComponentMeta {
  name: string;
}

const jsComponent = {
  "/js/createCancelTask": {
    name: "竞态取消",
  },
  "/js/objectLoop": {
    name: "对象循环引用",
  },
  "/js/asyncOnce": {
    name: "相同请求复用",
  },
} as const;

const reDevelopComponent = {
  "/reDevelop/el-button": {
    name: "二开el-button",
  },
  "/reDevelop/el-dialog": {
    name: "二开el-dialog",
  },
  "/reDevelop/el-input": {
    name: "二开el-input",
  },
} as const;

const vueComponent = {
  "/vue/listenerSon": {
    name: "@vue:mounted监听子组件生命周期",
  },
  "/vue/useTemplateRef": {
    name: "useTemplateRef实现原理",
  },
  "/vue/defineAsyncComponent": {
    name: "defineAsyncComponent实现原理",
  },
} as const;

const viteComponent = {
  "/vite/preloadImage": {
    name: "图片预加载",
  },
} as const;

const hookComponent = {
  "/hook/customRefLoading": {
    name: "请求loading封装",
    tags: ['customRef']
  },
  "/hook/stateReset": {
    name: "状态重置",
  },
  "/hook/useEventListener": {
    name: "组合式函数封装",
  },
  "/hook/usePinia": {
    name: "全局状态管理",
  },
  "/hook/provideInject": {
    name: "封装provide/inject",
  },
  "/hook/defineComponent": {
    name: "组件内模板复用",
  },
} as const;

export const component: Record<string, ComponentMeta> = {
  ...jsComponent,
  ...reDevelopComponent,
  ...vueComponent,
  ...viteComponent,
  ...hookComponent,
};
