import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "@/constants/index";
import Home from "../pages/Home.vue";
import Cocktail from "../pages/Cocktail.vue";
import RandomCocktail from "../pages/RandomCocktail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home,
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: Cocktail,
    },
    {
      path: ROUTES_PATHS.RANDOM_COCKTAIL,
      name: ROUTES_PATHS.RANDOM_COCKTAIL,
      component: RandomCocktail,
    },
  ],
});

export default router;
