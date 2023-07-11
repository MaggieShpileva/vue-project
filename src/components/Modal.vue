<template>
  <div class="container">
    <div class="modal_window">
      <div class="title">
        <h1>Авторизация</h1>
      </div>
      <div class="inputs">
        <Login />
        <Password />
        <!-- <Login
            login={login}
            setLogin={setLogin}
            isLogin={isLogin}
            setError={setError}
          /> -->
        <!-- <Password
            password={password}
            setPassword={setPassword}
            isPassword={isPassword}
          /> -->
      </div>
      <!-- {error !== "" && (
          <div class="error}>
            <h3>{error}</h3>
          </div>
        )}-->

      <Button type="primary" className="enter_button"> Вход </Button>
    </div>
    <div class="bg"></div>
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
};
</script>

<style>
@import "@/assets/styles/modal.scss";
</style>
