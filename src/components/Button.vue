<template>
  <button :class="[getButtonClass(type), className]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ["primary", "secondary", "header"].includes(value),
    },
    onClick: Function,
    className: String,
  },
  methods: {
    getButtonClass(type) {
      return `button_${type}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/button.scss";
</style>
