<template>
  <button class="pt-safe p-4" @click="goBack">
    <Icon icon="material-symbols:arrow-back" class="text-2xl" />
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.back();
}
</script>
