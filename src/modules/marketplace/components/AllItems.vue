<template>
  <div class="flex justify-center items-center mb-8">
    <Button 
    type="button"
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
    mr-5
    "
    @click="() => page > 1 && page--"
    >
      <ArrowCircleLeftIcon class="h-5 w-5 text-white mr-2" />
      Previous
    </Button>
    <span>Page {{ page }}</span>
    <Button 
    type="button"
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
    ml-5
    "
    @click="() => page++"
    >
      Next
      <ArrowCircleRightIcon class="h-5 w-5 text-white ml-2" />
    </Button>
  </div>


  <h1 v-if="isLoading">Loading items...</h1>
  <h1 v-else-if="isError">{{ error.message }}</h1>
  <div v-else class="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
    <Item 
    v-for="(item, index) in data"
    :key="index"
    :id="item._id"
    :title="item.title"
    :description="item.description"
    :imageUrl="item.imageUrl"
    :price="item.price"
    :availability="item.availability"
    :numOfStock="item.availability === 'single-item' ? 1 : item.numOfStock"
    />
  </div>
  
</template>

<script>
import { ref, reactive } from "vue"
import { useQuery } from "vue-query"

import Item from "./Item.vue"
import Button from "@/common/components/Button.vue"

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/vue/solid"

export default {
  components: {
    Item,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    Button
  },
  setup() {
    // ref takes the argument and wraps it within an object => page = { value: [] }
    const page = ref(1)

    const fetchItems = (value) =>
      fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${value}&limit=6`, {
        headers: {
          accept: "application/json"
        }
      })
      .then((res) => res.json())

    const { isLoading, isError, data, error } = useQuery(reactive(["items",  { page }]), 
      () => fetchItems(page.value),
      {
        refetchOnWindowFocus: false,
        keepPreviousData: true
      }
    )

    return {
      isLoading, 
      isError,
      data,
      error,
      page
    }
  },
}
</script>