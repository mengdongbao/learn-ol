<script setup lang="ts">
import { useRefsCounterStore } from '@/stores/counter'
const { count } = useRefsCounterStore()
</script>

<template>
  <div class="page-test-view">
    <router-link :to="{name: 'baseMap'}">baseMap</router-link>
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
