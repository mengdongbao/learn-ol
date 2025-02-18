<script setup lang="ts">

</script>

<template>
    <div>
        <router-view></router-view>
        <div>
            <div>
                <router-link :to="{ name: 'vectorDemo' }">加载矢量</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'vectorEvent' }">矢量事件</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'vectorStaticStyle' }">矢量静态样式</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less"></style>