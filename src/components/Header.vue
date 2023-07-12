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
        v-if="userName !== undefined"
      >
        Выйти
      </Button>
      <!-- Ваш код для кнопки Войти -->
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
      userName: undefined,
    };
  },
  methods: {
    handleClickExit() {
      // Логика для обработки выхода
    },
    handleClickEnter() {
      this.$store.commit("SET_MODAL", true);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/header.scss";
</style>
