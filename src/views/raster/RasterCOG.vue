<script setup lang="ts">
import GeoTIFF from 'ol/source/GeoTIFF.js';
import { useInit } from '../base/hooks/useInit';
import {onMounted} from 'vue';
import TileLayer from 'ol/layer/WebGLTile.js';

const handler = useInit()
onMounted(() => {
    const source = new GeoTIFF({
        sources: [
            {
                url: '/data/LUCC30.tif',
            },
        ],
    });

    const layers = handler.map.getLayers()
    layers.push(new TileLayer({
        source
    }))
})

</script>

<template>
    <div id="map" style="height: 600px;"></div>
</template>

<style scoped lang="less"></style>