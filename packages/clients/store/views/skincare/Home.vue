<template>
  <div class="flex flex-col min-h-screen">

    <div class="flex p-4 text-center">
      <p class="w-full text-[28px] font-bold ">
        Welcome to {{ app.name }}
      </p>
    </div>

    <div>
      <h2 class="text-center text-xl font-semibold">Your Skincare Journey Starts Here</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div v-for="(product, index) in products" :key="index" class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-700">{{ product.description }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store";

const { app } = useStore();
</script>