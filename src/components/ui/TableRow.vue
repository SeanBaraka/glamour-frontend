<template>
  <div class="table-row grid" :class="{'carded': even}">
    <div>
        <div class="flexed flexed-column">
            <p>{{clientName}}</p>
            <p class="text-light">#32345</p>
        </div>
    </div>
    <div>{{service}}</div>
    <div>{{timeAllocated}}</div>
    <div>{{orderStatus}}</div>
    <div>{{stylist}}</div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        even: Boolean,
        clientName: String,
        timeAllocated: String,
        service: String,
        orderStatus: String,
        stylist: String
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
.table-row {
    grid-template-columns: 200px 150px 150px 150px 150px;
    &.carded {
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 3em rgba(0,0,0,0.1);
        border-radius: 1em;
    }
}
.text-light {
    font-size: 10px;
    font-weight: $fw-semi-bold;
    color: $input-outline
}
</style>