<script setup lang="ts">
import homePageImage from '~/assets/images/homePageImage.webp'
</script>

<template>
  <div>
    <div flex="~ col" relative>
      <img :src="homePageImage" object-cover>
      <div
        absolute top-0 left="50%" translate-x="-50%"
        flex="~ col" h-full w-full items-center gap2 pt
        t-inv text-shadow-lg
        md="pt8 gap4"
        lg="pt12"
      >
        <div text-xl lg="text-2xl" h="1/3" sm="h-auto">
          We're getting married!
        </div>
        <div flex="~ col center" gap2 md="gap4" grow>
          <div
            text-4xl lg="text-5xl"
            sm="mt2"
          >
            Lorraine & Kyle
          </div>
          <div text-xl lg="text-3xl" font-serif>
            {{ the_date }}
          </div>
          <div m-auto>
            countdown
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
