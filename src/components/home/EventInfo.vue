<script setup lang="ts">
import ceremony from '~/assets/images/dreams-natura-wedding.webp'
// import reception from '~/assets/images/'
// TODO get image for reception location
</script>

<template>
  <Section bg-sand rounded-md title="Day of Info">
    <EventSection :wrap-reverse="true">
      <ImageCard :src="ceremony" />
      <InfoCard>
        <h2 text-6xl>
          Ceremony
        </h2>
        <span text-5xl>5:30pm</span>
        <div>
          <span text-3xl>Infinity Pool</span>
        </div>
      </InfoCard>
    </EventSection>
    <EventSection>
      <InfoCard>
        <h2 text-6xl>
          Reception
        </h2>
        <span text-5xl>7 pm - 11 pm</span>
        <div>
          <span text-3xl>'insert location here'</span>
        </div>
      </InfoCard>
      <ImageCard />
    </EventSection>
  </Section>
</template>
