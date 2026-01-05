<script setup lang="ts">
import { useResetRefByFn, useResetRefByObj, useResetReactive } from './reset'

const { state: fnRefState, reset: fnRefReset } = useResetRefByFn(() => ({
  a: 1,
  b: 2,
  c: [3, 4, 5]
}))

const { state: objRefState, reset: objRefReset } = useResetRefByObj<{ name: string, age: number, address: string }>({
  name: '刀刀',
  age: 25,
  address: '广东省广州市增城区广州华商学院'
})

const [reactiveState, reactiveReset] = useResetReactive<{ url: string, type: string, tag: string }>({
  url: '123',
  type: 'vue',
  tag: 'pr'
})
</script>

<template>
  <div>
    <el-form :inline="true"
      :model="fnRefState">
      <el-form-item label="a">
        <el-input type="number"
          v-model="fnRefState.a" />
      </el-form-item>
      <el-form-item label="b">
        <el-input type="text"
          v-model="fnRefState.b" />
      </el-form-item>
      <el-form-item label="c">
        <el-select v-model="fnRefState.c"
          class="min-w-200"
          clearable
          multiple>
          <el-option v-for="item in 5"
            :key="item"
            :label="item"
            :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="fnRefReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="objRefState"
      class="max-w-500 my-40">
      <el-form-item label="姓名">
        <el-input type="text"
          v-model="objRefState.name" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input type="number"
          v-model="objRefState.age" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea"
          v-model="objRefState.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="objRefReset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true"
      :model="reactiveState">
      <el-form-item label="url">
        <el-input type="number"
          v-model="reactiveState.url" />
      </el-form-item>
      <el-form-item label="type">
        <el-input type="text"
          v-model="reactiveState.type" />
      </el-form-item>
      <el-form-item label="tag">
        <el-input type="text"
          v-model="reactiveState.tag" />
      </el-form-item>
      <el-form-item>
        <el-button @click="reactiveReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>