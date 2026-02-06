<!-- StatCard.vue -->
<template>
  <div :class="['rounded-lg p-4 text-white', color]">
    <div class="text-xl font-semibold">{{ value }}</div>
    <div class="text-sm opacity-80">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  color: String,
});
</script>
