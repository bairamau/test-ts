<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ title: string; src: string; id: number }>()
</script>
<template>
  <RouterLink :to="{ name: 'category', params: { id } }" class="group">
    <div class="border border-neutral-950 rounded">
      <h3 class="text-2xl font-bold p-5 uppercase">{{ title }}</h3>
      <img :src class="w-full border-y border-neutral-950 object-cover aspect-square" />
      <p
        class="text-sm uppercase group-hover:bg-accent-primary h-12 flex justify-center items-center hover:ease-out duration-150"
      >
        Shop {{ title }}
      </p>
    </div>
  </RouterLink>
</template>
