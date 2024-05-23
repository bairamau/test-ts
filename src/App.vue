<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import CircleText from '@/components/CircleText.vue'
</script>

<template>
  <header
    class="px-5 flex sticky top-0 z-10 bg-background-primary/35 h-14 backdrop-blur-lg border-b border-gray-950 items-center"
  >
    <RouterLink class="mx-auto" :to="{ name: 'home' }">
      <h1 class="text-4xl font-bold uppercase">Cool Shop</h1>
    </RouterLink>
  </header>
  <main class="min-h-[calc(100dvh-3.5rem)]">
    <RouterView :key="$route.params.id?.toString()" />
  </main>
  <footer class="text-white overflow-hidden relative bg-black py-10 px-8 flex flex-wrap gap-10">
    <div>
      <p class="text-7xl font-bold uppercase">Cool shop</p>
      <p class="text-2xl pt-8 max-w-80">
        Edited collections by Kanye West and special guest collaborators (surely)
      </p>
    </div>
    <div class="grid gap-4">
      <h4 class="uppercase">Brand</h4>
      <p>About us</p>
      <p>FAQs</p>
      <p>Help center</p>
      <p>Return policy</p>
    </div>
    <div class="grid gap-4">
      <h4 class="uppercase">Connect</h4>
      <p>Nobody</p>
      <p>Ever</p>
      <p>Reads</p>
      <p>These</p>
    </div>
    <CircleText
      class="hidden animate-spin-slow md:block h-[calc(100%-3rem)] absolute top-0 bottom-0 my-auto -right-40"
    />
  </footer>
</template>
