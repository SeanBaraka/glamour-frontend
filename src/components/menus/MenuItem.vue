<template>
  <li class="menu-item" @click="navigateTo(to)">
      <div class="flex align-center">
          <img :src="require(`@/assets/icons/${icon}`)" alt="" width="15">
          <div class="mgl-1">
              <router-link :to="to" active-class="active">
                  <slot></slot>
              </router-link>
          </div>
      </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: 'NavMenu',
    props: {
        icon: String,
        to: String
    },
    methods: {
        navigateTo (path: string): void {
            this.$router.push(path)
        }
    }
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
li {
    margin: 1.5em;
    padding: 0 1.5em;
    font-size: 12px;
    cursor: pointer;
}
.active {
    color: $primary-color;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 3.45px;
        height: 12px;
        background: $primary-color;
        border-radius: 35%;
        left: -4em;
        top: 50%;
        transform: translateY(-50%);
    }
}
a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
    font-weight: $fw-medium;
    display: inline-block;
    padding: .7em 0
}
</style>