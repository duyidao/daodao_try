<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import { ElButton } from 'element-plus'

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
const loading = ref(false)

const click = async () => {
  console.log('123', 123);
  loading.value = true
  try {
    await (attrs.onClick as Function)?.()
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <el-button :loading="loading"
    @click="click">
    <slot />
  </el-button>
</template>

<style scoped></style>