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
  <div class="group relative flex flex-col gap-4">
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
        class="absolute aspect-[3/4] w-full rounded border border-neutral-950 object-cover duration-150 group-hover:opacity-0"
      />
      <img
        v-if="src2"
        :src="src2"
        class="aspect-[3/4] w-full rounded border border-neutral-950 object-cover opacity-0 duration-150 group-hover:opacity-100"
      />
      <div class="mt-4 flex gap-2 font-bold uppercase sm:text-lg">
        <p class="flex-1">{{ title }}</p>
        <span>{{ price }} ₽</span>
      </div>
    </RouterLink>
    <button
      @click="$emit('add', 1)"
      class="mt-auto h-11 w-full rounded border border-neutral-950 uppercase duration-150 hover:bg-accent-primary hover:ease-out"
    >
      Add to cart
    </button>
  </div>
</template>
