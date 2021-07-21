<template>
  <div class="page-section">
    <h3 class="page-title">Our Stylists</h3>
    <div class="add-button-container flex align-center justify-between">
      <div class="add-button">
        <Button icon="ic-add-user.svg" class="primary" text="Add New" @clicked="addStaff" />
      </div>
    </div>
    <div class="staff-grid-container">
      <div class="grid staff">
        <div class="grid-item" v-for="singleStaff of staff" :key="singleStaff.id">
          <StaffCard :context="singleStaff.context" :nationalId="singleStaff.nationalId" :name="singleStaff.firstname + ' ' + singleStaff.lastname"  />
        </div>
      </div>
    </div>
    <Popup ref="addStaff">
        <staff-registration @on-complete="closeModal" />
    </Popup>
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import Popup from "@/components/ui/Popup.vue";
import StaffCard from "@/components/ui/StaffCard.vue";
import { defineComponent } from "@vue/runtime-core";
import StaffRegistration from "./StaffRegistration.vue";

export default defineComponent({
  components: { Button, Popup, StaffRegistration, StaffCard },
  data () {
    return {
      staff: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.getStaff()
    });
  },
  methods: {
    getStaff () {
      this.loading = true
      this.axios.get('/staff/all').then((response) => {
        this.loading = false
        const data  = response.data
        this.staff = data
        for (const [index, service] of this.staff.entries()) {
          const newIndex = index + 1
          service.context = newIndex %2 == 0 ? 'primary' : newIndex % 3 == 0 &&  newIndex % 2 == 1 ? 'tertiary' : 'secondary'
        }
      })
    },
    addStaff () {
      this.$refs.addStaff.open()
    },
    closeModal () {
      this.$refs.addStaff.close()
      this.getStaff()
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
.staff {
  gap: 3em 4em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 320px));
}
</style>