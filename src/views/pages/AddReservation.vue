<template>
    <div class="add-reservation">
        <div class="dialog-header">Create Reservation</div>
            <div class="client-search-results flex align-center">
                <div class="client-search" v-if="!newCustomer && !customerFound && !searchResults">
                    <!-- our custom client search input box -->
                    <InputButton class="primary" :loading="searching" @on-submit="searchCustomer($event)" placeholder="Search Customer" icon="ic-search-alt.svg" />
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
                    <div class="flex customer-telephone align-center">
                        <!-- a customer was not found -->
                        <div class="not-found flex align-center">
                            <img src="@/assets/icons/ic-info.svg" alt="" width="20">
                            <p class="sm semi-bold text-danger">No Customer Found</p>
                        </div>
                        <!-- add new customer -->
                        <Button text="Add New" v-if="!newCustomer" @click="newCustomer = true" icon="ic-add-user.svg" class="primary sm short" />
                    </div>
                </div>
            </div>
            <!-- New Customer Registration -->
            <transition name="slide-fade">
                <div class="customer-registration mgy-1" v-if="newCustomer && searchResults && !customerFound">
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
            <div class="mgy-1" v-if="showServices">
                <div class="dialog-header sm">
                    Select The Desired Service
                </div>
                <!-- the various categories of services -->
                <div class="mgy-1 services-category">
                    <div class="dialog-header xsm">Salon Services</div>
                    <div class="services">
                        <!-- the various serives belonging to the specified category -->
                        <select-pill @click="handleServiceAdd('crotcheting')" label="Crotcheting" id="crotcheting"/>
                        <select-pill @click="handleServiceAdd('weaving')" label="Weaving" id="weaving"/>
                        <select-pill @click="handleServiceAdd('wash')" label="Wash and Blow dry" id="wash"/>
                        <select-pill @click="handleServiceAdd('treatment')" label="Treatment" id="treat"/>
                        <select-pill @click="handleServiceAdd('dye')" label="Dye" id="dye"/>
                        <select-pill @click="handleServiceAdd('coloring')" label="Coloring" id="colouring"/>
                        <select-pill @click="handleServiceAdd('braiding')" label="Braiding and Retouch" id="br"/>
                        <!-- <select-pill label="Wash and Set" id="ws"/>
                        <select-pill label="Own Retouch" id="or"/>
                        <select-pill label="Retouch" id="retouch"/> -->
                    </div>
                </div>
                <div class="mgy-1 services-category">
                    <div class="dialog-header xsm">Beauty Services</div>
                    <div class="services">
                        <!-- the various serives belonging to the specified category -->
                        <select-pill @click="handleServiceAdd('gel')" label="Gel Polish" id="gel"/>
                        <select-pill @click="handleServiceAdd('pedicure')" label="Pedicure" id="pedi"/>
                        <select-pill @click="handleServiceAdd('polish')" label="Polish" id="pol"/>
                        <select-pill @click="handleServiceAdd('stickons')" label="Stickons / Gel" id="sg"/>
                        <select-pill @click="handleServiceAdd('accrylics')" label="Accrylics" id="acc"/>
                        <select-pill @click="handleServiceAdd('wax')" label="Waxing" id="wax"/>
                        <select-pill @click="handleServiceAdd('heena')" label="Heena" id="heena"/>
                        <select-pill @click="handleServiceAdd('massage')" label="Full body Massage" id="massage"/>
                    </div>
                </div>
            </div>
            <transition name="slide-fade">
                <div class="mgy-1" v-if="!showServices && customerFound">
                    <div class="mgy-1 services-category">
                        <div class="dialog-header sm">Favourite Services</div>
                            <div class="services">
                                <div class="flex align-center">
                                    <select-pill v-for="service of reservation.services" :key="service" :label="service" class="primary-pill" />
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
                            <div class="mgy-2 grid table-row table-body" v-for="service of reservation.services" :key="service">
                                <div>{{service}}</div>
                                <InputDropDown placeholder="Select Attendant">
                                    <input-drop-down-item>Louise K</input-drop-down-item>
                                    <input-drop-down-item>Jennifer</input-drop-down-item>
                                    <input-drop-down-item>Lynnet M.</input-drop-down-item>
                                    <input-drop-down-item>Catherine</input-drop-down-item>
                                </InputDropDown>
                                <div>7/7/2021</div>
                                <div>10:00 - 11:00</div>
                            </div>
                        </div>
                    </div>
            </transition>
        </div>
        <div class="mgy-1 dialog-footer">
            <div class="text-center">
                <div class="flex justify-center">
                    <Button text="Cancel" class="inactive sm" />
                    <Button @clicked="moveNextPage" text="Reserve Service" class="primary sm"/>
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

export default defineComponent({
  components: {InputButton, InfoPill, SelectPill, Button, ButtonGroup, ButtonItem, FormInput, SplitInput, InputDropDown, InputDropDownItem  },
    data () {
        return {
            reservation: {
                customer: {
                    gender: 'female',
                    firstname: '',
                    lastname: '',
                    telephone: '',
                    address: ''
                },
                services: [] as any[]
            },
            customerFound: false,
            customerResponse: {},
            searchResults: false,
            newCustomer: false,
            searching: false,
            showServices: true,
            customerAdding: false,
        }
    },
    methods: {
        handleServiceAdd (service = '') {
            if (!this.reservation.services.includes(service)) {
                this.reservation.services.push(service)
            }
        },

        moveNextPage () {
            this.showServices = false;
            this.customerFound = true;
        },
        async searchCustomer (searchparam: string) {
            console.log(searchparam)
            this.searching = true
            const searchObj = {
                searchParam: searchparam
            }
            const searchRequest = await this.axios.post('/customer/search', searchObj)
            if (searchRequest.status == 200 && searchRequest.data.status !== 404) {
                this.customerResponse = searchRequest.data
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

.dialog-header {
    font-weight: $fw-bold;
    font-size: 1.18em;
    &.md {
        font-size: 95%
    }
    &.sm  {
        font-size: 90%;
    }
    &.xsm {
        font-size: 75%;
    }
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
    grid-template-columns: 200px 250px 150px 150px;
    font-size: 80%;
    color: $input-outline
}
.table-body {
    grid-template-columns: 200px auto 150px 150px;
    font-size: 11px;
}
</style>