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
} as const;

const packageComponent = {
  "/package/el-button": {
    name: "二开el-button",
  },
  "/package/el-dialog": {
    name: "二开el-dialog",
  },
} as const;

const vueComponent = {
  "/vue/customRefLoading": {
    name: "请求loading封装",
  },
  "/vue/defineComponent": {
    name: "组件内模板复用",
  },
  "/vue/provideInject": {
    name: "封装provide/inject",
  },
  "/vue/stateReset": {
    name: "状态重置",
  },
  "/vue/listenerSon": {
    name: "父组件监听子组件生命周期",
  },
  "/vue/useTemplateRef": {
    name: "useTemplateRef实现原理",
  },
  "/vue/useEventListener": {
    name: "组合式函数封装",
  },
  "/vue/preloadImage": {
    name: "图片预加载",
  },
} as const;

export const component: Record<string, ComponentMeta> = {
  ...jsComponent,
  ...packageComponent,
  ...vueComponent,
};
