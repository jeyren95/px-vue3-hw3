<template>
  <main v-if="!accessToken" class="bg-gray-50 p-6 sm:p-12 min-h-screen">
    <LoginForm />
  </main>
  <main v-else class="bg-gray-50 lg:flex">
    <div class="flex-1">
      <div class="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center mb-12">
          <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Marketplace</h1>
        </div>
        <AllItems />
      </div>
    </div>

    <div class="flex-initial bg-white w-full lg:max-w-md border-b border-gray-100">
      <div class="flex flex-col h-full">
        <div class="py-6 px-4 bg-pink-700 sm:px-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-medium text-white">Your shopping cart</h2>
          </div>
          <div class="mt-1">
            <p class="text-sm text-pink-300">Listing added into your shopping cart</p>
          </div>
        </div>

        <ShoppingCart v-if="shoppingCart.length > 0" />

        <div v-else class="px-4 sm:px-6 pb-12">
          <div class="pt-6 pb-12">
            <div>
              <div class="p-4 text-center">
                <ShoppingBagIcon class="h-12 w-12 text-gray-300 inline-block" /> 
              </div>
              <p class="text-center text-gray-500">There is no item in your shopping cart.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, useStore } from "vuex"
import { onMounted } from "vue"
import { useQueryProvider } from "vue-query"

import LoginForm from "@/modules/auth/components/LoginForm.vue"
import AllItems from "@/modules/marketplace/components/AllItems.vue"
import ShoppingCart from "@/modules/marketplace/components/ShoppingCart.vue"

import { ShoppingBagIcon } from "@heroicons/vue/outline"

export default {
  name: 'App',
  components: {
    LoginForm,
    AllItems,
    ShoppingCart,
    ShoppingBagIcon
  },
  computed: {
    ...mapState({
      accessToken: state => state.accessToken,
      shoppingCart: state => state.marketplaceStore.shoppingCart
    })
  },
  setup() {
    useQueryProvider()

    const store = useStore()
    const setAccessToken = () => {
      let storedAccessToken = localStorage.getItem("accessToken")
      if (storedAccessToken) {
        store.commit("setAccessToken", storedAccessToken)
      }
    }

    onMounted(setAccessToken)
  }
}
</script>

