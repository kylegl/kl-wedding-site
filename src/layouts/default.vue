<template>
  <main
    text-center text-gray-900 dark:text-gray-200 bg-bgB
    flex="~ col" min-h-screen
  >
    <Nav sticky top-0 w-full/>
    <RouterView bg-bg-a px-8 grow/>
    <Footer justify-self-end />
  </main>
</template>
