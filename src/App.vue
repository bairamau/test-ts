<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="px-5 flex sticky top-0 z-10 bg-background-primary/35 h-14 backdrop-blur-lg border-b border-gray-950 items-center"
  >
    <RouterLink class="mx-auto" :to="{ name: 'home' }">
      <h1 class="text-4xl font-bold uppercase">Cool Shop</h1>
    </RouterLink>
  </header>
  <main class="min-h-[calc(100dvh-3rem)]">
    <!-- <div
      v-show="showCart"
      @click.exact="showCart = !showCart"
      class="h-full fixed inset-0 z-20"
      :class="showCart ? 'bg-neutral-900/20' : 'bg-neutral-900/0'"
    > -->
    <!-- </div> -->
    <RouterView :key="$route.params.id?.toString()" />
  </main>
  <footer class="text-white bg-black py-10 px-8">
    <p class="text-7xl font-bold uppercase">Cool shop</p>
    <p class="text-2xl pt-8 max-w-80">
      Edited collections by Kanye West and special guest collaborators (surely)
    </p>
  </footer>
</template>
