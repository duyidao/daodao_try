<script setup lang="ts">
import { ref } from 'vue'
import { injectContextA } from './context'

const message = ref('')
message.value = injectContextA()
</script>

<template>
  <div class="my-20 ml-20">
    <h3>我是孙子组件 A，我接收参数</h3>
    <p>{{ message }}</p>
  </div>
</template>