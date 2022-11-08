<script setup lang="ts">
import type { TippyOptions } from '~/types'

interface Props {
  tooltip?: TippyOptions
  duration?: number
}
const { tooltip, duration = 50 } = defineProps<Props>()
const emit = defineEmits<{ (e: 'click'): void }>()
const { start, isPending } = useTimeoutFn(() => emitClick(), duration, { immediate: false })
const tippy = $computed(() => getTippyConfig(tooltip))
let isClicked = $ref(false)

function emitClick() {
  emit('click')
  isClicked = false
}

function handleClick() {
  isClicked = true
  start()
}
</script>

<template>
  <button v-tippy="tippy" flex gap2 items-center justify-center :class="{ disabled: isPending }"
    @click.stop="handleClick">
    <slot name="content" :is-clicked="isClicked" />
  </button>
</template>
