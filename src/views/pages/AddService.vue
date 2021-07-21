<template>
  <div class="add-service">
    <div class="dialog-header">Service Registration</div>
    <div class="general-info mgy-2">
      <h5 class="dialog-header md">General Information</h5>
      <div class="flex align-center mgy-1">
        <input-drop-down style="font-size: 11px" :placeholder="service.category.value || 'Service Category'">
          <input-drop-down-item @click="selectCategory({key: 'beauty', value: 'Beauty Service'})">Beauty Service</input-drop-down-item>
          <input-drop-down-item @click="selectCategory({key: 'salon', value: 'Salon Service'})">Salon Service</input-drop-down-item>
        </input-drop-down>
        <form-input placeholder="Service Name" type="text" @on-change="service.name = $event" />
        <form-input placeholder="Price Charged" type="text" @on-change="service.price = $event"/>
      </div>
    </div>
    <div class="cost-items-container">
      <div class="dialog-header md">Costing Information</div>
      <div class="cost-items">
        <div class="flex align-center mgy-1">
          <form-input type="text" placeholder="Item" />
          <form-input type="text" placeholder="Cost" />
        </div>
        <div class="flex align-center mgy-1">
          <form-input type="text" placeholder="Item" />
          <form-input type="text" placeholder="Cost" />
        </div>
        <div class="flex align-center mgy-1">
          <form-input type="text" placeholder="Item" />
          <form-input type="text" placeholder="Cost" />
        </div>
      </div>
    </div>
    <div class="mgy-1 dialog-footer">
      <div class="foot-buttons">
        <div class="flex align-center">
          <Button text="Cancel" class="inactive sm"/>
          <Button text="Reserve Service" @clicked="handleServiceAdd" class="primary sm" v-if="!loading"/>
          <button-loader v-if="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/ui/Button.vue";
import InputDropDown from "@/components/ui/InputDropDown.vue";
import InputDropDownItem from "@/components/ui/InputDropDownItem.vue";
import FormInput from "@/components/ui/FormInput.vue";
import {defineComponent} from "@vue/runtime-core";
import ButtonLoader from "@/components/ui/ButtonLoader.vue";

export default defineComponent({
  name: "AddService",
  components: { FormInput, InputDropDownItem, InputDropDown, Button, ButtonLoader },
  data () {
    return {
      service: {
        category: {
          key: '',
          value: ''
        },
        name: '',
        price: '',
        costItems: []
      },
      loading: false,
    }
  },
  methods: {
    selectCategory (categoyObj: any) {
      this.service.category = categoyObj
    },
    async handleServiceAdd () {
      this.loading = true
      // create a data object for the values submitted
      const dataObj = {
        name: this.service.name,
        price: this.service.price,
        category: this.service.category.key,
        costItems: this.service.costItems
      }
      const request = await this.axios.post('/add/new/service', dataObj)
      this.loading = false
      if (request.status == 200) {
        this.$emit('on-complete')
        const response = await request.data
        this.$alert.show({title: '🎉 success', content: `${response.message}`})
      }
    }
  }
})
</script>

<style scoped lang="scss">
.flex {
  gap: 3em;
}

</style>
