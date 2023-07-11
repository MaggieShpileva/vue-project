<template>
  <div class="container">
    <span>Введите пароль</span>
    <div class="input_password">
      <input
        type="{passwordType}"
        name=""
        id=""
        placeholder="password"
        value="{changePassword}"
      />
      <!-- <div
          class={
            visiblePassword
              ? styles.visible_password
              : styles.unvisible_password
          }
          onClick={() => {
            setVisiblePassword(!visiblePassword);
          }}
        ></div> -->
    </div>

    <!-- {valudationPassword && <p>{warningPassword}</p>} -->
  </div>
</template>

<script>
export default {
  name: "Password",
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/password.scss";
</style>
