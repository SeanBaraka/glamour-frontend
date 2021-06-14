<template>
  <div class="top-nav">
      <div class="profile-notifications flex row-reverse align-center">
          <div class="user-profile">
              <div class="flex align-center">
                <div class="profile-avatar">
                    <img src="@/assets/img/avatar.png" alt="" width="32">
                </div>
                <div class="profile-name">Linda S.</div>
              </div>
          </div>
          <div class="notification-count">
              <img src="@/assets/icons/ic-notification.svg" alt="" width="25">
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

.top-nav {
    padding: 1em;
    .profile-notifications {
        gap: 2.5em;
        margin: 0 5em;
    }
    .profile-name {
        font-weight: $fw-medium;
    }
}
</style>