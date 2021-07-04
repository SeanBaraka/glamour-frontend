<template>
  <div class="login-container">
    <div class="login-form">
      <img src="@/assets/img/logo.svg" alt="Glamour">
      <CardInput prefixIcon="ic-mail.svg" inputType="email" placeholderText="Enter your email address or username" />
      <CardInput prefixIcon="ic-lock.svg" inputType="password" placeholderText="Enter your password" />
      <Checkbox labelText="Remember Me" />
      <Button text="Sign In" class="secondary" @clicked="handleLogin"/>
      <p>Forgot Password ? <span> Reset from here</span></p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import CardInput from "@/components/ui/CardInput.vue";
import Checkbox from "@/components/ui/Checkbox.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { CardInput, Checkbox, Button },
    name: 'Login',
    methods: {
      handleLogin() {
        this.$router.push('dashboard')
      }
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.login-container {
  position: relative;
  top: 7.5em;
  // transform: transalateY(-50%);
  width: 90%;
  margin: 0 auto;
  max-width: 400px;
  img {
    width: 240px
  }
  p {
    font-weight: 500;
    span {
      color: $secondary-color;
      text-decoration: underline;
      display: inline-block;
      margin-left: 1em;
    }
  }
}
</style>