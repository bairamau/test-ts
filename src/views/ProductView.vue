<script setup lang="ts">
import { ref } from 'vue'
import QuantityCounter from '@/components/QuantityCounter.vue'
import type { Product } from '@/services/ecwid'
defineProps<{
  id: string
  product: Product
  addProduct: (id: number, quantity: number) => void
}>()
const quantity = ref(1)
</script>

<template>
  <div class="h-[calc(100dvh-3.5rem)] flex">
    <div class="hidden md:block w-1/2 h-full">
      <img class="w-full h-full object-cover" :src="product.media.images[0].image400pxUrl" />
    </div>
    <div class="w-full md:w-1/2 h-full backdrop-blur-md p-4 md:p-11 flex flex-col">
      <div>
        <h2 class="text-3xl font-bold pb-10 mb-5 border-b border-neutral-950">
          {{ product.name }}
        </h2>
        <p class="text-lg uppercase underline tracking-wide pb-3">Description</p>
        <div class="lg:text-lg" v-html="product.description"></div>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <QuantityCounter
          :quantity
          @dec="quantity > 1 ? (quantity -= 1) : quantity"
          @inc="quantity += 1"
        />
        <span class="text-lg">{{ (quantity * product.price).toFixed(2) }} ₽</span>
      </div>
      <button
        @click="
          () => {
            addProduct(product.id, quantity)
            quantity = 1
          }
        "
        class="text-white hover:text-black duration-150 p-2 bg-black hover:bg-accent-primary border rounded uppercase border-neutral-950"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
