<template>
  <div class="contacts">
    <p>Контакты</p>
    <!-- {isOpen && <Modal />} -->
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "ContactsView",
  components: {
    Modal,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/contacts.scss";
</style>
