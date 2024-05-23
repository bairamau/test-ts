<script setup lang="ts">
import { computed, ref } from 'vue'
import QuantityCounter from '@/components/QuantityCounter.vue'
import type { Product } from '@/services/ecwid'
const props = defineProps<{
  id: string
  product: Product
  addProduct: (id: number, quantity: number) => void
}>()
const quantity = ref(1)
const list = ref<HTMLDivElement | null>(null)
const itemWidth = computed(() => list.value!.clientWidth / props.product.media.images.length)
const swipe = (dir: 'left' | 'right') => {
  list.value?.scrollBy({
    behavior: 'smooth',
    left: dir === 'left' ? -itemWidth.value : itemWidth.value,
    top: 0
  })
}
</script>

<template>
  <div class="lg:h-[calc(100dvh-3.5rem)] relative grid lg:block">
    <div
      ref="list"
      class="h-80 lg:h-full flex overflow-x-scroll [scroll-snap-stop:always] [scroll-snap-type:x_mandatory] [scrollbar-width:none]"
    >
      <div
        class="h-full min-w-full lg:min-w-[50%] [scroll-snap-align:start]"
        v-for="img in product.media.images"
        :key="img.id"
      >
        <img class="w-full h-full object-cover" :src="img.image800pxUrl" />
      </div>
      <div class="hidden lg:block h-full min-w-[50%] [scroll-snap-align:start]"></div>
    </div>
    <button
      class="absolute border top-32 left-2 lg:left-4 border-neutral-950 bg-background-primary size-12 opacity-40 rounded-full lg:inset-y-0 lg:my-auto"
      @click="swipe('left')"
    >
      PREV
    </button>
    <button
      class="absolute top-32 right-2 lg:left-1/2 lg:right-4 lg:-translate-x-16 border border-neutral-950 bg-background-primary size-12 opacity-40 rounded-full lg:inset-y-0 lg:my-auto"
      @click="swipe('right')"
    >
      NEXT
    </button>
    <div
      class="lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/2 h-full bg-background-primary/50 backdrop-blur-2xl p-4 lg:p-11 flex flex-col"
    >
      <div>
        <h2 class="text-3xl font-bold pb-10 mb-5 border-b border-neutral-950">
          {{ product.name }}
        </h2>
        <p class="text-lg uppercase underline tracking-wide pb-3">Description</p>
        <div class="lg:text-lg" v-html="product.description"></div>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <QuantityCounter
          :quantity
          @dec="quantity > 1 ? (quantity -= 1) : quantity"
          @inc="quantity += 1"
        />
        <span class="text-lg">{{ (quantity * product.price).toFixed(2) }} ₽</span>
      </div>
      <button
        @click="
          () => {
            addProduct(product.id, quantity)
            quantity = 1
          }
        "
        class="text-white hover:text-black duration-150 p-2 bg-black hover:bg-accent-primary border rounded uppercase border-neutral-950"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
