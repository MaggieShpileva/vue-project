<template>
  <div class="home">
    <Header />
    <!-- <Modal /> -->
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Modal,
  },
};
</script>
