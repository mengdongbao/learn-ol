<script setup lang="ts">

</script>

<template>
    <div>
        <router-view></router-view>
        <div style="border: 1px solid red;">
            <div>
                <router-link :to="{ name: 'rasterCOG' }">栅格地图(COG)</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'tileGrid' }">栅格地图(TileGrid)</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less"></style>