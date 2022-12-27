<script setup lang="ts">
import homePageImage from '~/assets/images/homePageImage.webp'
const { y } = useWindowScroll()
const rsvpDarkMode = $computed(() => y.value > 100)
</script>

<template>
  <div aspect-1 bg="cover center" z--1 :style="{ backgroundImage: `url(${homePageImage})` }">
    <Nav
      sticky top-0 w-full in-out :rsvp-dark-mode="rsvpDarkMode"
      :class="y < 100 ? 'bg-transparent t-inv text-shadow-lg' : 'bg-l2 backdrop-blur-sm bg-op-30 text-d1'"
    />
    <div
      flex="~ col" h-full gap2 items-center justify-end pb32 t-inv text-shadow-lg
      sm="justify-start p2"
      md="gap4 p8"
      lg="gap8 p16 mt-12"
    >
      <span text-xl lg="text-2xl">We're getting married!</span>
      <span text-4xl lg="text-5xl">Lorraine & Kyle</span>
      <span text-xl lg="text-2xl" font-serif>{{ the_date }}</span>
    </div>
  </div>
</template>
