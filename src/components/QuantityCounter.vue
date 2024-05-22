<script setup lang="ts">
defineProps<{ quantity: number }>()
</script>

<template>
  <div class="text-lg flex">
    <button class="p-4" @click="$emit('dec')">—</button>
    <div class="py-4 min-w-16 flex justify-between">
      <span>QTY:</span><span>{{ quantity }}</span>
    </div>
    <button class="p-4" @click="$emit('inc')">+</button>
  </div>
</template>
