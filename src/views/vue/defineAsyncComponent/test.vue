<script setup lang="ts">
interface Props {
  msg?: string;
}

withDefaults(defineProps<Props>(), {
  msg: 'Hello World'
})
</script>

<template>
  <div>
    <h1>Child component: Test</h1>
    <p>{{ msg }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>