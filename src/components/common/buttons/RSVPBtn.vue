<script setup lang="ts">
interface Props {
  tooltip?: string
  duration?: number
}
const props = defineProps<Props>()
const emit = defineEmits(['click'])
</script>

<template>
  <PrimaryBtn :tooltip="props.tooltip" :duration="props.duration" @click="emit('click')">
    <div flex items-center gap1>
      <RouterLink to="/rsvp">
        RSVP
      </RouterLink>
    </div>
  </PrimaryBtn>
</template>
