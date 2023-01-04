<script setup lang="ts">
const { to, title } = defineProps<{ to: string; title?: string }>()
</script>

<template>
  <RouterLink
    :to="to" px1 py1 in-out shrink-0 flex
    hover="bg-l1 bg-op-20 rounded-md"
  >
    {{ title }}
    <slot />
  </RouterLink>
</template>
