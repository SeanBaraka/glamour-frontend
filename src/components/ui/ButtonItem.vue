<template>
  <div class="button-item">
      <button>
        <slot></slot>
      </button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.button-item {
    border: 1px solid $primary-color;
    color: $primary-color;
    font-size: 70%;
    font-weight: $fw-semi-bold;
    cursor: pointer;
    padding: .25em 1.25em;
    &.active {
        background: $primary-color; 
        color: $body-bg
    }
    button {
        width: 100%;
        border: none;
        background: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
    }
}
</style>