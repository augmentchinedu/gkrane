<!-- StatusCard.vue -->
<template>
  <div class="bg-neutral-800 rounded-lg p-4 text-center">
    <div class="text-lg font-semibold">Ct 0</div>
    <div class="text-sm text-neutral-400">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({ label: String });
</script>
