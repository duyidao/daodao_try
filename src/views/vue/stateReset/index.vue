<script setup lang="ts">
import { ref } from 'vue'
import { useResetRefByFn, useResetRefByObj, useResetReactive } from './reset'

const { state, reset } = useResetRefByFn(() => ({
  a: 1,
  b: 2,
  c: [3, 4, 5]
}))

const { state: state2, reset: reset2 } = useResetRefByObj({
  name: '刀刀',
  age: 25,
  address: '广东省广州市增城区广州华商学院'
})

const [data, resetData] = useResetReactive({
  url: '123',
  type: 'vue',
  tag: 'pr'
})
</script>

<template>
  <div>
    <div class="fnRef">
      <input type="number" v-model="state.a" />
      <input type="text" v-model="state.b" />
      <select :value="3">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button @click="reset">重置</button>
    </div>
    <div class="objRef">
      <input type="text" v-model="state2.name" />
      <input type="number" v-model="state2.age" />
      <textarea v-model="state2.address"></textarea>
      <button @click="reset2">重置</button>
    </div>
    <div class="objReactive">
      <input type="text" v-model="data.type" />
      <input type="number" v-model="data.url" />
      <input type="text" v-model="data.tag" />
      <button @click="resetData">重置</button>
    </div>
  </div>
</template>

<style scoped>

</style>