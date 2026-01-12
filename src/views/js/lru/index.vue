<script setup lang="ts">
import { ref } from 'vue'

class LRUCache {
  #cache
  max
  constructor(max = 4) {
    this.max = max
    this.#cache = new Map()
  }

  get(key) {
    if (this.#cache.has(key)) {
      const value = this.#cache.get(key)
      this.#cache.delete(key) // 删除原来的数据
      this.#cache.set(key, value) // 重新插入数据
      return value
    }
    return undefined
  }

  set(key, value) {
    if (this.#cache.has(key)) {
      this.#cache.delete(key) // 删除原来的数据
    } else if (this.#cache.size >= this.max) {
      this.#cache.delete(this.#cache.keys().next().value) // 删除最久未使用的属性
    }
    this.#cache.set(key, value) // 插入新的数据
  }

  has(key) {
    return this.#cache.has(key)
  }

  get entries() {
    return Array.from(this.#cache.entries()).map(([k, v]) => ({
      key: k,
      value: v,
    }))
  }
}

const cache = new LRUCache()

const data = ref(cache.entries)
const key = ref('')
const value = ref('')

const add = () => {
  cache.set(key.value, value.value)
  key.value = ''
  value.value = ''
  data.value = cache.entries
}
</script>

<template>
  <div>
    <div class="flex items-center mb-20 gap-20">
      <el-input v-model="key" placeholder="请输入key" clearable></el-input>
      <el-input v-model="value" placeholder="请输入value" clearable></el-input>
      <el-button @click="add">添加</el-button>
    </div>
    <el-table :data="data">
      <el-table-column prop="key" label="key"></el-table-column>
      <el-table-column prop="value" label="value"></el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
