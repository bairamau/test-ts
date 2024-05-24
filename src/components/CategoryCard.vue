<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ title: string; src: string; id: number }>()
</script>
<template>
  <RouterLink :to="{ name: 'category', params: { id } }" class="group">
    <div class="rounded border border-neutral-950">
      <h3 class="p-2 text-xl font-bold uppercase md:p-5 lg:text-2xl">{{ title }}</h3>
      <img :src class="aspect-square w-full border-y border-neutral-950 object-cover" />
      <p
        class="flex h-12 items-center justify-center text-sm uppercase duration-150 hover:ease-out group-hover:bg-accent-primary"
      >
        Shop {{ title }}
      </p>
    </div>
  </RouterLink>
</template>
