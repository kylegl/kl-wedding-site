<script setup lang="ts">
interface Props {wrapReverse?: boolean}
const props = withDefaults(defineProps<Props>(), {
  wrapReverse: false,
})
</script>

<template>
  <div flex gap16 justify-center :class="[props?.wrapReverse ? 'flex-wrap-reverse' : 'flex-wrap']">
    <slot />
  </div>
</template>
