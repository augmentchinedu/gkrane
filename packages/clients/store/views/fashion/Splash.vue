<template>
  <div class="relative h-screen w-full bg-white">
    <!-- Centered title -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img
        src="https://storage.googleapis.com/great-unknown.appspot.com/images/stores/fashion/velar/logo.png"
        :alt="app.name"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const { app } = useStore();

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    if (app.isInitialized) router.push({ name: "home" });
    else router.push({ name: "onboardone" });
  }, 2500);
});
</script>
