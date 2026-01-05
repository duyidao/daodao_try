<script setup lang="ts">
import { h } from 'vue'
import { defineAsyncComponent } from './index'

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./test.vue'),
  loadingComponent: () => h('div', 'loading...'),
  errorComponent: () => h('div', 'load error, please retry'),
})
</script>

<template>
  <AsyncComponent msg="父组件传递的信息">
    <div>父组件传递的插槽</div>
  </AsyncComponent>
</template>

<style scoped>

</style>