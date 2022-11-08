<script setup lang="ts">
interface Props {
  tooltip?: string
  duration?: number
  darkMode: boolean
}
const props = withDefaults(defineProps<Props>(), {
  darkMode: true,
})
const emit = defineEmits(['click'])
</script>

<template>
  <Btn
    btn btn-hover bg-bg-f t-inv h5 tracking-widest in-out
    class="group" active="translate-y-0.5 transition-transform"
    :class="darkMode ? 'bg-d1 t-inv' : 'bg-l1 t-norm'"
    :tooltip="props.tooltip" :duration="props.duration" @click="emit('click')"
  >
    <template #content>
      <div flex items-center gap1>
        <RouterLink to="/rsvp">RSVP</RouterLink>
      </div>
    </template>
  </Btn>
</template>
