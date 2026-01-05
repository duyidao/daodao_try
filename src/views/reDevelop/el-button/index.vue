<script setup lang="ts">
import MyButton from './myButton.vue'

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 2000)
  })
}
</script>

<template>
  <div class="flex flex-col gap-10">
    <MyButton @click="getData">点击模拟调用接口</MyButton>
    <MyButton @click="getData">点击模拟调用接口</MyButton>
    <MyButton @click="getData">点击模拟调用接口</MyButton>
    <MyButton @click="getData">点击模拟调用接口</MyButton>
    <MyButton @click="getData">点击模拟调用接口</MyButton>
  </div>
</template>

<style scoped></style>