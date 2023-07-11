<template>
  <div class="input_login">
    <span>Введите логин</span>
    <input
      type="text"
      placeholder="login"
      :value="changeLogin"
      @input="handleChangeLogin"
      @blur="handleBlurLogin"
    />
    <p v-if="validationLogin">{{ warningLogin }}</p>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import "@/assets/styles/login.scss";
</style>
