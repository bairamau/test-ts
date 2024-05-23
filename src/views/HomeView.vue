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
  <div class="grid gap-4 grid-cols-2 xl:grid-cols-6 grid-gap px-4 lg:px-6 mt-6">
    <CategoryCard
      v-for="c in rootCategories"
      :key="c.id"
      :title="c.name"
      :src="c.thumbnailUrl"
      :id="c.id"
    />
  </div>
  <div class="py-12 overflow-hidden">
    <p class="inline-block whitespace-nowrap animate-marquee text-7xl font-bold uppercase">
      <span v-for="i in 2" :key="i" class="w-1/2 pl-12"
        >Very. Inspirational. Quote. That. Will. Increase. Conversion.</span
      >
    </p>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-12 mx-4 lg:mx-8 mb-8">
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
