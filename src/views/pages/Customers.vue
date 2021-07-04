<template>
  <div class="page-section">
    <h3 class="page-title">Customers</h3>

    <div class="search-bar-container flex align-center justify-between">
      <div class="search-bar">
        <search-input criteria="Name" />
      </div>
      <div class="add-button">
        <Button icon="ic-add-user.svg" class="primary" text="Add New" @clicked="addCustomer" />
      </div>
    </div>
    <AppTable>
      <table-header>
        <div class="col">Name</div>
        <div class="col">Telephone</div>
        <div class="col">Gender</div>
        <div class="col">Location</div>
        <div class="col">Actions</div>
        <div class="col"></div>
      </table-header>
      <table-body>
        <row>
          <div class="col">Anna Mwongeli</div>
          <div class="col">0754123212</div>
          <div class="col">Female</div>
          <div class="col">Machakos</div>
          <div class="col flex align-center">
            <div class="action-button">
              <button class="clear edit">
                <img src="@/assets/icons/ic-edit.svg" width="15" alt="">
              </button>
            </div>
            <div class="action-button">
              <button class="clear edit">
                <img src="@/assets/icons/ic-bin.svg" width="15" alt="">
              </button>
            </div>
          </div>
          <div class="col">
            <router-link to="profile">View Profile</router-link>
          </div>
        </row>
      </table-body>
    </AppTable>
    <popup ref="dialog">
      
    </popup>
  </div>
</template>

<script lang="ts">
import AppTable from "@/components/ui/AppTable.vue";
import Button from "@/components/ui/Button.vue";
import Popup from "@/components/ui/Popup.vue";
import Row from "@/components/ui/Row.vue";
import SearchInput from "@/components/ui/SearchInput.vue";
import TableBody from "@/components/ui/TableBody.vue";
import TableHeader from "@/components/ui/TableHeader.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { AppTable, TableHeader, TableBody, Row, Button, SearchInput, Popup },
  methods: {
    addCustomer () {
      const dialog: any = this.$refs.dialog
      dialog.open()
    }
  }
})
</script>

<style scoped>
.button-container {
  margin: 0 auto;
  padding: .5em 1em;
  font-size: 12px;
}
</style>