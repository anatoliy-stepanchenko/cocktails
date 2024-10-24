<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "@/stores/root";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingridients } = storeToRefs(rootStore);
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
  }
}
</style>
