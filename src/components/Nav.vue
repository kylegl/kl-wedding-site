<script setup lang="ts">

</script>

<template>
  <nav flex gap4 px8 py4 text-xl font-medium justify-between items-center>
    <div flex="~ 1" gap4 >
      <NavRoute to="/ourStory" title="Our Story" />
      <NavRoute to="/travelStay" title="Travel & Stay" />
      <NavRoute to="/registry" title="Registry" />
    </div>
    <div flex="~ 1" gap2 items-baseline justify-center text-3xl>
      <span>K&L</span>
      <span text-2xl font-serif font-light>{{the_date}}</span>
    </div>
    <PrimaryBtn tooltip="RSVP">
      <NavRoute flex-1 to="/rsvp" title="RSVP"/>
    </PrimaryBtn>
  </nav>
</template>
