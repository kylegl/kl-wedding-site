<script setup lang="ts">
</script>

<template>
  <main
    flex="~ col" min-h-screen
    text-center t-norm dark:t-inv bg-l2
    relative
  >
  <RouterView ref="el" grow  />
    <Footer justify-self-end />
  </main>
</template>
