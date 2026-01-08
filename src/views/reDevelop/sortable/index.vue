<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import { useSortable } from './useSortable'

const list = ref([
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
  { id: 4, name: '赵六' },
  { id: 5, name: '钱七' },
])

const containerRef = useTemplateRef('containerRef')

const instance = useSortable(containerRef, list, {
  animation: 150,
  onUpdate: (e: any) => {
    console.log('我自己的需求', e);
  }
})

const handleDestroy = () => {
  instance.value.destroy()
}
</script>

<template>
  <div>
    <div class="flex gap-40">
      <ul ref="containerRef" class="flex flex-col gap-10 list-none">
        <li v-for="item in list" :key="item.id" class="flex justify-center items-center w-120 h-40 bg-#7553db text-#fff rounded-5 cursor-pointer">{{ item.name }}</li>
      </ul>

      <code class="w-200">
        <pre v-for="item in list" :key="item.id" class="text-14">{{ item }}</pre>
      </code>
    </div>
    <el-button class="mt-20" @click="handleDestroy">手动销毁实例</el-button>
  </div>
</template>

<style scoped>
</style>