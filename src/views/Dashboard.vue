<template>
  <section>
    <SideNav />
    <router-view />
  </section>
</template>

<script>
import SideNav from '@/components/menus/SideNav.vue'
export default {
  components: { SideNav },

}
</script>

<style>

</style>