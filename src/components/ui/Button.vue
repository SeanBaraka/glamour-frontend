<template>
  <div class="button-container" :class="{'flex': icon !== undefined || postfixIcon !== undefined}">
      <img :src="require(`@/assets/icons/${icon}`)" alt="" width="18" v-if="icon">
      <button @click="$emit('clicked')">{{text}}</button>
      <img class="reverse" :src="require(`@/assets/icons/${postfixIcon}`)" alt="" width="12" v-if="postfixIcon">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Button',
    props: {
        text: String,
        icon: String,
        postfixIcon: String
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.button-container {
    margin: 2em 0;
    border-radius: .5em;
    padding: .75em 1em;
    text-align: center;
    font-weight: 600;
    font-size: 1.2em;
    cursor: pointer;
    &.disabled {
        pointer-events: none;
        cursor: not-allowed;
    }
    &.sm {
        padding: .5em 2em;
        font-size: 11px;
    }
    &.short {
      padding: .5em .75em;
      gap: .5em;
      img {
        width: 15px;
      }
    }
    &.inactive {
        background: $input-background !important;
        font-weight: 700 !important;
        color: $font-color !important
    }
    &.secondary {
        background: $secondary-color;
        color: #fff
    }
    &.primary {
        background: $primary-color;
        color: #fff
    }
    button {
        font-size: inherit;
        font-family: inherit;
        background: none;
        color: inherit;
        border: none;
        outline: none;
        cursor: inherit;
    }
    .reverse {
        transform: rotate(180deg);
    }
}
</style>
