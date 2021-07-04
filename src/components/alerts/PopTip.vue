<template>
  <transition name="slide">
    <div class="pop-up-alert" v-if="visible">
        <div class="flex align-center">
            <div class="title">{{title}}</div>
            <div class="content">{{content}}</div>
        </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    beforeMount () {
        this.$bus.on('show', (params) => {
            this.show(params)
        })
    },
    data() {
        return {
            visible: false,
            title: '',
            content: ''
        }
    },
    methods: {
        show (params) {
            this.title = params.title
            this.content = params.content
            this.visible = true
            setTimeout(() => {
                this.visible = false
            }, 3000);
        }
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.pop-up-alert {
    padding: 1em 2em;
    background: $popup-background;
    color: $body-bg;
    position: fixed;
    bottom: 2em;
    z-index: 200;
    border-radius: 10em;
    box-shadow: 0 0 1em rgba(0,0,0,0.4);
    left: 50%;
    transform: translateX(-50%);
    .title {
        font-weight: 600;
    }
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    bottom: -3em
}

.slide-enter-active,
.slide-leave-active {
    transition: all .5s ease-in-out
}

</style>