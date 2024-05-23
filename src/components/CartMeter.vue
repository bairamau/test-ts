<script setup lang="ts">
defineProps<{ count: number }>()
</script>
<template>
  <div
    class="grid place-items-center bg-black text-sm text-white size-7 min-w-min font-bold px-1 leading-none rounded-full"
  >
    {{ count }}
  </div>
</template>
