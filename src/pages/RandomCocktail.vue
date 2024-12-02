<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img
                  :src="`${INGREDIENT_PIC}${ingredient}-Small.png`"
                  alt="Ingredient"
                />
                <div class="ingredient_name">{{ ingredient }}</div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import AppLayout from "../components/AppLayout.vue";
import axios from "axios";
import { RANDOM_COCKTAIL, INGREDIENT_PIC } from "@/constants";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(RANDOM_COCKTAIL);
  cocktail.value = data?.data?.drinks[0];
}

getCocktail();
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.slider {
  margin: 50px 0;

  .swiper {
    width: 586px;
  }
}

.ingredient_name {
  margin-top: 20px;
}
</style>
