<script setup lang="ts">
import MyInput from './myInput.vue'
import { ref, useTemplateRef } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

const inputValue = ref<string>('')

const myInputRef = ref()

// 获取内容
const myInputValue = ref('')
const getInputValue = () => {
  myInputValue.value = `子组件的内容是：${myInputRef.value.ref.value || '无'}`
}
</script>

<template>
  <div>
    <el-button class="mb-20"
      @click="getInputValue">
      点击获取子组件内容
    </el-button>
    <el-button class="mb-20"
      @click="myInputRef.clear()">
      点击调用clear方法清空内容
    </el-button>
    <el-button class="mb-20"
      @click="myInputRef.focus()">
      点击聚焦
    </el-button>
    <MyInput v-model="inputValue"
      ref="myInputRef"
      placeholder="请输入内容"
      clearable>
      <template #suffix>
        <el-icon class="el-input__icon">
          <calendar />
        </el-icon>
      </template>
      <template #prefix>
        <el-icon class="el-input__icon">
          <search />
        </el-icon>
      </template>
    </MyInput>
    <el-tag v-show="myInputValue"
      class="mt-20">{{ myInputValue }}</el-tag>
  </div>
</template>

<style scoped></style>