<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const progress = ref<HTMLDivElement | null>(null)
const keyframes: Keyframe[] = [{ width: 0 }, { width: '100%' }]
const router = useRouter()
let animation: Animation
router.beforeEach(() => {
  if (!progress.value) return
  animation = progress.value.animate(keyframes, {
    duration: 4000,
    delay: 50,
    easing: 'cubic-bezier(.2,.98,.19,1.01)'
  })
})

router.afterEach(() => {
  animation.finish()
})
</script>
<template>
  <div ref="progress" class="fixed top-0 z-40 h-1.5 bg-accent-primary"></div>
</template>
