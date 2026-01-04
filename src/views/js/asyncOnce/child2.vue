<script setup lang="ts">
  import { ref } from 'vue'
import { loadOnce } from './index'

const data = ref()

loadOnce().then(res => {
  data.value = res
})
</script>

<template>
  <div>child2: {{data}}</div>
</template>

<style scoped>

</style>