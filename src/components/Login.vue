<template>
  <div class="input_login">
    <span>Введите логин </span>
    <input
      type="text"
      placeholder="login"
      v-model="changeLogin"
      @blur="onChange"
    />
    <p v-if="validationLogin">{{ warningLogin }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeLogin: "",
      warningLogin: "",
      validationLogin: false,
    };
  },
  methods: {
    onChange(event) {
      if (event.target.value.length < 4) {
        this.validationLogin = true;
        this.warningLogin = "Логин должен содержать не менее 4 символов";
      } else {
        this.validationLogin = false;
        this.$store.commit("SET_LOGIN", event.target.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/login.scss";
</style>
