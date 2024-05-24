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
  <div class="relative grid lg:block lg:h-[calc(100dvh-3.5rem)]">
    <div
      ref="list"
      class="flex h-80 overflow-x-scroll [scroll-snap-stop:always] [scroll-snap-type:x_mandatory] [scrollbar-width:none] lg:h-full"
    >
      <div
        class="h-full min-w-full [scroll-snap-align:start] lg:min-w-[50%]"
        v-for="img in product.media.images"
        :key="img.id"
      >
        <img class="h-full w-full object-cover" :src="img.image800pxUrl" />
      </div>
      <div class="hidden h-full min-w-[50%] [scroll-snap-align:start] lg:block"></div>
    </div>
    <button
      class="absolute left-2 top-32 size-12 rounded-full border border-neutral-950 bg-background-primary opacity-40 lg:inset-y-0 lg:left-4 lg:my-auto"
      @click="swipe('left')"
    >
      PREV
    </button>
    <button
      class="absolute right-2 top-32 size-12 rounded-full border border-neutral-950 bg-background-primary opacity-40 lg:inset-y-0 lg:left-1/2 lg:right-4 lg:my-auto lg:-translate-x-16"
      @click="swipe('right')"
    >
      NEXT
    </button>
    <div
      class="flex h-full w-full flex-col bg-background-primary/50 p-4 backdrop-blur-2xl lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:p-11"
    >
      <div>
        <h2 class="mb-5 border-b border-neutral-950 pb-10 text-3xl font-bold">
          {{ product.name }}
        </h2>
        <p class="pb-3 text-lg uppercase tracking-wide underline">Description</p>
        <div class="lg:text-lg" v-html="product.description"></div>
      </div>
      <div class="mt-auto flex items-center justify-between">
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
        class="rounded border border-neutral-950 bg-black p-2 uppercase text-white duration-150 hover:bg-accent-primary hover:text-black"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
