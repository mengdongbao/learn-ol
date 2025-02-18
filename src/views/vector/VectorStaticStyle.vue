<script setup lang="ts">
import { useInit } from '@/views/base/hooks/useInit.ts'
import axios from 'axios';
import { GeoJSON } from 'ol/format';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
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
      vectorLayer.setStyle(new Style({
        stroke: new Stroke({
            width: 3,
            color: 'red'
        }),
        fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)'
        })
      }))

      handler.map!.getLayers().push(vectorLayer)

    })
  })
</script>

<template>
  <div id="map" style="height: 600px"></div>
</template>

<style scoped></style>
