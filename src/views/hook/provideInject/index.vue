<script setup lang="ts">
import { ref, watch } from 'vue'
import { provideContext, injectContext } from './createContext'
import Son from './son.vue'
import Son2 from './son2.vue'

const title = ref<string>('传递的参数')
provideContext(title)

watch(title, (newVal) => {
  provideContext(newVal)
})
</script>

<template>
  <div>
    <h1 class="flex items-center mb-20">
      <span>我是最上级的祖宗组件：</span>
      <el-input class="!w-300" v-model="title"></el-input>
    </h1>
    <Son />
    <Son2 />
  </div>
</template>

<style scoped>

</style>