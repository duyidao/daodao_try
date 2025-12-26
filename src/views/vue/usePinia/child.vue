<script setup lang="ts">
import { usePinia } from './index'

const { count, addCount } = usePinia()
</script>

<template>
  <div class="flex items-center gap-20">
    <el-button @click="addCount(-1)">remove count</el-button>
    <el-input :value="count"
      type="number" />
  </div>
</template>

<style scoped></style>