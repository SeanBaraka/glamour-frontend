<template>
  <div class="dropdown-menu-item">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.dropdown-menu-item {
    padding: 1.2em 1em;
    font-size: 100%;
}
.dropdown-menu-item:hover {
    cursor: pointer;
    background: $input-background;
}
.dropdown-menu-item:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px
}
</style>