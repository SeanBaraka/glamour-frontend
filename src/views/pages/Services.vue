<template>
  <div class="page-section">
    <h3 class="page-title">Our Services</h3>
    <div class="add-button-container flex align-center justify-between">
      <div class="add-button">
        <Button icon="ic-add-user.svg" class="primary" text="Add New" @clicked="addService" />
      </div>
    </div>
    <div class="services-grid-container">
      <div class="grid services">
        <div class="grid-item" v-for="service of services" :key="service.id">
          <ServiceCard :context="service.context" :category="service.category === 'beauty' ? 'Beauty Services' : 'Salon Services'" :price="service.price" :service="service.name"  />
        </div>
      </div>
    </div>
    <Popup ref="addService">
        <add-service  @on-complete="closeModal"/>
    </Popup>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Popup from "@/components/ui/Popup";
import ServiceCard from "@/components/ui/ServiceCard.vue";
import Button from "@/components/ui/Button.vue";
import AddService from "./AddService.vue";

export default defineComponent({
  components: { Popup, ServiceCard, Button, AddService },
  name: "Services",
  data () {
    return {
      loading: false,
      services: []
    }
  },
  mounted () {
    this.getServices()
  },
  methods: {
    addService () {
      this.$refs.addService.open()
    },
    closeModal () {
      this.$refs.addService.close()
      this.getServices();
    },
    getServices () {
      this.loading = true
      this.axios.get('/services/all').then((response) => {
        this.loading = false
        const data  = response.data
        this.services = data
        for (const [index, service] of this.services.entries()) {
          const newIndex = index + 1
          service.context = newIndex %2 == 0 ? 'primary' : newIndex % 3 == 0 &&  newIndex % 2 == 1 ? 'tertiary' : 'secondary'
        }
      })
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
.services {
  gap: 3em 4em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 320px));
}
</style>
