<template>
    <transition name="fade">
        <div class="dialog-container" v-if="shown">
            <div class="overlay" @click="shown = false"></div>
            <div class="dialog">
                <slot></slot>
            </div>
        </div>
    </transition> 
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data () {
        return {
            shown: false
        }
    },
    methods: {
        open () {
            this.shown = true
        },
        close () {
            this.shown = false;
        }
    }
})
</script>

<style scoped lang="scss">
.fade-enter-active,.fade-leave-active {
    transform: translateY(0);
    transition: all ease-in 0.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
.dialog-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-height: 100vh;
    .overlay {
        background: rgba($color: #fff, $alpha: .25);
        backdrop-filter: blur(1px);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .dialog {
        width: 75%;
        background: #fff;
        box-shadow: 0 0 1.5em rgba(0,0,0,.2);
        padding: 2em;
        border-radius: 1em;
        z-index: 2;
        transform: translateY(-3.5em);
    }
}
</style>