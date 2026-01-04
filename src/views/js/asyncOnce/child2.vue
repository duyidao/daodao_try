<script setup lang="ts">
  import { ref } from 'vue'
import { loadOnce } from './index'

const data = ref()

loadOnce().then(res => {
  data.value = res
})
</script>

<template>
  <el-descriptions title="child2" :column="2">
    <el-descriptions-item v-for="(value, key) in data" :label="key" :key="key">{{value}}</el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>

</style>