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
    margin: 1.5em 0;
    padding: 0 1.5em;
    font-size: 12px;
    cursor: pointer
}
.active {
    color: $primary-color;
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