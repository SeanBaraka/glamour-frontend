<template>
  <div class="search-input flex align-center">
      <img src="@/assets/icons/ic-search.svg" alt="" width="13">
      <input type="text" :placeholder="`Search By ${criteria}`">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        criteria: String
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.search-input {
    border: 1px solid $input-outline;
    padding: .65em 1em;
    border-radius: .65em;
    input {
        background: none;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: 12.5px;
    }
}
</style>