<script setup lang="ts">
import { ref } from 'vue'
import { injectContextB } from './context'
import GrandgrandsonB from './grandgrandsonB.vue'

const count = ref(0)
count.value = injectContextB()
</script>

<template>
  <div class="my-20 ml-20">
    <h3>我是孙子组件 B，我接收参数</h3>
    <p>{{ count }}</p>
    <GrandgrandsonB />
  </div>
</template>