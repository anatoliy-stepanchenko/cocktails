<template>
  <div class="root">
    <RouterLink :to="`cocktails/${cocktail.idDrink}`">
      <div
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="picture"
      ></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.root {
  width: calc((100% - 76px) / 3);
  padding-right: 38px;

  &:nth-child(3n + 3) {
    padding-right: 0;
  }

  .picture {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
  }

  .name {
    padding-top: 15px;
    letter-spacing: 0.1em;
  }
}
</style>
