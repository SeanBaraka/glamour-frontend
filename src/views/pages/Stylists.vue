<template>
  <div class="page-section">
    <h3 class="page-title">Our Stylists</h3>
    <div class="add-button-container flex align-center justify-between">
      <div class="add-button">
        <Button icon="ic-add-user.svg" class="primary" text="Add New" @clicked="addStaff" />
      </div>
    </div>
    <Popup ref="addStaff">
        <staff-registration @on-completed="closeModal" />
    </Popup>
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import Popup from "@/components/ui/Popup.vue";
import { defineComponent } from "@vue/runtime-core";
import StaffRegistration from "./StaffRegistration.vue";

export default defineComponent({
  components: { Button, Popup, StaffRegistration },
  methods: {
    getStylists () {
      // do some other stuff
    },
    addStaff () {
      this.$refs.addStaff.open()
    },
    closeModal () {
      this.$refs.addStaff.close()
      this.getStylists()
    }
  }

})
</script>

<style scoped>
.add-button-container {
  margin: 1em 0 2em
}
.button-container {
  margin: 0 auto;
  padding: .5em 1em;
  font-size: 12px;
}
</style>