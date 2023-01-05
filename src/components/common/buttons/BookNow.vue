<script setup lang="ts">
function handleClick() {
  console.log('Book now')
}
</script>

<template>
  <BaseBtn bg-sandDark t-inv @click="handleClick">
    Book Now
  </BaseBtn>
</template>
