<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import type { CategoriesItem, ProductsItem } from '@/services/ecwid'

const props = defineProps<{
  products: ProductsItem[]
  categories: CategoriesItem[]
  addProduct: (id: number, quantity: number) => void
}>()

const rootCategories = props.categories.filter((c) => !Object.hasOwn(c, 'parentId'))
</script>

<template>
  <div
    class="mx-5 mt-10 flex gap-5 overflow-x-auto [scroll-snap-stop:always] [scroll-snap-type:x_mandatory] [scrollbar-width:none] md:mx-auto md:max-w-screen-md md:overflow-x-hidden"
  >
    <CategoryCard
      class="min-w-64 flex-1 [scroll-snap-align:start] md:min-w-0"
      v-for="c in rootCategories"
      :key="c.id"
      :title="c.name"
      :src="c.thumbnailUrl"
      :id="c.id"
    />
  </div>
  <div class="overflow-hidden py-12">
    <p class="inline-block animate-marquee whitespace-nowrap text-7xl font-bold uppercase">
      <span v-for="i in 2" :key="i" class="w-1/2 pl-12"
        >Very. Inspirational. Quote. That. Will. Increase. Conversion.</span
      >
    </p>
  </div>
  <div
    class="mx-4 mb-8 grid grid-cols-2 gap-x-2 gap-y-5 md:grid-cols-3 md:gap-12 lg:mx-8 lg:grid-cols-4"
  >
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :id="p.id"
      :title="p.name"
      :price="p.price"
      :src1="p.media.images[0].image400pxUrl"
      :src2="p.media.images[1].image400pxUrl"
      @add="addProduct(p.id, 1)"
    />
  </div>
</template>
