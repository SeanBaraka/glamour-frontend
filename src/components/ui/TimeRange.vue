<template>
  <div class="time-range-container">
      <div class="times flex">
          <input type="time" v-model="startDate" name="start-time" id="">
          <input type="time" v-model="endDate" name="end-time" id="">
      </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data () {
        return {
            startDate: '',
            endDate: ''
        }
    }
})
</script>

<style scoped lang="scss">

</style>