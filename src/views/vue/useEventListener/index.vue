<script setup lang="ts">
import { useTemplateRef, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useEvent } from './index'

const buttonRef = useTemplateRef('buttonRef')

const clickFn = () => {
  ElMessage.success('点击成功')
}

const stop = ref()
const init = () => {
  stop.value = useEvent(buttonRef, 'click', clickFn)
}
init()

const isStop = ref(false)
const stopFn = () => {
  isStop.value ? init() : stop.value()
  isStop.value = !isStop.value
}

const showElement = ref(false)
const btnRef = useTemplateRef('btnRef')
useEvent(btnRef, 'click', () => {
  ElMessage.success('点击按钮成功')
})
</script>

<template>
  <el-button @click="showElement = !showElement">{{ showElement ? '隐藏' : '挂载' }}组件</el-button>
  <el-button v-if="showElement"
    @click="stopFn">{{ isStop ? '重新' : '停止' }}监听</el-button>
  <h1 v-if="showElement"
    class="mt-10"
    ref="buttonRef">Hello vue3</h1>
  <el-button ref="btnRef">click me</el-button>
</template>

<style scoped></style>