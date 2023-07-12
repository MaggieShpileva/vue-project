<template>
  <div class="container">
    <span>Введите пароль</span>
    <div class="input_password">
      <input
        type="text"
        name=""
        placeholder="password"
        v-model="changePassword"
        @blur="onChange"
      />
    </div>
    <p v-if="validationPassword">{{ warningPassword }}</p>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      changePassword: "",
      warningPassword: "",
      validationPassword: false,
    };
  },
  methods: {
    onChange(event) {
      if (event.target.value.length < 8) {
        this.validationPassword = true;
        this.warningPassword = "Пароль должен содержать больше 8 символов";
      } else if (!/^[a-zA-Z0-9]+$/.test(event.target.value)) {
        this.validationPassword = true;
        this.warningPassword = "Пароль должен содержать только буквы и цифры";
      } else {
        this.validationPassword = false;
        this.$store.commit("SET_PASSWORD", event.target.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/password.scss";
</style>
