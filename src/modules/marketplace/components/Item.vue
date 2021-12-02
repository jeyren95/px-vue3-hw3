<template>
  <div class="relative flex flex-col">
    <div 
    class="
    group
    block 
    w-full
    rounded-lg
    bg-gray-100
    focus-within:ring-2
    focus-within:ring-offset-2
    focus-within:ring-offset-gray-100
    focus-within:ring-pink-500
    overflow-hidden
    "
    >
      <img :src="imageUrl" class="object-cover pointer-events-none group-hover:opacity-75 h-48 w-full" alt />
    </div>

    <div class="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
      <div class="mt-1 flex-1">
        <div class="flex justify-between items-center gap-3">
          <div>$ <span class="text-2xl font-bold">{{ price }}</span></div>
          <div 
          v-if="availability === 'in-stock'" 
          class="text-sm text-gray-500"
          >
            {{ numOfStock }} piece available
          </div>
          <Badge 
          v-else
          class="text-red-800 bg-red-100"
          badgeText="Only One"
          />
        </div>
        <p class="block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ title }}</p>
        <p class="block text-sm font-medium text-gray-500 truncate pointer-events-none">{{ description }}</p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 py-3">
        <Button 
        class="
        inline-flex 
        justify-center 
        items-center 
        py-2 px-4 
        border border-transparent 
        shadow-sm 
        text-sm 
        font-medium
        rounded-md
        text-white
        bg-pink-600
        hover:bg-pink-700 
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-pink-500
        "
        type="button"
        @click="addItem({ id, title, imageUrl, price, count: 1 })"
        > 
          <ShoppingCartIcon class="h-5 w-5 text-white mr-2" />
          ADD TO CART
        </Button>
      </div>

    </div>
  </div>
</template>

<script>
import Button from "@/common/components/Button.vue"
import Badge from "./Badge.vue"

import { ShoppingCartIcon } from "@heroicons/vue/outline"

export default {
  props: ["id", "title", "description", "price", "imageUrl", "availability", "numOfStock"],
  components: {
    Button,
    Badge,
    ShoppingCartIcon
  },
  methods: {
    addItem(selectedItem) {
      this.$store.commit("addItem", selectedItem)
      this.$store.commit("calculateTotalPrice")
    }
  }
}
</script>