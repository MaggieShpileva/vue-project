<template>
  <header>
    <div class="logo">
      <router-link to="/">logo</router-link>
    </div>
    <div class="buttons">
      <div class="contacts">
        <router-link to="/contacts">Контакты</router-link>
      </div>

      <Button
        type="header"
        class="exit_button"
        @click="handleClickExit"
        v-if="userName !== null"
      >
        Выйти
      </Button>
      <Button
        type="header"
        class="enter_button"
        @click="handleClickEnter"
        v-else
      >
        Войти
      </Button>
    </div>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Header",
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

    handleClickEnter() {
      this.$store.commit("SET_MODAL", true);
    },
  },
  watch: {
    "$store.state.isAuth"(newValue, oldValue) {
      if (newValue === true) {
        this.userName = localStorage.getItem("name");
      } else {
        this.userName = null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/header.scss";
</style>
