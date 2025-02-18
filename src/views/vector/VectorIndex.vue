<script setup lang="ts">

</script>

<template>
    <div>
        <router-view></router-view>
        <div>
            <div>
                <router-link :to="{ name: 'vectorDemo' }">基本地图</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less"></style>