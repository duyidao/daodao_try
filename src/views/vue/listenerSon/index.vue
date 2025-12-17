<script setup lang="ts">
import Son from './son.vue'
import { ref } from 'vue'

const flag = ref(false)

function childMounted() {
  ElMessage.success("子组件已挂载")
  console.log('子组件已挂载')
}

function childUnMount() {
  ElMessage.success("子组件已卸载")
  console.log('子组件已卸载')
}
</script>

<template>
  <div>
    <span class="mr-20">I'm father</span>
    <el-button @click.stop="flag = !flag">{{ !flag ? '挂载子组件' : '卸载子组件' }}</el-button>
    <Son
      v-if="flag"
      @vue:mounted="childMounted"
      @vue:unmounted="childUnMount"
    ></Son>
  </div>
</template>

<style scoped>

</style>