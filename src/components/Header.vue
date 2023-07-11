<template>
  <header>
    <div class="logo">
      <router-link to="/">logo</router-link>
    </div>
    <div class="buttons">
      <div class="contacts">
        <router-link to="/contacts">Контакты</router-link>
      </div>
      <!-- {userName !== undefined ? (
      <Button
        type="header"
        class="{styles.exit_button}"
        onClick="{handleClickExit}"
      >
        Выйти
      </Button>
      ) : (
     
      )} -->
      <Button
        type="header"
        classNames="enter_button"
        onClick="{handleClickEnter}"
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
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/header.scss";
</style>
