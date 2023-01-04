<script setup lang="ts">
</script>

<template>
  <main
    flex="~ col" h-full min-h-screen
    text-center t-norm dark:t-inv
    relative
  >
    <Nav sticky top-0 bg-sandDark z-1/>
    <RouterView ref="el" grow />
    <Footer justify-self-end />
  </main>
</template>
