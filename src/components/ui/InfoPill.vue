<template>
  <div class="information-pill">
      <div class="flex justify-between align-center">
          <div class="text-content">
              <!-- the text content of the pill -->
              {{content}}
          </div>
          <div class="pill-icon flex" v-if="icon">
            <img :src="require(`@/assets/icons/${icon}`)" alt="" width="15">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        content: String,
        icon: String
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.information-pill {
    padding: .35em 1.25em;
    background: $input-background;
    border-radius: 4em;
    font-size: 10px;
    font-weight: $fw-semi-bold;
    &.primary {
        border: 2px solid $primary-color;
        color: $primary-color
    }
    &.secondary {
        border: 2px solid $secondary-color
    }
}
</style>