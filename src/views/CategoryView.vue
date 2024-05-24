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
  <h2
    class="border-b border-neutral-950 py-14 text-center text-4xl font-bold uppercase md:text-6xl"
  >
    {{ category.name }}
  </h2>
  <div class="flex flex-col-reverse border-neutral-950 lg:flex-row lg:border-b">
    <div
      :class="subCategories.length > 0 ? 'flex' : 'hidden'"
      class="flex-[2] flex-col border-t border-neutral-950 p-4 lg:border-r lg:border-t-0"
    >
      <p class="pb-5 text-xl uppercase">Explore subcategories of {{ category.name }}</p>
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
    <div class="flex flex-[3] flex-col p-4">
      <p class="ml-auto pb-5 text-xl uppercase">
        {{ relevantProducts.length }} product{{ relevantProducts.length !== 1 ? 's' : null }}
      </p>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <ProductCard
          v-for="p in relevantProducts"
          :key="p.id"
          :id="p.id"
          :title="p.name"
          :price="p.price"
          :src1="p.media.images[0].image400pxUrl"
          :src2="p.media.images[1].image400pxUrl"
          @add="addProduct(p.id, 1)"
        />
      </div>
    </div>
  </div>
</template>
