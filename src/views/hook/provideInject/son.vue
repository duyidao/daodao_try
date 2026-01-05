<script setup lang="ts">
import { injectContext } from './createContext'
import GrandSon from './grandson.vue'

const data = injectContext()
</script>

<template>
  <div class="ml-20">
    <h2>我是 1 号子组件，我接收参数</h2>
    <p>{{ data }}</p>
    <GrandSon />
  </div>
</template>