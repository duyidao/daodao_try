<script setup lang="ts">
import { injectContext } from './createContext'

const data = injectContext()
</script>

<template>
  <div class="my-20 ml-20">
    <h4>我是 2 号孙子组件的儿子组件，我接收参数</h4>
    <p>{{ data }}</p>
  </div>
</template>