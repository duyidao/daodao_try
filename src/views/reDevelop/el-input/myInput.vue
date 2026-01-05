<script lang="ts" setup>
import { ElInput, type InputProps } from "element-plus";
import { h, getCurrentInstance, type ComponentInstance, type VNodeRef } from 'vue'

const props = defineProps<Partial<InputProps>>();
const vm = getCurrentInstance();
const changeRef = ((inputInstance: {}) => {
  if (!vm) return;
  vm.exposed = vm.exposeProxy = inputInstance || {};
}) as VNodeRef

defineExpose({} as ComponentInstance<typeof ElInput>)
</script>

<template>
  <component :is="h(ElInput as any, { ...$attrs, ...props, ref: changeRef }, $slots)">
  </component>
</template>