<script setup lang="ts">
import { ref } from 'vue'
import { injectContextA } from './context'
import GrandSonA from './grandsonA.vue'

const message = ref('')
message.value = injectContextA()
</script>

<template>
  <div>
    <h2>我是子组件A，我接收参数</h2>
    <p>{{ message }}</p>
    <GrandSonA />
  </div>
</template>