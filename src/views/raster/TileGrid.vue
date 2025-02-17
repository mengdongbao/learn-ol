<script setup lang="ts">
import { onMounted } from 'vue';
import { useInit } from '../base/hooks/useInit';
import { XYZ } from 'ol/source';

const handler = useInit()
onMounted(() => {
    const { map } = handler
    const source = new XYZ()
    const grid = source.getTileGrid()
    window.grid = grid
})
</script>

<template>
  <div id="map" style="height: 600px;"></div>
</template>

<style scoped lang="less">
</style>