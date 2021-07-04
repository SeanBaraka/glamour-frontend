<template>
  <div class="input-button-container">
      <div class="input-button flex align-center">
          <div class="input-bar">
              <input type="text" v-model="value" :placeholder="placeholder">
          </div>
          <button class="flex align-center justify-center" @click="$emit('on-submit', value)">
              <img :class="{'loading': loading}" :src="require(`@/assets/icons/${icon}`)" alt="" width="11">
          </button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        icon: String,
        loading: Boolean
    },
    data () {
        return {
            value: '',
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.input-button-container {
    margin: .5em 0;
    background-color: $input-background;
    width: 250px;
    border-radius: 7px;
    padding-left: .5em;
    button,input {
        background: none;
        border: none;
        font-family: inherit;
        outline: none;
        font-size: inherit;
    }
    button {
        position: relative;
        width: 29px;
        height: 33px;
        cursor: pointer;
        border-radius: 10px;
        // img {
        //     filter: invert(100%);
        // }
    }
    input {
        width: 100%;
        padding: .75em 0
    }
    .input-button {
        gap: 0;
    }
    .input-button > .input-bar {
        flex: 1;
        padding: 0 .5em;
        font-size: .9em;
    }
    &.primary {
        button {
            background: $primary-color;
        }
    }
    &.secondary {
        button {
            background: $secondary-color;
        }
    }
}
img.loading {
    animation: loop infinite 1s;
}
@keyframes loop {
    // from {
    //     transform: scale(0.60)
    // }
    to {
        transform: scale(1.3)
    }
}
</style>