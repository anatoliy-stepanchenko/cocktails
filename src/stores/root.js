import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL } from "@/constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingridients: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingridients = data?.data?.drinks;
    },
  },
});
