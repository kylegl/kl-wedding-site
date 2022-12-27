<template>
  <main
    text-center t-norm dark:t-inv bg-l2
    flex="~ col" min-h-screen
  >
    <Nav sticky top-0 w-full/>
    <RouterView bg-bg-a px-8 grow/>
    <Footer justify-self-end />
  </main>
</template>
