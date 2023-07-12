<template>
  <div class="home">
    <div class="info">
      <InfoMainTitle />
      <Cards />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import Cards from "@/components/Cards.vue";
import InfoMainTitle from "@/components/InfoMainTitle.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Modal,
    Cards,
    InfoMainTitle,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/home.scss";
</style>
