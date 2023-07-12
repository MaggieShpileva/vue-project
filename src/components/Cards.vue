<template>
  <div class="cards">
    <div
      v-for="(item, index) in dataCards"
      :class="[cardClass(index), 'card']"
      :key="index"
    >
      <div class="image">
        <img :src="item.icon" alt="" />
      </div>

      <div class="title">
        <h3>{{ item.title }}</h3>
      </div>

      <hr />

      <div class="text">
        <p>Рыба текст</p>
      </div>
    </div>
  </div>
</template>

<script>
import icon_1 from "@/assets/icons/icon cool-icon-155.svg";
import icon_2 from "@/assets/icons/icon cool-icon-15.svg";
import icon_3 from "@/assets/icons/icon cool-icon-152.svg";

export default {
  data() {
    return {
      dataCards: [
        { icon: icon_1, title: "Лечение рака" },
        { icon: icon_2, title: "Онлайн-прием" },
        { icon: icon_3, title: "Экстренный Случай" },
      ],
    };
  },
  methods: {
    cardClass(index) {
      return `card_${index}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/cards.scss";
</style>
