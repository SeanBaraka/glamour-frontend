<template>
  <li class="menu-item">
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

<script>
export default {
    name: 'NavMenu',
    props: {
        icon: String,
        to: String
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
li {
    margin: 1.5em 0;
    // background: red;
    padding: 0 1.5em;
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