<template>
  <div class="staff-card-container">
      <div class="flex align-center justify-between">
          <div class="flex align-center">
            <div class="icon flex align-center">
                <img src="@/assets/img/pri-ye.svg" alt="" v-if="context === 'primary'">
                <img src="@/assets/img/sec-ye.svg" alt="" v-if="context === 'secondary'">
                <img src="@/assets/img/ter-ye.svg" alt="" v-if="context === 'tertiary'">
            </div>
            <div class="content">
                <div class="">
                    <h3>{{name}}</h3>
                    <p class="service-desc bold">{{nationalId}}</p>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        context: String,
        name: String,
        nationalId: String
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.staff-card-container {
    background: $service-card-bg;
    padding: 1em 1.2em;
    box-shadow: 0 0 1em rgba(0, 0, 0, .15);
    border-radius: 1.25em;
    .content {
        margin: 0 1em;
        .service-desc {
            color: $input-outline;
            font-weight: 500;
            font-size: 90%;
        }
        h3 {
            font-size: .95em;
        }
    }
    .price-tag {
        .flex {
            gap: 2px
        }
        .price {
            font-weight: 600;
            &.primary {
                color: $primary-color
            }
            &.secondary {
                color: $secondary-color
            }
            &.tertiary {
                color: $tertiary-color
            }
        }
        .tag {
            border-radius: 10px;
            padding: 2px 5px;
            font-size: 10px;
            color: $body-bg;
            &.primary {
                background: $primary-color
            }
            &.secondary {
                background: $secondary-color
            }
            &.tertiary {
                background: $tertiary-color
            }
        }
    }
}
</style>