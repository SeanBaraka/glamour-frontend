<template>
  <div class="app-table">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-table ::v-deep(.flex > * ) {
    flex: 1;
}
</style>