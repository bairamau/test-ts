<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import CircleText from '@/components/CircleText.vue'
import LoadProgress from './components/LoadProgress.vue'
</script>

<template>
  <LoadProgress />
  <header
    class="sticky top-0 z-10 flex h-14 items-center border-b border-gray-950 bg-background-primary/35 px-5 backdrop-blur-2xl"
  >
    <RouterLink class="mx-auto" :to="{ name: 'home' }">
      <h1 class="text-4xl font-bold uppercase">Cool Shop</h1>
    </RouterLink>
  </header>
  <main class="min-h-[calc(100dvh-3.5rem)]">
    <RouterView :key="$route.params.id?.toString()" />
  </main>
  <footer class="relative flex flex-wrap gap-10 overflow-hidden bg-black px-8 py-10 text-white">
    <div>
      <p class="text-7xl font-bold uppercase">Cool shop</p>
      <p class="max-w-80 pt-8 text-2xl">
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
      class="absolute -right-40 bottom-0 top-0 my-auto hidden h-[calc(100%-3rem)] animate-spin-slow md:block"
    />
  </footer>
</template>
