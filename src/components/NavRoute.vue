<script setup lang="ts">
const { to, title } = defineProps<{ to: string; title: string }>()
</script>

<template>
  <RouterLink :to="to">
    {{ title }}
  </RouterLink>
</template>
