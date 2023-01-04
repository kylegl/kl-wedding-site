<template>
  <div
    absolute top-full right-0 w50 bg-sandy rd-bl-2 shadow z--1
    border="~ l-2 b-2 rd-bl-2" role="menu"
  >
    <ul flex="~ col" tracking-wider  bg-sandy>
      <MenuListItem>
        <NavRoute to="/"  flex max-w-fit>
          <Icon icon-home text-xl op60/>
        </NavRoute>
      </MenuListItem>
      <MenuListItem>
        <NavRoute title="Travel & Stay" to="/travelStay" />
      </MenuListItem>
      <MenuListItem>
        <NavRoute title="Events" to="/events"  />
      </MenuListItem>
      <MenuListItem>
        <NavRoute title="Registry" to="/registry"  />
      </MenuListItem>
    </ul>
  </div>
</template>
