<template>
  <aside>
      <div class="navigation-menu">
          <div class="flex flexed-column">
            <div class="logo">
              <img src="@/assets/img/logo.svg" alt="" width="150">
            </div>
            <div class="menu-items">
            <NavMenu>
              <MenuItem to="/dashboard/summary" icon="ic-home.svg">Dashboard</MenuItem>
              <MenuItem to="/dashboard/customers" icon="ic-customers.svg">Customers</MenuItem>
              <MenuItem to="/dashboard/services" icon="ic-stylists.svg">Services</MenuItem>
              <MenuItem to="/dashboard/stylists" icon="ic-stylists.svg">Stylists</MenuItem>
              <MenuItem to="/dashboard/schedule" icon="ic-schedule.svg">Schedule</MenuItem>
              <MenuItem to="/dashboard/reservations" icon="ic-calendar.svg">Reservations</MenuItem>
              <MenuItem to="/dashboard/settings" icon="ic-config.svg">Settings</MenuItem>
            </NavMenu>
            </div>
          </div>
      </div>
  </aside>
</template>

<script>
import MenuItem from './MenuItem.vue'
import NavMenu from './NavMenu.vue'
export default {
  components: { NavMenu, MenuItem },

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

aside {
  position: fixed;
  min-height: 100vh;
  background: $service-card-bg;
  width: 220px;
  box-shadow: .5em 0 2em rgba(0,0,0,.1);
  .navigation-menu {
    padding: 2em 1em;
    .logo {
      position: relative;
      top: 4em;
      width: 70%;
      margin: 2em 1.5em;
      img {
        width: 100%
      }
    }
    .menu-items {
      margin: 3em 0
    }
  }
}
</style>
