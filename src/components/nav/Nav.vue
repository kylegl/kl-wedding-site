<template>
  <nav
    flex="~ center" gap4 w-full p4 justify-between
    text-xl font-medium in-out
    sm="p8"
  >
    <div flex gap1 sm="flex-1">
      <NavRoute to="/">
        <Icon icon-home />
      </NavRoute>

      <div hidden sm="flex flex-1 gap2">
        <NavRoute to="/travelStay" title="Travel & Stay" />
        <NavRoute to="/registry" title="Registry" />
        <NavRoute to="/Events" title="Events" />
      </div>
    </div>

    <div hidden sm="flex flex-1 gap2 items-baseline justify-center" text-3xl>
      <span>K&L</span>
      <span text-2xl font-serif font-light display-none md-lg="block">{{ the_date }}</span>
    </div>

    <div
      flex
      sm="flex-1 justify-end"
    >
      <RSVPBtn />
    </div>

    <div sm="hidden">
      <Sidebar />
    </div>
  </nav>
</template>
