<template>
  <div class="button-container secondary">
      <button>{{text}}</button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Button',
    props: {
        text: String
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.button-container {
    margin: 2em 0;
    border-radius: .5em;
    padding: .75em 2em;
    text-align: center;
    font-weight: 600;
    font-size: 1.2em;
    &.secondary {
        background: $secondary-color;
        color: #fff
    }
    button {
        font-size: inherit;
        font-family: inherit;
        background: none;
        color: inherit;
        border: none;
        outline: none;
    }
}
</style>