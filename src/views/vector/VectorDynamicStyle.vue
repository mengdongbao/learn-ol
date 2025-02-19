<script setup lang="ts">
import { useInit } from '@/views/base/hooks/useInit.ts'
import axios from 'axios';
import { GeoJSON } from 'ol/format';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import { onMounted } from 'vue';

const handler = useInit()

function getRandomHexColor() {
    // 生成随机的16进制颜色值
    const hex = Math.floor(Math.random() * 16777215).toString(16);

    // 确保颜色值为6位（不足6位时前面补0）
    return `#${hex.padStart(6, '0')}`;
}

function colorHelper() {
    const m: Record<string, string> = {};

    return (val: string) => {
        const start = val[0];
        if (m[start] == undefined) {
            m[start] = getRandomHexColor();
        }
        return m[start];

    }
}

onMounted(() => {
    axios.get('/data/china.json').then(res => {
        const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(res.data),
        })
        const vectorLayer = new VectorLayer({
            source: vectorSource,
        })
        handler.map!.getLayers().push(vectorLayer)

        const helper = colorHelper()

        vectorLayer.setStyle(fea => {
            const props = fea.getProperties()
            return new Style({
                fill: new Fill({
                    color: helper(props.adcode.toString())
                })
            })
        })
    })
})
</script>

<template>
    <div id="map" style="height: 600px"></div>
</template>

<style scoped></style>
