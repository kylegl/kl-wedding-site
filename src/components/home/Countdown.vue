<script setup lang="ts">
import dayjs from 'dayjs'
const weddingDay = dayjs('2023-08-21')
const now = $computed(() => dayjs())
const daysUntilWedding = $computed(() => weddingDay.diff(now, 'days') + 1)
</script>

<template>
  <div flex="~ col" gap2 justify-end>
    <div font-purplePurse text-xl>
      {{ daysUntilWedding }}
    </div>
    <div text-5xl font-fancy>days until</div>
    <div text-2xl font-alegreya>Mr. & Mrs.</div>
  </div>
</template>
