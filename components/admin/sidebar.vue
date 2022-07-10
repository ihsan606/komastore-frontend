<template>
  <ul class="c-sidebar-nav" style="background-color: #fff">
    <li class="c-sidebar-nav-item">
      <nuxt-link
        :to="{ name: 'admin-dashboard' }"
        class="c-sidebar-nav-link"
        href="index.html"
      >
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"
          ></use>
        </svg>
        Dashboard</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-title">MASTER DATA</li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-categories' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-folder"
          ></use>
        </svg>
        Categories</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-products' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-layers"
          ></use>
        </svg>
        Products</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-title">ORDERS</li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-invoices' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"
          ></use>
        </svg>
        Invoices</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-title">OTHERS</li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-customers' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"
          ></use>
        </svg>
        Customers</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-sliders' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-laptop"
          ></use>
        </svg>
        Sliders</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-users' }" class="c-sidebar-nav-link">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"
          ></use>
        </svg>
        Users</nuxt-link
      >
    </li>

    <li class="c-sidebar-nav-divider"></li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
a.nuxt-link-active {
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  color: #0e1726;
}

a.nuxt-link-active > svg {
  color: #030305 !important;
}

a.c-sidebar-nav-link {
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  font-size: 13px;
  color: #0e1726;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 5px 5px 5px;
}
a.c-sidebar-nav-link:hover {
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  font-size: 13px;
  color: #0e1726;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  background-color: #fff;
}
svg.c-sidebar-nav-icon {
  color: #030305 !important;
  font-size: 14px;
}
svg.c-sidebar-nav-icon:hover {
  color: #030305 !important;
  font-size: 14px;
}
</style>
