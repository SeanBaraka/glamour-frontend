<template>
    <div class="add-reservation">
            <div class="dialog-header">Create Reservation</div>
            <div class="client-search-results flex align-center">
                <div class="flex align-center client-search" v-if="!newCustomer && !customerFound && !searchResults">
                    <!-- our custom client search input box -->
                    <InputButton class="primary" :loading="searching" @on-submit="searchCustomer($event)" placeholder="Search Customer" icon="ic-search-alt.svg" />
                    <!-- add new customer -->
                    <Button text="Add New" @click="newCustomer = true" icon="ic-add-user.svg" class="primary sm short" />
                </div>

                <div class="search-results mgy-1" v-if="searchResults && customerFound">
                    <div class="flex customer-telephone align-center">
                        <!-- customer name -->
                        <info-pill class="primary md" icon="ic-info.svg" :content="customerResponse.firstname + ' ' + customerResponse.lastname" />
                        <!-- customer telephone -->
                        <info-pill class="primary md" :content="'Tel: ' + customerResponse.telephone" />
                    </div>
                </div>
                <div class="search-results" v-if="searchResults && !customerFound">
                    <div class="flex align-center">
                        <!-- a customer was not found -->
                        <div class="not-found flex align-center">
                            <img src="@/assets/icons/ic-info.svg" alt="" width="20">
                            <p class="sm semi-bold text-danger">No Customer Found</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- New Customer Registration -->
            <transition name="slide-fade">
                <div class="customer-registration mgy-1" v-if="newCustomer && !customerFound">
                    <div class="dialog-header md">New Customer Registration</div>
                    <div class="form-input-group flex align-center">
                        <ButtonGroup>
                            <ButtonItem :class="{'active': reservation.customer.gender === 'male'}" @click="reservation.customer.gender = 'male'">Male</ButtonItem>
                            <ButtonItem :class="{'active': reservation.customer.gender === 'female'}" @click="reservation.customer.gender = 'female'">Female</ButtonItem>
                        </ButtonGroup>
                        <FormInput @on-change="reservation.customer.firstname = $event" placeholder="Enter firstname" type="text" />
                        <FormInput @on-change="reservation.customer.lastname = $event" placeholder="Enter lastname" type="text" />
                    </div>
                    <div class="form-input-group flex align-center">
                        <SplitInput @on-change="reservation.customer.telephone = $event" placeholder="Telephone Number" label="+254" />
                        <FormInput @on-change="reservation.customer.address = $event" placeholder="Physical Address" type="tel" />
                    </div>
                    <div class="form-input-group">
                        <Button @clicked="handleCustomerRegistration" text="Complete Registration" class="primary" style="max-width: 150px;font-size:12px" :class="customerAdding ? 'disabled inactive' : ''" />
                    </div>
                </div>
            </transition>
            <div class="mgy-1" v-if="showServices && !newCustomer">
                <div class="dialog-header sm">
                    Select The Desired Service
                </div>
                <!-- the various categories of services -->
                <div class="mgy-1 services-category" v-for="serviceCategory of serviceCategories" :key="serviceCategory">
                    <div class="dialog-header xsm">{{serviceCategory.fullname}}</div>
                    <div class="services">
                        <!-- the various serives belonging to the specified category -->
                        <select-pill v-for="service of services.filter(x => x.category === serviceCategory.name)" :key="service.id" @click="handleServiceAdd({order: service.name})" :label="service.name" :id="service.id"/>
                    </div>
                </div>
            </div>
            <transition name="slide-fade">
                <div class="mgy-1" v-if="!showServices && customerFound">
                    <div class="mgy-1 services-category">
                        <div class="dialog-header sm">Favourite Services</div>
                            <div class="services">
                                <div class="flex align-center">
                                    <select-pill v-for="service of reservation.orderServices" :key="service.order" :label="service.order" class="primary-pill" />
                                </div>
                            </div>
                        </div>
                        <div class="mgy-1 services-category">
                            <div class="dialog-header sm mgy-1">Booked Services</div>
                            <div class="grid table-row bold table-header">
                                <div>Service</div>
                                <div>Attendant</div>
                                <div>Date</div>
                                <div>Time</div>
                            </div>
                            <div class="mgy-2 grid table-row table-body" v-for="(service, index) of reservation.orderServices" :key="service.order">
                                <div>{{service.order}}</div>
                                <InputDropDown :placeholder="service.attendant || 'Select Attendant'">
                                    <input-drop-down-item @click="selectAttendant('Loise', index)">Louise K</input-drop-down-item>
                                    <input-drop-down-item @click="selectAttendant('Jennifer', index)">Jennifer</input-drop-down-item>
                                    <input-drop-down-item @click="selectAttendant('Lynnet', index)">Lynnet M.</input-drop-down-item>
                                    <input-drop-down-item @click="selectAttendant('Catherine', index)">Catherine</input-drop-down-item>
                                </InputDropDown>
                                <div>
                                  <DateInput placeholder="dd/mm/yyyy" @on-changed="service.date = $event" />
                                </div>
                                <div>
                                  <div class="flex">
                                    <TimeInput placeholder="hh:mm" @on-changed="service.startTime = $event"/>
                                    <TimeInput placeholder="hh:mm" @on-changed="service.endTime = $event" />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </transition>
        </div>
        <div class="mgy-1 dialog-footer">
            <div class="text-center">
                <div class="flex justify-center">
                  <Button text="Back" class="inactive sm" @clicked="backPage" v-if="customerAdding || customerFound"/>
                  <Button @clicked="moveNextPage" postfix-icon="ic-back.svg" text="Next" class="primary sm" v-if="!validReservation"/>
                  <Button @clicked="handleReservation" text="Reserve Service" class="primary sm" v-if="validReservation && !reserving"/>
                  <button-loader v-if="reserving" />
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import InputButton from '@/components/ui/InputButton.vue'
import InfoPill from '@/components/ui/InfoPill.vue'
import SelectPill from '@/components/ui/SelectPill.vue'
import Button from '@/components/ui/Button.vue'
import ButtonGroup from '@/components/ui/ButtonGroup.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SplitInput from '@/components/ui/SplitInput.vue'
import { defineComponent } from '@vue/runtime-core'
import InputDropDown from '@/components/ui/InputDropDown.vue'
import InputDropDownItem from '@/components/ui/InputDropDownItem.vue'
import DateInput from "@/components/ui/DateInput.vue";
import TimeInput from "@/components/ui/TimeInput.vue";
import ButtonLoader from '@/components/ui/ButtonLoader.vue'

