<template>
  <div class="staff-registration-container">
      <div class="dialog-header">Staff Registration</div>
      <div class="personal-details">
          <div class="dialog-header sm" style="margin: .7em 0 0">Personal Details</div>
          <div class="flex align-center">
              <button-group>
                  <button-item @click="staff.gender = 'male'" :class="{'active': staff.gender === 'male'}">Male</button-item>
                  <button-item @click="staff.gender = 'female'" :class="{'active': staff.gender === 'female'}">Female</button-item>
              </button-group>
              <form-input @on-change="staff.firstname = $event" placeholder="Firstname" type="text" />
              <form-input @on-change="staff.lastname = $event" placeholder="Lastname" type="text" />
          </div>
          <div class="mgy-2 flex align-center">
              <form-input @on-change="staff.nationalId = $event" placeholder="National ID" type="text" />
              <form-input @on-change="staff.address = $event" placeholder="Physical Address" type="text" />
          </div>
      </div>
      <div class="contact-details">
          <div class="dialog-header sm" style="margin: .25em 0 .5em">Contact Details</div>
          <div class="flex align-center">
              <split-input @on-change="staff.telephone = $event" placeholder="Telephone Number" label="+254" id="tel" />
              <form-input @on-change="staff.emailAddress = $event" placeholder="Email Address" type="email" />
          </div>
      </div>
      <div class="services-offered mgy-2">
          <div class="dialog-header sm" style="margin: 0em 0 .5em">Services Offered</div>
          <div class="flex align-center">
              <input-drop-down :placeholder="activeService || 'Select Services'">
                <input-drop-down-item style="font-size: 11px" 
                v-for="service of services" 
                :key="service.id"
                @click="selectService(service.id)"
                >{{service.name}}</input-drop-down-item>
              </input-drop-down>
              <info-pill v-for="selectedService of staff.services" :key="selectedService"  :content="selectedService"/>
          </div>
      </div>
      <div class="mgy-1 dialog-footer">
        <div class="foot-buttons">
            <div class="flex align-center">
                <Button text="Cancel" class="inactive sm"/>
                <Button text="Complete Registration" @clicked="handleStaffAdd" class="primary sm" v-if="!loading"/>
                <button-loader v-if="loading" />
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import ButtonLoader from '@/components/ui/ButtonLoader.vue'
import Button from '@/components/ui/Button.vue'
import { defineComponent } from '@vue/runtime-core'
import ButtonGroup from '@/components/ui/ButtonGroup.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SplitInput from '@/components/ui/SplitInput.vue'
import InputDropDown from '@/components/ui/InputDropDown.vue'
import InputDropDownItem from '@/components/ui/InputDropDownItem.vue'
import InfoPill from '@/components/ui/InfoPill.vue'

export default defineComponent({
  components: { ButtonLoader, Button, ButtonGroup, ButtonItem, FormInput, SplitInput, InputDropDown, InputDropDownItem, InfoPill },
    data () {
        return {
            loading: false,
            services: [],
            activeService: '',
            staff: {
                gender: 'male',
                firstname: '',
                lastname: '',
                nationalId: '',
                address: '',
                emailAddress: '',
                telephone: '',
                services: [],
                avatar: '',
            }
        }
    },
    mounted () {
        setTimeout(() => {
            this.getServices()
        });
    },
    methods: {
        async getServices () {
            const request = await this.axios.get('/services/all')
            const data = await request.data
            this.services = data
        },
        selectService(id) {
            this.activeService = this.services.find(x => x.id === id).name
            if (!this.staff.services.find(x => x === this.activeService)) {
                this.staff.services.push(this.activeService)
            }
        },
        async handleStaffAdd () {
            // do some stuff here
            this.loading = true
            const request = await this.axios.post('/add/new/staff', this.staff)
            if (request.status == 200) {
                this.$emit('on-complete')
                const data = await request.data
                this.$alert.show({title: 'success', content: `${data.message}`})
            }
        }
    }
})
</script>

<style scoped lang="scss">

</style>