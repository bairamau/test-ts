import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views//HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CartView from '@/views/CartView.vue'
import { getProducts, getCategories, getProductById } from '@/services/ecwid'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: CartView,
      props: (route) => {
        return {
          products: route.meta.products
        }
      },
      beforeEnter: async (to) => {
        const [products, categories] = await Promise.all([getProducts(), getCategories()])
        to.meta.products = products
        to.meta.categories = categories
      },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          props: (route) => {
            return {
              products: route.meta.products,
              categories: route.meta.categories
            }
          }
        },
        {
          path: '/category/:id',
          name: 'category',
          props: (route) => {
            return {
              id: route.params.id,
              products: route.meta.products,
              categories: route.meta.categories
            }
          },
          component: CategoryView
        },
        {
          path: '/product/:id',
          name: 'product',
          props: (route) => ({
            id: route.params.id,
            product: route.meta.product
          }),
          component: ProductView,
          beforeEnter: async (to) => {
            if (typeof to.params.id !== 'string') throw new Error('repeated id param')
            to.meta.product = await getProductById(to.params.id)
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  Object.assign(to.meta, from.meta)
})

export default router
