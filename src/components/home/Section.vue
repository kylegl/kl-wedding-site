<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
  <div flex="~ col" gap16 p24 justify-center t-norm>
    <h3 v-if="title" text-4xl>{{ title }}</h3>
    <slot />
  </div>
</template>
