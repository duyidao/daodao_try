<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import VueSortable from './useSortable.vue'

const list = ref([
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
  { id: 4, name: '赵六' },
  { id: 5, name: '钱七' },
])

const vueSortable = useTemplateRef('vueSortable')

const handleDestroy = () => {
  vueSortable.value.instance.destroy()
}
</script>

<template>
  <div>
    <div class="flex gap-40">
      <VueSortable ref="vueSortable" :animation="150" v-model="list">
        <template v-slot="{ instance }">
          <li v-for="item in list" :key="item.id" class="flex justify-center items-center w-120 h-40 bg-#7553db text-#fff rounded-5 cursor-pointer">{{ item.name }}</li>
        </template>
      </VueSortable>
      

      <code class="w-200">
        <pre v-for="item in list" :key="item.id" class="text-14">{{ item }}</pre>
      </code>
    </div>
    <el-button class="mt-20" @click="handleDestroy">手动销毁实例</el-button>
  </div>
</template>

<style scoped>
</style>