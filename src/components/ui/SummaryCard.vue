<template>
  <div class="summary-card flex align-center">
      <div class="icon">
          <img :src="require(`@/assets/icons/${icon}`)" alt="" width="40">
      </div>
      <div class="label-text">{{labelText}}</div>
      <div class="desc-text">{{text}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        icon: String,
        labelText: String,
        text: String
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.summary-card {
    pointer-events: none;
    user-select: none;
    background: $secondary-bg;
    box-shadow: 0 0 1em rgba(0,0,0,0.15);
    border-radius: 1.5em;
    position: relative;
    margin: 0 2em;
    min-width: 150px;
    padding: .5em 2em;
    height: 50px;
    .icon {
        position: absolute;
        left: -1.5em;
        transform: translateY(.45em);
    }
    .label-text {
        font-size: 2em;
        font-weight: $fw-medium;
        margin: 0 .25em
    }
    .desc-text {
        font-weight: $fw-medium;
    }
}
</style>