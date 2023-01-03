<script setup lang="ts">
const { src } = defineProps<{ src?: string }>()
</script>

<template>
  <div shrink-0>
    <img v-if="src" :src="src" bg-l1 p4 rounded-md shadow-md object-cover/>
    <p v-else bg-l1 w-400px h-400px>Image Placeholder</p>
  </div>
</template>
