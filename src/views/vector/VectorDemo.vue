<script setup lang="ts">
import { useInit } from '@/views/base/hooks/useInit.ts'
import { useVector } from '@/views/vector/hooks/useVector.ts'
import axios from 'axios';
import { GeoJSON } from 'ol/format';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { onMounted } from 'vue';

const handler = useInit()
onMounted(() => {
    axios.get('/data/china.json').then(res => {
      const vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(res.data),
      })
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      })
      handler.map!.getLayers().push(vectorLayer)
    })
  })
</script>

<template>
  <div id="map" style="height: 600px"></div>
</template>

<style scoped></style>
