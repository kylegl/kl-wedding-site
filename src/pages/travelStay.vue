<script setup lang="ts">
// import tropical from '~/assets/images/tropical.jpeg'
import resort from '~/assets/images/resort.webp'
</script>

<template>
  <div flex="~ col" page-container px4 sm="px8" md="px16" relative t-norm>
    <h2 text-5xl>
      Travel & Stay
    </h2>

    <div flex="~ wrap" justify-center gap8 pt8 sm="pt16" md="gap24">
      <Card title="Where" flex-1 >
        <div flex="~ col" gap4>
          <div flex="~ col" gap1>
            <h4 text-3xl>
              Dreams Natura Resort & Spa
            </h4>
            <h5 text-lg>
              Cancun, Mexico
            </h5>
          </div>
          <img :src="resort" object-cover rounded-md shadow min-w-67>

          <BookNow mx-auto />
        </div>
      </Card>

      <Card title="Flight & Transportation" flex-1>
        <div flex="~ col" gap4>
          <div flex="~ col" gap2>
            <h4 text-3xl>
              Airport
            </h4>
            <a href="https://www.cancunairport.com/" target="_blank" hover:font-semibold in-out>
              <span flex="~ center" gap1>
                Cancun International Airport (CUN)
                <Icon icon-link op40 />
              </span>
            </a>
            <a :href="googleFlightsUrl" target="_blank">
              <BaseBtn bg-sand-dark t-inv mx-auto>Check Flights</BaseBtn>
            </a>
          </div>
          <div flex="~ col" gap1>
            <h4 text-3xl>
              Shuttle
            </h4>
            <p text-red>
              TBD
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
