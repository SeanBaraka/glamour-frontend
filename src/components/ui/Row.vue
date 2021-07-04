<template>
  <div class="table-row-item flex align-center">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.table-row-item {
    // padding: 0 2em;
    margin: 1em 0
}
.table-row-item ::v-deep(.flex > * ) {
    flex: 1
}
.table-row-item ::v-deep(.col.flex) {
    gap: .25em;
}
.table-row-item ::v-deep(.flex > *) {
    flex: 1;
}
.table-row-item ::v-deep(.col .action-button) {
    max-width: max-content;
    background: $body-bg;
    box-shadow: 0 0 1em rgba($color: $normal-dark, $alpha: .2);
    padding: .65em;
    border-radius: 100%;
    margin: 0 .5em;
    button {
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        display: flex;
        img {
            width: 15px
        }
    }
}
</style>