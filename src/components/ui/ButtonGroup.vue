<template>
  <div class="button-group">
      <span class="sm bold">{{label}}</span>
      <div class="flex">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        label: String
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.flex {
    gap: 0
}
::v-deep(.flex > *:first-child) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
::v-deep(.flex > *:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.sm {
    font-size: 70%;
    font-weight: $fw-semi-bold;
}
</style>