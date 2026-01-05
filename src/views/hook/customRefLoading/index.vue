<script setup lang="ts">
import { ref } from 'vue'
import { loading } from './loading'

interface TableItem {
  hitokoto: string
  from: string
  from_who: string
}

const tableData = ref<TableItem[]>([])

const wordList = ref(['当前无模拟接口', '当前无模拟接口', '当前无模拟接口'])

const mockFetch = (type = 'k', index = 0) => {
  loading.value = true
  wordList.value[index] = '正在请求接口中'
  const startTime = Date.now()
  return new Promise((resolve) => {
    fetch('https://v1.hitokoto.cn/?c=' + type)
      .then((res) => res.json())
      .then((res: TableItem) => {
        const endTime = Date.now()
        tableData.value.push(res)
        loading.value = false
        wordList.value[index] =
          '接口请求成功，请求时间' + (endTime - startTime) / 1000 + 's'
        resolve(undefined)
      })
  })
}

const mockFetchFn = () => {
  Promise.all([mockFetch(), mockFetch('c', 1), mockFetch('d', 2)])
}
</script>

<template>
  <div>
    <el-button :loading="loading"
      @click="mockFetchFn">点击调用三个接口</el-button>
    <div class="flex items-center gap-20 my-20">
      <span v-for="(item, index) in wordList"
        :key="index">{{ item }}</span>
    </div>
    <el-table :data="tableData"
      v-loading="loading">
      <el-table-column prop="hitokoto"
        label="一言" />
      <el-table-column prop="from"
        label="来源"
        width="180" />
      <el-table-column prop="from_who"
        label="来源者"
        width="180" />
    </el-table>
  </div>
</template>

<style scoped></style>
