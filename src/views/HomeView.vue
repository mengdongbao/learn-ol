<script setup lang="ts">
</script>

<template>
  <div class="page-test-view">
    <div>
      <router-link :to="{name: 'baseMap'}">基本地图</router-link>
    </div>
    <div>
      <router-link :to="{name: 'vectorMap'}">矢量地图</router-link>
    </div>
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
