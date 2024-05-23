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
  <CartButton @click="showCart = !showCart" :count="items" class="fixed top-8 right-8 z-30" />
  <section
    class="py-10 px-8 max-h-full overflow-auto flex flex-col fixed z-30 w-[480px] max-w-full bg-background-primary/30 backdrop-blur-2xl h-full top-0 duration-200 lg:duration-500 ease-out"
    :class="showCart ? 'right-0' : '-right-[100%]'"
  >
    <div class="flex items-center">
      <h3 class="uppercase text-2xl font-bold pr-4 leading-none">Cart</h3>
      <CartMeter :count="items" />
      <button class="ml-auto text-4xl p-5" @click="showCart = !showCart">×</button>
    </div>
    <div
      v-for="p in products.filter((p) => cartData[p.id] > 0)"
      :key="p.id"
      class="grid grid-cols-[80px_1fr_auto]"
    >
      <p class="font-bold text-lg col-start-2 pl-4">{{ p.name }}</p>
      <img
        class="object-cover rounded col-start-1 row-start-1 row-span-2"
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
    <p class="flex justify-between mt-auto mb-4 text-xl items-end">
      Subtotal
      <span class="text-2xl"> {{ subtotal.toFixed(2) }} ₽ </span>
    </p>
    <button
      class="text-white hover:text-black duration-150 p-2 bg-black hover:bg-accent-primary border rounded uppercase border-neutral-950"
    >
      Checkout
    </button>
  </section>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :addProduct="addProduct" />
  </RouterView>
</template>
