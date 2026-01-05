<script setup lang="ts">
import { injectContext } from './createContext'

const data = injectContext()
</script>

<template>
  <div class="my-20 ml-20">
    <h3>我是 1 号孙子组件，我接收参数</h3>
    <p>{{ data }}</p>
  </div>
</template>