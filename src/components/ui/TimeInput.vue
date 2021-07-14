<template>
  <div class="time-input-container">
    <input type="time" :placeholder="placeholder" v-model="value" @change="$emit('on-changed', value)">
  </div>
</template>

<script>
export default {
  name: "TimeInput",
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
.time-input-container {
  background: $input-background;
  max-width: 150px;
  border-radius: 7px;
  input {
    background: transparent;
    padding: .45em 1em;
    border: none;
    outline: none;
  }
}
</style>
