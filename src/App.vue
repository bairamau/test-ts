<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import CartButton from './components/CartButton.vue'

const loading = ref(false)

const router = useRouter()
router.beforeEach(() => {
  loading.value = true
})

router.afterEach(() => {
  loading.value = false
})
</script>

<template>
  <header
    class="px-5 flex sticky top-0 z-10 bg-background-primary/35 h-14 backdrop-blur-lg border-b border-gray-950 items-center"
  >
    <h1 class="text-4xl font-bold uppercase mx-auto">Cool Shop</h1>
    <CartButton :count="2" class="fixed top-0" />
    <div class="wrapper">
      <!-- <div v-if="loading">loading</div> -->
      <nav>
        <!-- <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'category', params: { id: 1234 } }">Category</RouterLink>
        <RouterLink :to="{ name: 'product', params: { id: 344134464 } }">Product</RouterLink> -->
      </nav>
    </div>
  </header>
  <main>
    <RouterView :key="$route.params.id as string" />
  </main>
  <footer class="text-white bg-black p-5">PLEASE HIRE ME</footer>
</template>
