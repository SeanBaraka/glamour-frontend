<template>
  <section>
    <SideNav />
    <TopNavMenu />
    <router-view></router-view>
  </section>
</template>

<script>
import SideNav from '@/components/menus/SideNav.vue'
import TopNavMenu from '@/components/menus/TopNavMenu.vue'
export default {
  components: { SideNav, TopNavMenu },

}
</script>

<style>

</style>