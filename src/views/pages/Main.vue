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
                <Button text="Create reservation" icon="" @clicked="addReservation" />
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
import SummaryCard from '@/components/ui/SummaryCard.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: { SummaryCard, Button },
  methods: {
    addReservation (): void {
      // do something here.. possibly launch 
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
.reservations {
  margin: 2.5em .5em
}
</style>