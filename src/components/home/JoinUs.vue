<script setup lang="ts">
import cancunBeach from '~/assets/images/cancun-beach.webp'
</script>

<template>
  <Section>
    <EventSection>
      <InfoCard>
        <h2 text-5xl t-norm>
          Join us in Cancun!
        </h2>

        <TravelBtn shrink-0/>
      </InfoCard>
      <ImageCard :src="cancunBeach" />
    </EventSection>
  </Section>
</template>
