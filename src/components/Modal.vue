<template>
  <div class="container">
    <div class="modal_window">
      <div class="title">
        <h1>Авторизация</h1>
      </div>
      <div class="inputs">
        <Login />
        <Password />
      </div>
      <!-- {error !== "" && (
          <div class="error}>
            <h3>{error}</h3>
          </div>
        )}-->

      <Button type="primary" className="enter_button"> Вход </Button>
    </div>
    <div class="bg" @click="closeModal"></div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Password from "@/components/Password.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Modal",
  components: {
    Login,
    Password,
    Button,
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_MODAL", false);
    },
  },
};
</script>

<style>
@import "@/assets/styles/modal.scss";
</style>
