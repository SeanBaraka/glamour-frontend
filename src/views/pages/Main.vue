<template>
  <section class="page-section">
      <div class="flex">
        <div class="summaries-reservations">
          <div class="summaries">
            <div class="flex justify-between">
              <SummaryCard icon="ic-confirmed.svg" labelText="13" text="Confirmed" />
              <SummaryCard icon="ic-pending.svg" labelText="10" text="Pending" />
              <SummaryCard icon="ic-cancelled.svg" labelText="2" text="Cancelled" />
            </div>
          </div>
          <div class="reservations">
            <div class="cont flex align-center justify-between">
              <h3 class="section-heading">Reservations</h3>
              <div class="quick-actions flex align-center">
                <Button text="Create reservation" class="secondary" icon="ic-plus.svg" @clicked="addReservation" />
                <Popup class="add-reservation" ref="addreservation">
                  <add-reservation @close-dialog="closeDialog"/>
                </Popup>

                <router-link to="/dashboard/reservations">View All</router-link>
              </div>
            </div>
            <div class="reservations-list">
                <div class="app-table">
                  <div class="grid table-row bold table-header">
                    <div></div>
                    <di>Service</di>
                    <div>Time</div>
                    <div>Order Status</div>
                    <di>Stylist</di>
                  </div>
                  <div>
                    <TableRow
                        v-for="reservation of reservations"
                        :key="reservation.id"
                        :clientName="reservation.customer"
                        :timeAllocated="reservation.time"
                        orderStatus="confirmed"
                        :service="reservation.service"
                        :stylist="reservation.attendant"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="calendar-stylists">
          <!-- The calendar and stylists section goes here -->
          <h2 class="">calendar</h2>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import Button from '@/components/ui/Button.vue'
import Popup from '@/components/ui/Popup.vue'
import SummaryCard from '@/components/ui/SummaryCard.vue'
import TableRow from '@/components/ui/TableRow.vue'
import { defineComponent } from '@vue/runtime-core'
import AddReservation from './AddReservation.vue'

export default defineComponent({
  components: { SummaryCard, Button, TableRow, Popup, AddReservation },
  mounted() {
    this.getReservationList()
  },
  data () {
    return {
      rowEven: true,
      reservations: [] as any[],
      loading: false,
    }
  },
  methods: {
    async getReservationList() {
      // initiate the server request
      this.loading = true
      // get the reservations list
      const request = await this.axios.get('/reservations/list')
      const reservationOrders: any[] = request.data
      reservationOrders.length = 5 // just get the top 5 items the rest can be picked later.. probably set this on the server
      // we create a new array based on the reservation orders. we will split the reservation orders, to get the
      // individual reservation items in the order
      console.log(reservationOrders)
      for (const order of reservationOrders) {
        const customer = `${order.customer.firstname} ${order.customer.lastname}`
        const services: any[] = order.services // we get a list of all the services within the order and make a reservation list based on them
        services.forEach(service => {
          // split up the service and get the appropriate pieces of ifo
          const reservation = {
            customer,
            time: `${service.startTime} - ${service.endTime}`,
            attendant: service.attendant.firstname,
            service: service.service
          }
          this.reservations.push(reservation)
        })
      }
    },
    addReservation (): void {
      // do something here.. possibly launch
      const launchModal: any = this.$refs.addreservation
      launchModal.open()
    },
    closeDialog (): void {
      const launchModal: any = this.$refs.addreservation
      this.getReservationList()
      launchModal.close()
    }
  }

})
</script>

<style scoped lang="scss">
.summaries-reservations {
  flex: 2;
}
.calendar-stylists {
  flex: 1;
}
.summaries,.cont {
  width: 90%;
  margin: 0 auto;
}
.reservations {
  width: 90%;
  margin: 2.5em auto;
  .button-container {
    max-width: 180px;
    font-size: 11px;
  }
  .quick-actions {
    gap: 2em;
    a {
      display: inline-block;
      padding: .5em 3em;
      font-size: 12px;
    }
  }
  .table-header {
    grid-template-columns: 200px 150px 150px 150px 150px;
  }
}
</style>
