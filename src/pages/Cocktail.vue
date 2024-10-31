<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
</script>

<style lang="scss" scoped>
@use "../assets/styles/main" as *;
</style>
