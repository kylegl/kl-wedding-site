<script setup lang="ts">
import walkingBeach1700w from '~/assets/images/walkingBeach1700w.webp'
import walkingBeach1200w from '~/assets/images/walkingBeach1200w.webp'
import walkingBeach840w from '~/assets/images/walkingBeach840w.webp'
</script>

<template>
  <div flex="~ col" h-full relative>
    <img
      :srcset="` ${walkingBeach840w} 840w, ${walkingBeach1200w} 1200w, ${walkingBeach1700w} 1700w`"
      sizes="(max-width: 1000px) 840px, (max-width: 1400px) 1200px, 1700px"
      object-cover h-full
    >
    <div
      absolute top-0 left="50%" translate-x="-50%"
      flex="~ col" items-center gap2 h-full
      t-inv text-shadow-lg py4
      sm="py12"
      md="gap4"
      lg=""
    >
      <div
        text-xl
        lg="text-2xl"
      >
        We're getting married in Cancun!
      </div>
      <div flex="~ col" gap2 md="gap4" grow>
        <div
          text-4xl
          sm="mt2"
          lg="text-5xl"
        >
          Lorraine & Kyle
        </div>
        <div text-xl lg="text-3xl" font-serif>
          {{ the_date }}
        </div>

      </div>
      <Countdown sticky bottom="0" />
    </div>
  </div>
</template>
