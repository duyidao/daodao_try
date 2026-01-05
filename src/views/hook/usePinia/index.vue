<script setup lang="ts">
import { usePinia } from './index'
import Child from './child.vue'
const { count, addCount } = usePinia()
</script>

<template>
  <div class="flex items-center">
    <el-button @click="addCount(1)">add count</el-button>
    <span class="ml-20">count: {{ count }}</span>
  </div>
  <Child class="mt-20" />
</template>

<style scoped></style>