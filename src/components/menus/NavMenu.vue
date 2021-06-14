<template>
  <ul class="nav-menu">
      <slot></slot>
  </ul>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>

<style scoped lang="scss">
ul.nav-menu {
    list-style-type: none;
}
</style>