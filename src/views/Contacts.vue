<template>
  <div>
    <Header></Header>
    <div class="container">
      <p>Контакты</p>
    </div>
    <!-- {isOpen && <Modal />} -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Contacts",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/contacts.scss";
</style>
