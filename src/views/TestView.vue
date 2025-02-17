<script setup lang="ts">
import { useRefsCounterStore } from '@/stores/counter'
const { count } = useRefsCounterStore()
</script>

<template>
  <div class="page-test-view">
    <h1>Hello World, count is {{ count }}</h1>
    <button @click="count += 1">count + 1</button>
  </div>
</template>

<style scoped lang="scss">
.page-test-view {
  height: 100vh;
  width: 100vw;

  h1 {
    margin: 0;
  }
}
</style>
