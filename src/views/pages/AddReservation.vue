<template>
    <div class="add-reservation">
        <div class="dialog-header">Create Reservation</div>
        <div class="client-search-results flex align-center">
            <div class="client-search" v-if="!newCustomer">
                <!-- our custom client search input box -->
                <InputButton class="primary" :loading="searching" @on-submit="searchCustomer($event)" placeholder="Search Customer" icon="ic-search-alt.svg" />
            </div>
            <div class="search-results" v-if="searchResults && customerFound">
                <div class="flex customer-telephone align-center">
                    <!-- customer name -->
                    <info-pill class="primary" icon="ic-info.svg" content="Agnes Kamengele" />
                    <!-- customer telephone -->
                    <info-pill class="primary" content="Tel: 0723765676" />
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
            <div class="customer-registration mgy-1" v-if="newCustomer && searchResults">
                <div class="dialog-header md">New Customer Registration</div>
                <div class="form-input-group flex align-center">
                    <ButtonGroup>
                        <ButtonItem :class="{'active': reservation.customer.gender === 'male'}" @click="reservation.customer.gender = 'male'">Male</ButtonItem>
                        <ButtonItem :class="{'active': reservation.customer.gender === 'female'}" @click="reservation.customer.gender = 'female'">Female</ButtonItem>
                    </ButtonGroup>
                    <FormInput @on-change="customer.firstname = $event" placeholder="Enter firstname" type="text" />
                    <FormInput @on-change="customer.lastname = $event" placeholder="Enter lastname" type="text" />
                </div>
                <div class="form-input-group flex align-center">
                    <SplitInput @on-change="customer.telephone = $event" placeholder="Telephone Number" label="+254" />
                    <FormInput @on-change="customer.address = $event" placeholder="Physical Address" type="tel" />
                </div>
                <div class="form-input-group">
                    <Button @clicked="handleCustomerRegistration" text="Complete Registration" class="primary" style="max-width: 150px;font-size:12px" />
                </div>
            </div>
        </transition>
        <div class="mgy-1" v-if="showServices && !newCustomer || !searchResults">
            <div class="dialog-header sm">
                Select The Desired Service
            </div>
            <!-- the various categories of services -->
            <div class="mgy-1 services-category">
                <div class="dialog-header xsm">Salon Services</div>
                <div class="services">
                    <!-- the various serives belonging to the specified category -->
                    <select-pill label="Crotcheting" id="crotcheting"/>
                    <select-pill label="Weaving" id="weaving"/>
                    <select-pill label="Wash and Blow dry" id="wash"/>
                    <select-pill label="Treatment" id="treat"/>
                    <select-pill label="Dye" id="dye"/>
                    <select-pill label="Coloring" id="colouring"/>
                    <select-pill label="Braiding and Retouch" id="br"/>
                    <select-pill label="Wash and Set" id="ws"/>
                    <select-pill label="Own Retouch" id="or"/>
                    <select-pill label="Retouch" id="retouch"/>
                </div>
            </div>
            <div class="mgy-1 services-category">
                <div class="dialog-header xsm">Beauty Services</div>
                <div class="services">
                    <!-- the various serives belonging to the specified category -->
                    <select-pill label="Gel Polish" id="gel"/>
                    <select-pill label="Pedicure" id="pedi"/>
                    <select-pill label="Polish" id="pol"/>
                    <select-pill label="Stickons / Gel" id="sg"/>
                    <select-pill label="Accrylics" id="acc"/>
                    <select-pill label="Waxing" id="wax"/>
                    <select-pill label="Heena" id="heena"/>
                    <select-pill label="Full body Massage" id="massage"/>
                </div>
            </div>
        </div>
        <div class="mgy-1 dialog-footer">
            <div class="text-center">
                <div class="flex justify-center">
                    <Button text="Cancel" class="inactive sm" />
                    <Button text="Next" class="primary sm" postfixIcon="ic-back.svg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputButton from '@/components/ui/InputButton.vue'
import InfoPill from '@/components/ui/InfoPill.vue'
import SelectPill from '@/components/ui/SelectPill.vue'
import Button from '@/components/ui/Button.vue'
import ButtonGroup from '@/components/ui/ButtonGroup.vue'
import ButtonItem from '@/components/ui/ButtonItem.vue'
import FormInput from '@/components/ui/FormInput.vue'
import SplitInput from '@/components/ui/SplitInput.vue'


export default {
  components: {InputButton, InfoPill, SelectPill, Button, ButtonGroup, ButtonItem, FormInput, SplitInput  },
    data () {
        return {
            reservation: {
                customer: {
                    gender: 'female',
                    firstname: '',
                    lastname: '',
                    telephone: '',
                    address: '' 
                }
            },
            customerFound: false,
            searchResults: false,
            newCustomer: false,
            searching: false,
            showServices: true
        }
    },
    methods: {
        searchCustomer (searchparam) {
            console.log(searchparam)
            this.searching = true
            setTimeout(() => {
                this.customerFound = false
                this.searchResults = true
                this.searching = false
            }, 3000);
        },
        async handleCustomerRegistration () {
            // here we handle the registration of a customer
            // we need a customer object with the set parameters. for this case
            // we will use the customer object in our component data object
            const serverRequest = await this.axios.post('/customer/registration/', this.customer)
            // if we get a successfull server response
            if (serverRequest.status == 200) {
                const data = await serverRequest.data
                this.$alert.show({title: '🎉 success', content: `${data.message}`})
            } else {
                this.$alert.show({title: 'ERROR:', content: `${serverRequest.statusText}`})
            }
        }
    }
}
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
</style>