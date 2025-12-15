import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/vue',
      component: () => import('@/views/home.vue'),
      children: [
        {
          path: '/vue',
          redirect: '/vue/provideInject',
          children: [
            {
              path: '/vue/provideInject',
              name: 'provideInject',
              component: () => import('@/views/vue/provideInject/index.vue')
            },
            {
              path: '/vue/listenerSon',
              name: 'listenerSon',
              component: () => import('@/views/vue/listenerSon/index.vue')
            },
            {
              path: '/vue/customRefLoading',
              name: 'customRefLoading',
              component: () => import('@/views/vue/customRefLoading/index.vue')
            },
            {
              path: '/vue/stateReset',
              name: 'stateReset',
              component: () => import('@/views/vue/stateReset/index.vue')
            },
            {
              path: '/vue/defineComponent',
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
