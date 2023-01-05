<script setup lang="ts">
const { tooltip, duration } = defineProps<{ tooltip?: string; duration?: number }>()
const emit = defineEmits(['click'])
</script>

<template>
  <Btn
    btn btn-hover shadow-md
    h5 tracking-widest in-out
    class="group"
    active="translate-y-0.5 transition-transform"
    :tooltip="tooltip" :duration="duration" @click="emit('click')"
  >
    <template #content>
      <div flex items-center gap1>
        <slot />
      </div>
    </template>
  </Btn>
</template>
