<template>
  <div class="help">
    <div class="title">
      <h1>Место для получения медицинской помощи</h1>
    </div>
    <div className="buttons">
      <Button
        type="primary"
        className="enter_button"
        @click="handleClickExit"
        v-if="this.userName !== null"
      >
        Выйти
      </Button>
      <Button
        type="primary"
        className="enter_button"
        @click="handleClickEnter"
        v-else
      >
        Войти
      </Button>
      <Button
        type="secondary"
        className="contact_button"
        @click="this.$router.push('/contacts')"
      >
        Контакты
      </Button>
    </div>
  </div>
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
@import "@/assets/styles/info-main-title.scss";
</style>
