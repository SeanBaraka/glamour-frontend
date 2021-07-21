<template>
  <div class="button-loader-container">
      <div class="flex align-center" title="1">
        <span>Saving </span>
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="25px" height="25px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
          </path>
        </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.button-loader-container {
  margin: 2em 0;
  border-radius: .5em;
  padding: .35em 2em;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  cursor: not-allowed
}
svg path,
svg rect{
  fill: $primary-color;
}
</style>