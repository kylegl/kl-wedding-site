<script setup lang="ts">
const { tooltip, duration } = defineProps<{ tooltip?: string; duration?: number }>()
</script>

<template>
  <BaseBtn :tooltip="tooltip" :duration="duration" bg-l1 t-norm>
    <slot />
  </BaseBtn>
</template>
