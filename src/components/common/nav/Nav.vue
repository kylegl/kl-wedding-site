<template>
  <nav
    flex="~ center" gap4 p8 w-full
    text-xl font-medium in-out
  >
    <div flex="~ 1" gap1>
      <NavRoute to="/">
        <Icon i-carbon-home />
      </NavRoute>
      <NavRoute to="/travelStay" title="Travel & Stay" />
      <NavRoute to="/registry" title="Registry" />
    </div>
    <div flex="~ 1" gap2 items-baseline justify-center text-3xl>
      <span>K&L</span>
      <span text-2xl font-serif font-light display-none md-lg="block">{{ the_date }}</span>
    </div>

    <div flex="~ 1" justify-end>
      <RSVPBtn />
    </div>
  </nav>
</template>
