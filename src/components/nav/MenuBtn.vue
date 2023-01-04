<script setup lang="ts">
const { reveal } = defineProps<{ reveal: boolean }>()
const emit = defineEmits(['click'])
</script>

<template>
  <Btn flex items-center :duration="0" @click="emit('click')">
    <template #content>
      <label sr-only>Menu</label>
      <Fade>
        <Icon v-if="!reveal" icon-menu icon-btn text-3xl />
        <Icon v-else icon-x icon-btn text-3xl />
      </Fade>
    </template>
  </Btn>
</template>
