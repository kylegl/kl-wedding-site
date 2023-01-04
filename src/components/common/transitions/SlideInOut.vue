<template>
  <Transition name="SlideInOut" mode="out-in" class="animated animated-faster" enter-from-class="w-0"
    enter-active-class="animated-slide-in-right w-50" leave-active-class="animated-slide-out-right w-50"
    leave-to-class="w-0">
    <slot />
  </Transition>
</template>
