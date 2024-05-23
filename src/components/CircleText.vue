<script setup lang="ts">
const radius = 50
</script>
<template>
  <svg viewBox="0 0 100 100" class="overflow-visible">
    <path
      fill="none"
      id="circle-path"
      :d="`
      M ${50 - radius},${radius}
      a ${radius},${radius} 0 1,1 ${2 * radius},0
      ${radius},${radius} 0 1,1 -${2 * radius},0
      `"
    />
    <text fill="white">
      <textPath href="#circle-path">PLEASE HIRE ME</textPath>
    </text>
  </svg>
</template>
