<template>
  <div class="input-dropdown-container">
    <div class="flex align-center justify-between"  @click="menuOpen = !menuOpen">
        <input type="text" :placeholder="placeholder">
        <img src="@/assets/icons/arrow-down.svg" alt="" width="20">
    </div>
    <div class="dropdown-container" @mouseleave="menuOpen = false" :class="{'active': menuOpen}">
        <div class="dropdown-menu">
            <slot></slot>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
        placeholder: String
    },
    data () {
        return {
            menuOpen: false
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.input-dropdown-container {
    background: $input-background;
    max-width: 200px;
    border-radius: 5px;
    position: relative;
    padding:0 1.2em 0 0;
    .flex {
        gap:0;
    }
    input {
        position: relative;
        width: 90%;
        background: transparent;
        padding: .5em 1.2em;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 12px;
    }
}
.dropdown-container {
    opacity: 0;
    height: 0;
    position: absolute;
    width: 100%;
    transition: opacity .3s ease-in;
    display: none;
}
.dropdown-container.active {
    display: inline-block;
    opacity: 1;
    height: auto;
}
.dropdown-menu {
    border-radius: 0 0 5px 5px;
    background: #fff;
    max-height: 300px;
    overflow: auto;
    z-index: 2000;
    box-shadow: 0 0 1em rgba(0,0,0,.2)
}
.dropdown-menu {
    border-top: 0;
    position: relative;
}
</style>