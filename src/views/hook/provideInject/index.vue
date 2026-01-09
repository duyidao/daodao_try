<script setup lang="ts">
import { ref, watch } from 'vue'
import { provideContextA, provideContextB } from './context'
import SonA from './sonA.vue'
import SonB from './sonB.vue'

const message = ref<string>('传递的参数')
provideContextA(message)

const count = ref<number>(0)
provideContextB(count)
</script>

<template>
  <div class="flex gap-20">
    <el-card class="flex-1">
      <template #header>
        <h1>
          <p>我是最上级的祖宗组件</p>
          <el-input class="!w-300" v-model="message"></el-input>
        </h1>
      </template>
      <SonA />
    </el-card>
    <el-card class="flex-1">
      <template #header>
        <h1>
          <p>我是最上级的祖宗组件</p>
          <el-input-number class="!w-300" v-model="count"></el-input-number>
        </h1>
      </template>
      <SonB />
    </el-card>
  </div>
</template>

<style scoped>

</style>