<script setup lang="ts">
import { onKeyUp } from '@vueuse/core'
import { onBeforeRouteLeave } from 'vue-router'

const dropdown = ref<HTMLDivElement | null>(null)
const reveal = $ref(false)
const toggle = useToggle($$(reveal))

function handleClose() {
  if (reveal)
    toggle()
}

onClickOutside(dropdown, () => handleClose())
onKeyUp('Escape', () => handleClose())

onBeforeRouteLeave(() => {
  handleClose()

  return true
})
</script>

<template>
  <div ref="dropdown">
    <MenuBtn :reveal="reveal" aria-haspopup="menu" :aria-expanded="reveal" @click="toggle" />
    <SlideInOut>
      <MenuList v-if="reveal" />
    </SlideInOut>
  </div>
</template>
