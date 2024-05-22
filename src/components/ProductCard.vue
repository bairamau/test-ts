<script setup lang="ts">
defineProps<{
  title: string
  price: number
  src: string
}>()
</script>

<template>
  <div class="grid">
    <img :src class="w-full aspect-[3/4] object-cover border border-neutral-950 rounded" />
    <div class="pt-4 text-lg uppercase font-bold grid grid-cols-[1fr_auto] gap-2">
      <p>{{ title }}</p>
      <span>{{ price }} ₽</span>
    </div>
    <button
      class="hover:ease-out duration-150 hover:bg-accent-primary self-end h-11 mt-6 w-full border border-neutral-950 rounded uppercase"
    >
      Add to cart
    </button>
  </div>
</template>
