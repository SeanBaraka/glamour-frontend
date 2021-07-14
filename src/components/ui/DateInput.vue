<template>
  <div class="date-input-container">
    <input type="date" :placeholder="placeholder" v-model="value" @change="$emit('on-changed', value)">
  </div>
</template>

<script>
export default {
  name: "DateInput",
  props: {
    placeholder: String
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
.date-input-container {
  background: $input-background;
  max-width: 180px;
  border-radius: 7px;
  input {
    background: transparent;
    padding: .45em 1em;
    border: none;
    outline: none;
  }
}
</style>
