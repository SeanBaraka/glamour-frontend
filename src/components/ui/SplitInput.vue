<template>
  <div class="split-input-container">
      <div class="split-items flexed align-center">
          <label :for="id">{{label}}</label>
          <input :type="type" v-model="value"  @change="$emit('on-change', value)" :id="id" :placeholder="placeholder">
      </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        id: String,
        type: String,
        placeholder: String,
        label: String
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

.split-input-container {
    background: $input-background;
    padding: .65em 1em;
    border-radius: 7px;
    label {
        margin-right: .5em;
        font-size: .9em;
        font-weight: 500;
    }
    input {
        padding: 0 0 0 .5em;
        border: none;
        background: transparent;
        border-left: 2px solid $input-outline;
        outline: none;
        font-family: inherit;
        font-size: 12px;
    }
}
</style>