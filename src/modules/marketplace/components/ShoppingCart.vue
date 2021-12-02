<template>
  <div>
    <ul>
      <CartItem 
      v-for="(item, index) in shoppingCart"
      :key="index"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :count="item.count"
      :title="item.title"
      :price="item.price" 
      />
    </ul>
  </div>
  <div class="flex-shrink-0 px-4 py-4 flex justify-end border-t border-gray-200">
    <span>
      Total
      <span class="text-3xl">$ <span>{{ totalPrice.toFixed(2) }}</span></span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex"

import CartItem from "./CartItem.vue"

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      shoppingCart: state => state.marketplaceStore.shoppingCart,
      totalPrice: state => state.marketplaceStore.totalPrice
    })
  }
}
</script>