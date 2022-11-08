<script setup lang="ts">
const { tooltip, duration } = defineProps<{ tooltip?: string; duration?: number }>()
const emit = defineEmits(['click'])
</script>

<template>
  <Btn btn btn-hover bg-gray-900 t-inv h5 tracking-widest class="group" active="translate-y-0.5 transition-transform"
    :tooltip="tooltip" :duration="duration" @click="emit('click')">
    <template #content>
      <div flex items-center gap1>
        <slot />
      </div>
    </template>
  </Btn>
</template>
