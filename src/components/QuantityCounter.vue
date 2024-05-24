<script setup lang="ts">
defineProps<{ quantity: number }>()
</script>

<template>
  <div class="flex text-lg">
    <button class="-mt-0.5 p-2 md:p-4" @click="$emit('dec')">—</button>
    <div class="flex min-w-16 items-center justify-between py-2 md:py-4">
      <span>QTY:</span><span>{{ quantity }}</span>
    </div>
    <button class="p-2 md:p-4" @click="$emit('inc')">+</button>
  </div>
</template>
