<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import { type CategoriesItem, type ProductsItem } from '@/services/ecwid'
const props = defineProps<{
  id: string
  categories: CategoriesItem[]
  products: ProductsItem[]
  addProduct: (id: number, quantity: number) => void
}>()
const category = props.categories.find((c) => c.id === Number(props.id))!
const subCategories = props.categories.filter((c) => c.parentId === category.id)
const relevantProducts = props.products.filter((p) => p.categoryIds.includes(category.id))
</script>
<template :key="props.id">
  <h2 class="py-14 text-6xl font-bold text-center uppercase border-b border-neutral-950">
    {{ category.name }}
  </h2>
  <div class="flex flex-col-reverse lg:flex-row">
    <div
      :class="subCategories.length > 0 ? 'flex' : 'hidden'"
      class="flex-col p-5 border-r border-neutral-950 flex-[2]"
    >
      <p class="text-xl uppercase pb-5">Explore subcategories of {{ category.name }}</p>
      <div class="grid grid-cols-2 gap-4">
        <CategoryCard
          v-for="c in subCategories"
          :key="c.id"
          :id="c.id"
          :title="c.name"
          :src="c.thumbnailUrl"
        />
      </div>
    </div>
    <div class="flex-[3] p-5 flex flex-col">
      <p class="ml-auto text-xl uppercase pb-5">
        {{ relevantProducts.length }} product{{ relevantProducts.length !== 1 ? 's' : null }}
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard
          v-for="p in relevantProducts"
          :key="p.id"
          :id="p.id"
          :title="p.name"
          :price="p.price"
          :src="p.media.images[0].image400pxUrl"
          @add="addProduct(p.id, 1)"
        />
      </div>
    </div>
  </div>
</template>
