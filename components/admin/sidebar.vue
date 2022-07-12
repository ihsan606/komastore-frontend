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

    <li class="c-sidebar-nav-title">REPORTS</li>

    <li class="c-sidebar-nav-item">
      <nuxt-link :to="{ name: 'admin-invoices' }" class="c-sidebar-nav-link">
        <svg
          class="c-sidebar-nav-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bar-chart"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
          />
        </svg>
        Sales Reports</nuxt-link
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

.c-sidebar.c-sidebar-light .c-sidebar-nav-dropdown-toggle:hover,
.c-sidebar.c-sidebar-light .c-sidebar-nav-link:hover {
  background-color: #faae16;
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