export default defineComponent({
  components: {
    TimeInput,
    DateInput,
    InputButton, InfoPill, SelectPill, Button, ButtonGroup, ButtonItem, FormInput, SplitInput, InputDropDown, InputDropDownItem,
    ButtonLoader  },
    data () {
        return {
          button:{
            text: 'Next',
            icon: 'ic-back.svg'
          },
            reservation: {
              valid: false,
                customer: {
                    gender: 'female',
                    firstname: '',
                    lastname: '',
                    telephone: '',
                    address: '',
                    id: ''
                },
                orderServices: [] as any[]
            },
            customerFound: false,
            customerResponse: {},
            searchResults: false,
            newCustomer: false,
            searching: false,
            showServices: true,
            customerAdding: false,
            reserving: false,
            serviceCategories: [] as any[],
            services: []
        }
    },
    computed: {
      validReservation (): boolean {
        // we get the number of services in the order reservation
        const numberOfServices = this.reservation.orderServices.length
        // here we are getting an index validator to check if a certain service exists on the order services
        const indexValidator = Math.floor(Math.random() * (numberOfServices - 1)) // a random number between 0 and the number of items
        if (indexValidator >= 0) {
          return !this.showServices && this.customerFound && this.reservation.orderServices[indexValidator] !== undefined
        } else {
          return false
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
            // get all the services first
            const request = await this.axios.get('/services/all')
            const data = await request.data
            this.services = data
            for (const service of data) {
                const serviceName: string = service.category
                const formatedName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1)
                const category = {
                    name: service.category,
                    fullname: `${formatedName} Services`,
                }
                if (!this.serviceCategories.find(x => x.name === category.name)) {
                    this.serviceCategories.push(category)
                }
            }
        },
      selectAttendant (name = '', serviceId = -1) {
        // get the service from the service id passed
        const service = this.reservation.orderServices.filter((x,i) => i === serviceId)[0]
        service.attendant = name
      },
        handleServiceAdd (service: { order: any }) {
          const serviceExists = this.reservation.orderServices.find((x) => x.order === service.order)
            if (!serviceExists) {
                this.reservation.orderServices.push(service)
            }
        },
        moveNextPage () {
            this.showServices = false;
            this.customerFound = true;
        },
      backPage () {
          this.showServices = true;
          this.newCustomer = false;
          this.searchResults = false
          this.customerFound = false
      },
        async searchCustomer (searchparam: string) {
            this.searching = true
            const searchObj = {
                searchParam: searchparam
            }
            const searchRequest = await this.axios.post('/customer/search', searchObj)
            if (searchRequest.status == 200 && searchRequest.data.status !== 404) {
                this.customerResponse = searchRequest.data
                this.reservation.customer = searchRequest.data
                this.customerFound = true,
                this.searchResults = true,
                this.searching = false
            } else {
                this.customerFound = false,
                this.searchResults  = true,
                this.searching = false
            }
        },
        async handleCustomerRegistration () {
            this.customerAdding = true
            // here we handle the registration of a customer
            // we need a customer object with the set parameters. for this case
            // we will use the customer object in our component data object
            const serverRequest = await this.axios.post('/customer/registration/', this.reservation.customer)
            // if we get a successfull server response
            if (serverRequest.status == 200) {
                const data = await serverRequest.data;
                this.customerAdding = false;
                this.searching = false;
                this.newCustomer = false
                this.$alert.show({title: '🎉 success', content: `${data.message}`})
            } else {
                this.$alert.show({title: 'ERROR:', content: `${serverRequest.statusText}`})
            }
        },

        async handleReservation () {
          // init the process
          this.reserving = true
          // handle reservation process
          // let's create the reservation
          const reservationObj = {
            customer: this.reservation.customer.id,
            services: this.reservation.orderServices
          }
          const reservationRequest = await this.axios.post('/customer/reservation/create', reservationObj )
          const response = await reservationRequest.data
          if (reservationRequest.status == 200) {
            this.reserving = false
            this.$emit('close-dialog')
            this.$alert.show({title: '🎉 success', content: response.message})
          }
        }
    }
})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.slide-fade-enter-from, .slide-fade-leave-to {
    opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .75s ease-in-out
}

.client-search-results {
    gap: 4em
}
.services.grid {
    // grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    // gap: .5em
}
.form-input-group {
    margin: 1.5em 0
}
.not-found {
    margin: 1.5em 0
}
.table-header {
    grid-template-columns: 200px 250px 200px 200px;
    font-size: 80%;
    color: $input-outline
}
.table-body {
    grid-template-columns: 200px 250px 200px 200px;
    font-size: 11px;
}
</style>
