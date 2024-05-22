<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  id: number
  title: string
  price: number
  src: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <RouterLink :to="{ name: 'product', params: {
      id
    }}">
      <img :src class="w-full aspect-[3/4] object-cover border border-neutral-950 rounded" />
      <div class="sm:text-lg uppercase font-bold flex gap-2 mt-4">
        <p class="flex-1">{{ title }}</p>
        <span>{{ price }} ₽</span>
      </div>
    </RouterLink>
    <button
      class="hover:ease-out duration-150 hover:bg-accent-primary h-11 mt-auto w-full border border-neutral-950 rounded uppercase"
    >
      Add to cart
    </button>
  </div>
</template>
