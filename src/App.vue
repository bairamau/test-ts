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
  <main>
    <!-- <div
      v-show="showCart"
      @click.exact="showCart = !showCart"
      class="h-full fixed inset-0 z-20"
      :class="showCart ? 'bg-neutral-900/20' : 'bg-neutral-900/0'"
    > -->
    <!-- </div> -->
    <RouterView :key="$route.params.id?.toString()" />
  </main>
  <footer class="text-white bg-black p-5">PLEASE HIRE ME</footer>
</template>
