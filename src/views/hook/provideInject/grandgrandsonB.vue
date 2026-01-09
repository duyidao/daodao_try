<script setup lang="ts">
import { ref } from 'vue'
import { injectContextB } from './context'

const count = ref(0)
count.value = injectContextB()
</script>

<template>
  <div class="my-20 ml-20">
    <h4>我是孙子组件 B 的儿子组件，我接收参数</h4>
    <p>{{ count }}</p>
  </div>
</template>