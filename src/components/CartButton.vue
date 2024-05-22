<script setup lang="ts">
defineProps<{ count: number }>()
</script>

<template>
  <button
    class="size-11 border border-neutral-950 hover:ease-out duration-150 rounded-full bg-background-primary hover:bg-accent-primary relative"
  >
    <svg class="w-1/2 absolute inset-0 m-auto" viewBox="0 0 14 16">
      <path
        fill="currentColor"
        d="M.738 13.227V6.16c0-1.497.807-2.297 2.318-2.297h.888C3.972 2.27 5.318.971 7 .971c1.675 0 3.028 1.299 3.056 2.891h.888c1.511 0 2.318.8 2.318 2.297v7.068c0 1.498-.8 2.29-2.174 2.29H3.056c-1.511 0-2.318-.792-2.318-2.29Zm4.649-9.365h3.22C8.585 2.98 7.915 2.283 7 2.283s-1.586.697-1.613 1.58Z"
      />
    </svg>
  </button>
</template>
