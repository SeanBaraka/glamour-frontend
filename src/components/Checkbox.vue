<template>
  <div class="checkbox-input flex align-center">
      <input type="checkbox" id="checkbox">
      <label for="checkbox">{{labelText}}</label>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Checkbox',
    props: {
        labelText: String
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

    .checkbox-input {
        margin: 1em 0;
        input[type="checkbox"] {
            opacity: 0
        }
        label {
            cursor: pointer;
            position: relative;
            left: 2.5em;
            font-size: 95%;
            font-weight: 500;
            &::before, &::after {
                content: '';
                position: absolute
            }
            &::before {
                content: '';
                border: 2px solid $input-outline;
                border-radius: 2px;
                width: 15px;
                height: 15px;
                background: #fff;
                left: -3em;
                top: -.2em
            }
        }
    }
</style>