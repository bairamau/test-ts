<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  id: number
  title: string
  price: number
  src1: string
  src2?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4 group relative">
    <RouterLink
      :to="{
        name: 'product',
        params: {
          id
        }
      }"
    >
      <img
        :src="src1"
        class="absolute group-hover:opacity-0 duration-150 w-full aspect-[3/4] object-cover border border-neutral-950 rounded"
      />
      <img
        v-if="src2"
        :src="src2"
        class="w-full opacity-0 group-hover:opacity-100 duration-150 aspect-[3/4] object-cover border border-neutral-950 rounded"
      />
      <div class="sm:text-lg uppercase font-bold flex gap-2 mt-4">
        <p class="flex-1">{{ title }}</p>
        <span>{{ price }} ₽</span>
      </div>
    </RouterLink>
    <button
      @click="$emit('add', 1)"
      class="hover:ease-out duration-150 hover:bg-accent-primary h-11 mt-auto w-full border border-neutral-950 rounded uppercase"
    >
      Add to cart
    </button>
  </div>
</template>
