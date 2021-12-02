<template>
  <li class="flex px-4 sm:px-6 py-4"> 
    <img class="h-10 w-10 rounded-full" :src="imageUrl" alt />

    <div class="flex-1 flex justify-between items-center ml-3">
      <div>
        <p class="text-sm font-medium text-gray-900">{{ title }}</p>
        <p class="text-sm text-gray-500">${{ price }} x {{ count }}</p>
      </div>

      <div class="flex items-center gap-2">
        <div>${{ (price*count).toLocaleString() }}</div>

        <Button
        type="button"
        class="
        text-red-400
        p-1
        rounded-full
        hover:bg-gray-50
        focus:outline-none
        focus:bg-gray-50
        focus:ring
        focus:ring-pink-500
        focus:ring-opacity-30
        transition
        duration-150
        ease-in-out
        "
        @click="handleDelete"
        >
          <TrashIcon class="h-6 w-6 text-pink-500" />
        </Button>
      </div>

    </div>
  </li>
</template>

<script>
import Button from "@/common/components/Button.vue"

import { TrashIcon } from "@heroicons/vue/outline"

export default {
  props: ["title", "price", "count", "imageUrl", "id"],
  components: {
    Button,
    TrashIcon
  },
  methods: {
    handleDelete() {
      this.$store.commit("deleteItem", this.id)
      this.$store.commit("calculateTotalPrice")
    }
  }
}

</script>