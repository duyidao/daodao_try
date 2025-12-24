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
  <MyButton @click="getData">点击模拟调用接口</MyButton>
  <MyButton @click="getData">点击模拟调用接口</MyButton>
  <MyButton @click="getData">点击模拟调用接口</MyButton>
  <MyButton @click="getData">点击模拟调用接口</MyButton>
  <MyButton @click="getData">点击模拟调用接口</MyButton>
</template>

<style scoped></style>