<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Header />
  <div v-if="isValueUpdated"><Modal /></div>
  <router-view></router-view>
</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Header,
    Modal,
  },
  computed: {
    isValueUpdated() {
      return this.$store.state.isOpen;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
