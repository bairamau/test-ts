<script setup lang="ts">
defineProps<{ count: number }>()
</script>
<template>
  <div
    class="grid size-7 min-w-min place-items-center rounded-full bg-black px-1 text-sm font-bold leading-none text-white"
  >
    {{ count }}
  </div>
</template>
