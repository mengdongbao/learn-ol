<script setup lang="ts">
import { useInit } from '@/views/base/hooks/useInit.ts'
import { useVector } from '@/views/vector/hooks/useVector.ts'

const handler = useInit()
useVector(() => handler.map)
</script>

<template>
  <div id="map" style="height: 600px"></div>
</template>

<style scoped></style>
