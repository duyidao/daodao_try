import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/js',
      component: () => import('@/views/home.vue'),
      children: [
        {
          path: 'js',
          redirect: '/js/createCancelTask',
          children: [
            {
              path: 'createCancelTask',
              name: 'createCancelTask',
              component: () => import('@/views/js/createCancelTask/index.vue')
            },
            {
              path: 'objectLoop',
              name: 'objectLoop',
              component: () => import('@/views/js/objectLoop/index.vue')
            },
          ]
        },
        {
          path: 'package',
          redirect: '/package/elDialog',
          children: [
            {
              path: 'elDialog',
              name: 'myElDialog',
              component: () => import('@/views/package/el-dialog/index.vue')
            },
            {
              path: 'elButton',
              name: 'myElButton',
              component: () => import('@/views/package/el-button/index.vue')
            },
          ]
        },
        {
          path: 'vue',
          redirect: '/vue/provideInject',
          children: [
            {
              path: 'provideInject',
              name: 'provideInject',
              component: () => import('@/views/vue/provideInject/index.vue')
            },
            {
              path: 'listenerSon',
              name: 'listenerSon',
              component: () => import('@/views/vue/listenerSon/index.vue')
            },
            {
              path: 'customRefLoading',
              name: 'customRefLoading',
              component: () => import('@/views/vue/customRefLoading/index.vue')
            },
            {
              path: 'stateReset',
              name: 'stateReset',
              component: () => import('@/views/vue/stateReset/index.vue')
            },
            {
              path: 'defineComponent',
              name: 'defineComponent',
              component: () => import('@/views/vue/defineComponent/index.vue')
            }
          ]
        }
      ]
    }
  ],
})

export default router
