<template>
  <div class="input-container flex align-center">
      <img :src="require(`@/assets/img/${prefixIcon}`)" alt="" width="22">
      <input :type="inputType" :placeholder="placeholderText">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'CardInput',
    props: {
        placeholderText: String,
        prefixIcon: String,
        inputType: String
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.input-container {
    background: $card-bg;
    padding: 1em;
    border-radius: .75em;
    box-shadow: 0 0 1em rgba(0,0,0,.15);
    position: relative;
    margin: 2em 0;
    input {
        background: none;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 13px;
        position: relative;
        width: 85%;
        font-weight: 500;
    }
}
</style>