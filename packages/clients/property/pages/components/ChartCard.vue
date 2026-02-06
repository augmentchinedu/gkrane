<!-- ChartCard.vue -->
<template>
  <div class="bg-neutral-800 rounded-lg p-4">
    <h5 class="text-sm mb-3 text-neutral-400">{{ title }}</h5>
    <div class="h-48 flex items-center justify-center text-neutral-500">
      Chart Placeholder
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String });
</script>
