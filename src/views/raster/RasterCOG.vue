<script setup lang="ts">
import GeoTIFF from 'ol/source/GeoTIFF.js';
import { useInit } from '../base/hooks/useInit';
import {onMounted} from 'vue';
// import TileLayer from 'ol/layer/Tile';
import TileLayer from 'ol/layer/WebGLTile.js';

const handler = useInit()
onMounted(() => {
    const source = new GeoTIFF({
        sources: [
            {
                // url: '/data/LUCC30.tif',
                url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif',
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