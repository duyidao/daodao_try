<script setup lang="ts">
import { ref } from 'vue'
import { injectContextB } from './context'
import GrandSonB from './grandsonB.vue'

const count = ref(0)
count.value = injectContextB()
</script>

<template>
  <div>
    <h2>我是子组件 B，我接收参数</h2>
    <p>{{ count }}</p>
    <GrandSonB />
  </div>
</template>