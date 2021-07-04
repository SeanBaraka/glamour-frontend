<template>
  <div class="select-pill-container" :class="{'primary-pill': selected}">
      <div class="selection-bar">
        <input type="checkbox" name="" :id="id" @change="selected = !selected">
        <label :for="id" class="pill-label">{{label}}</label>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        label: String,
        id: String
    },
    data () {
        return {
            selected: false
        }
    }
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.select-pill-container {
    background: none;
    padding: .15em 1em;
    border-radius: 2em;
    border: 2px solid $input-outline;
    width: max-content;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    margin: .5em .5em .25em 0;
    .selection-bar {
        position: relative;
        label {
            position: relative;
            left: -.5em;
            top: -.08em;
            font-size: .8em;
            font-weight: $fw-medium;
            cursor: inherit;
        }
    }
    input[type="checkbox"] {
        visibility: hidden;
    }
    &.primary-pill {
        background: $primary-color;
        border: 2px solid $primary-stroke-color;
        color: $body-bg;
    }
}
</style>