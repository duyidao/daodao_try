<script setup lang="ts">
import { useTemplateRef, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useEvent } from './index'

const buttonRef = useTemplateRef('buttonRef')

const clickFn = () => {
  ElMessage.success('点击成功')
}

const stop = useEvent(buttonRef, 'click', clickFn)

const showElement = ref(false)
</script>

<template>
  <el-button @click="showElement = !showElement">{{ showElement ? '隐藏' : '挂载' }}组件</el-button>
  <el-button @click="stop">停止监听</el-button>
  <h1 v-if="showElement"
    class="mt-10"
    ref="buttonRef">Hello vue3</h1>
</template>

<style scoped></style>