<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingridient"
            placeholder="Choose main ingredient"
            class="select"
            size="large"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingridients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img
          src="../assets/img/cocktails.png"
          alt="cocktails"
          class="cocktails"
        />
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "@/stores/root";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingridients, cocktails } = storeToRefs(rootStore);

const ingridient = ref(null);

function getCocktails() {
  rootStore.getCocktails(ingridient.value);
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .info {
    padding: 80px 0;
    text-align: center;

    .select-wrapper {
      padding-top: 50px;

      .select {
        width: 220px;
        background-color: cadetblue;
      }
    }

    .text {
      max-width: 516px;
      margin: 0 auto;
      padding-top: 50px;
      color: $textMuted;
      line-height: 36px;
      letter-spacing: 0.1em;
    }

    .cocktails {
      margin-top: 60px;
    }
  }
}
</style>
