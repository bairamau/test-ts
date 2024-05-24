<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import CartButton from '@/components/CartButton.vue'
import type { ProductsItem } from '@/services/ecwid'
import QuantityCounter from '@/components/QuantityCounter.vue'
import CartMeter from '@/components/CartMeter.vue'

const props = defineProps<{ products: ProductsItem[] }>()

let cart = localStorage.getItem('cart')
if (cart === null) {
  localStorage.setItem('cart', '{}')
  cart = '{}'
}

const cartData = reactive<{ [id: number | string]: number }>(JSON.parse(cart))

const addProduct = (id: number, quantity: number) => {
  cartData[id] = (cartData[id] ?? 0) + quantity
}
const subtractProduct = (id: number) => {
  cartData[id] = cartData[id] > 0 ? cartData[id] - 1 : cartData[id]
}

watch(cartData, () => {
  localStorage.setItem('cart', JSON.stringify(cartData))
})

const items = computed(() => Object.values(cartData).reduce((q, s) => q + s, 0))
const subtotal = computed(() =>
  Object.keys(cartData).reduce(
    (acc, k) => cartData[k] * props.products.find((p) => p.id === Number(k))!.price + acc,
    0
  )
)

const showCart = ref(false)
</script>

<template>
  <CartButton @click="showCart = !showCart" :count="items" class="fixed right-8 top-8 z-30" />
  <section
    class="fixed top-0 z-30 flex h-full max-h-full w-[480px] max-w-full flex-col gap-4 overflow-auto bg-background-primary/30 px-4 py-5 backdrop-blur-2xl duration-200 ease-out md:px-8 md:py-7 lg:duration-500"
    :class="showCart ? 'right-0' : '-right-[100%]'"
  >
    <div class="flex items-center">
      <h3 class="pr-4 text-2xl font-bold uppercase leading-none">Cart</h3>
      <CartMeter :count="items" />
      <button class="ml-auto p-3 text-4xl" @click="showCart = !showCart">×</button>
    </div>
    <div
      v-for="p in products.filter((p) => cartData[p.id] > 0)"
      :key="p.id"
      class="grid grid-cols-[80px_1fr_auto] gap-x-1"
    >
      <p class="col-span-2 col-start-2 pl-2 text-lg font-bold">{{ p.name }}</p>
      <img
        class="col-start-1 row-span-2 row-start-1 rounded object-cover"
        :src="p.media.images[0].image400pxUrl"
      />
      <QuantityCounter
        class="col-start-2 row-start-2"
        :quantity="cartData[p.id]"
        @dec="subtractProduct(p.id)"
        @inc="addProduct(p.id, 1)"
      />
      <span class="row-start-2 place-content-center">
        {{ (cartData[p.id] * p.price).toFixed(2) }} ₽
      </span>
    </div>
    <p class="mb-4 mt-auto flex items-end justify-between text-xl">
      Subtotal
      <span class="text-2xl"> {{ subtotal.toFixed(2) }} ₽ </span>
    </p>
    <button
      class="rounded border border-neutral-950 bg-black p-2 uppercase text-white duration-150 hover:bg-accent-primary hover:text-black"
    >
      Checkout
    </button>
  </section>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :addProduct="addProduct" />
  </RouterView>
</template>
