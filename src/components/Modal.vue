<template>
  <div class="modal">
    <div class="modal_window">
      <div class="title">
        <h1>Авторизация</h1>
      </div>

      <div class="inputs">
        <Login />
        <Password />
      </div>
      <div class="error" v-if="error !== ''">
        <h3>{{ error }}</h3>
      </div>
      <Button type="primary" className="enter_button" @click="handleClick">
        Вход
      </Button>
    </div>

    <div class="bg" @click="closeModal"></div>
  </div>
</template>

<script>
import data from "../assets/data/users.json";
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

  data() {
    return {
      error: "",
    };
  },
  setup() {
    return {};
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_MODAL", false);
    },

    handleClick() {
      // this.$store.state;
      if (this.$store.state.login !== "" && this.$store.state.password !== "") {
        const user = data.find(
          (item) => item.login === this.$store.state.login
        );

        if (user === undefined) {
          this.error = "Такого пользователя не существует";
        } else if (user.password !== this.$store.state.password) {
          this.error = "Неправильный пароль";
        } else {
          console.log("good");
          this.$store.commit("SET_MODAL", false);
        }
        console.log(user);
      } else {
        this.error = "Введите логин и пароль";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/modal.scss";
</style>
