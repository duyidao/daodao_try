<script setup lang="ts">
import { useTemplateRef, useAttrs } from 'vue'
import { useSortable } from './useSortable'

const modelValue = defineModel()

const containerRef = useTemplateRef('containerRef')

const instance = useSortable(containerRef, modelValue, useAttrs())
defineExpose({ instance })
</script>

<template>
  <ul class="flex flex-col gap-10 list-none" ref="containerRef">
    <slot :instance="instance"></slot>
  </ul>
</template>

<style scoped>

</style>