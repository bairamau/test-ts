<script setup lang="ts">
const props = defineProps<{ id: string; product: any }>()
</script>

<template>
  <h2>Product {{ id }}</h2>
</template>
