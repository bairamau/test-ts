<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/services/ecwid'
defineProps<{ id: string; product: Product }>()
const quantity = ref(1)
</script>

<template>
  <div class="h-[calc(100dvh-3.5rem)] flex">
    <div class="w-1/2 h-full">
      <img class="w-full h-full object-cover" :src="product.media.images[0].image400pxUrl" />
    </div>
    <div class="w-1/2 h-full backdrop-blur-md p-11 flex flex-col">
      <div>
        <h2 class="text-3xl font-bold pb-10 mb-5 border-b border-neutral-950">
          {{ product.name }}
        </h2>
        <p class="text-lg uppercase underline tracking-wide pb-3">Description</p>
        <div class="text-lg" v-html="product.description"></div>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <div class="text-lg flex">
          <button class="p-4" @click="quantity > 1 ? (quantity -= 1) : quantity">—</button>
          <div class="py-4 min-w-16 flex justify-between">
            <span>QTY:</span><span>{{ quantity }}</span>
          </div>
          <button class="p-4" @click="quantity += 1">+</button>
        </div>
        <span class="text-lg">{{ (quantity * product.price).toFixed(2) }} ₽</span>
      </div>
      <button
        class="text-white hover:text-black duration-150 p-2 bg-black hover:bg-accent-primary border rounded uppercase border-neutral-950"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
