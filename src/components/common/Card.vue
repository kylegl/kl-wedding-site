<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
  <div flex="~ col" items-center gap4 p4 bg-l1 rounded-md>
    <h3 v-if="title" text-4xl font-semibold>
      {{ title }}
    </h3>
    <slot/>
  </div>
</template>
