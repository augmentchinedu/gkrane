<template>
  <div>{{ type }} Stores</div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const type = route.params.type?.capitalize() || "Unknown";
</script>
