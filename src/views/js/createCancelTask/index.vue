<script setup lang="ts">
import { ref } from 'vue'

const data = ref('暂无数据')

function createCancelTask(task) {
  let cancel = () => {};
  return (...args) => {
    return new Promise((resolve, reject) => {
      cancel()
      cancel = () => { 
        resolve = reject = () => {} 
      } 
      task(...args).then(res => resolve(res)).catch(err => reject(err));
    });
  }
}

const getData = createCancelTask((title = '1') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(title)
    }, 2000)
  })
})

const getTitleData = (params) => {
  getData(params).then(res => {
    data.value = res
  })
}
</script>

<template>
  <div>
    <el-button @click="getTitleData('hello')">获取Hello</el-button>
    <el-button @click="getTitleData('world')">获取World</el-button>
    <el-button @click="getTitleData('daodao')">获取Daodao</el-button>
    <el-button @click="getTitleData('blog')">获取Blog</el-button>
    <div class="mt-20">
      <el-tag>{{data}}</el-tag>
    </div>
  </div>
</template>

<style scoped>

</style>