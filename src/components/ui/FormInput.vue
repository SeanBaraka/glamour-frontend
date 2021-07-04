<template>
  <div class="form-input">
      <input :type="type" v-model="value" @change="$emit('on-change', value)" :placeholder="placeholder">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        type: String,
        placeholder: String
    },
    data () {
        return {
            value: ''
        }
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.form-input {
    background: $input-background;
    border-radius: 7px;
    padding: .6em 1em;
    input {
        background: transparent;
        font-family: inherit;
        border: none;
        outline: none;
        // padding: .5em .7em;
        font-size: 12px;
    }
}
</style>