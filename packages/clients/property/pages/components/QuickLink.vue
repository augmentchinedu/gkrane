<!-- QuickLink.vue -->
<template>
  <button
    class="bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-4 text-sm text-left border-l-4 border-red-600"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({ label: String });
</script>
