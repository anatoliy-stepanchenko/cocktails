<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    requared: true,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
@use "sass:color";

.root {
  display: flex;
  min-height: 100vh;
  background-color: $background;
}

.img {
  width: 50%;
  max-height: 100vh;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;

  .btn {
    position: absolute;
    top: 32px;
    right: 40px;
    font-size: 16px;
    font-family: "Raleway", "Arial", sans-serif;
    background-color: $accent;
    border-color: $accent;
    color: $text;
    border-radius: 4px;

    &:hover,
    &:active {
      background-color: color.adjust($accent, $lightness: -15%);
      border-color: color.adjust($accent, $lightness: -15%);
    }
  }
}
</style>
