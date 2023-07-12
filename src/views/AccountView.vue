<template>
  <div class="account">
    <div className="title" v-if="userName === null">
      <h1>Вы не авторизованы</h1>
    </div>
    <div v-else className="title">
      <h1>Привет, {{ userName }}</h1>
      <div className="buttons">
        <Button type="primary" className="exit_button" @click="handleClickExit">
          Выйти из аккаунта
        </Button>
        <Button
          type="secondary"
          className="contact_button"
          @click="this.$router.push('/contacts')"
        >
          Перейти в контакты
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Account",
  components: {
    Button,
  },
  data() {
    return {
      userName: localStorage.getItem("name"),
    };
  },
  methods: {
    handleClickExit() {
      localStorage.clear();
      this.$store.commit("SET_LOGIN", "");
      this.$store.commit("SET_PASSWORD", "");
      this.$store.commit("SET_IS_AUTH", false);
      this.userName = null;
      this.$router.push("/");
    },
  },
  watch: {
    "$store.state.isAuth"(newValue, oldValue) {
      if (newValue === true) {
        this.userName = localStorage.getItem("name");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/account.scss";
</style>
