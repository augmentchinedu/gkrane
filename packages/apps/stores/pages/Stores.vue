<template>
  <main class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30">
    <!-- Top App Bar -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div class="flex items-center p-4 pb-2 justify-between mx-auto">
        <Back />
        <h2 class="text-black dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Stores
        </h2>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
            <Icon icon="mdi:magnify" class="text-[24px]" />
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <main class="pt-20 pb-28 px-4 mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-black dark:text-white tracking-tight text-[32px] font-bold leading-none">
          {{ type }} Stores
        </h1>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-black dark:text-white text-sm font-medium border border-white/10">
          <Icon icon="mdi:filter-variant" class="text-sm" />
          Filter
        </button>
      </div>

      <!-- Stores Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="store in stores" :key="store.name"
          class="store-card flex flex-col rounded-2xl overflow-hidden group">
          <div class="relative aspect-square overflow-hidden bg-[#2f2348]">
            <img :alt="store.name" :src="store.img"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute top-2 right-2">
              <div class="px-2 py-1 rounded-full glass-panel text-white text-[10px] font-bold flex items-center gap-1">
                <Icon icon="mdi:star" class="text-[12px] text-yellow-400" />
                {{ store.rating }}
              </div>
            </div>
          </div>
          <div class="p-3 flex flex-col gap-1">
            <h3 class="text-white text-sm font-bold line-clamp-1">
              {{ store.name }}
            </h3>
            <div class="flex flex-col gap-0.5">
              <p class="text-gray-400 text-[11px]">
                {{ store.products }} Products
              </p>
              <p class="text-gray-500 text-[11px] flex items-center gap-0.5">
                <Icon :icon="store.locationIcon" class="text-[12px]" />
                {{ store.location }}
              </p>
            </div>
            <div class="flex items-center justify-between mt-2">
              <span class="text-primary text-[11px] font-bold uppercase tracking-wider">
                Visit Store
              </span>
              <button
                class="size-7 flex items-center justify-center rounded-full bg-white/10 text-white active:scale-90 transition-transform">
                <Icon icon="mdi:chevron-right" class="text-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 ios-tab-bar border-t border-white/10 px-6 pb-8 pt-3">
      <div class="flex justify-between items-center mx-auto">
        <button class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors">
          <Icon icon="mdi:view-grid" class="text-lg" />
          <span class="text-[10px] font-medium">Categories</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-primary">
          <Icon icon="mdi:store" class="text-lg" />
          <span class="text-[10px] font-bold">Stores</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors">
          <Icon icon="mdi:bookmark" class="text-lg" />
          <span class="text-[10px] font-medium">Saved</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors">
          <Icon icon="mdi:bell" class="text-lg" />
          <span class="text-[10px] font-medium">Updates</span>
        </button>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from '@/store'

const route = useRoute();
const type = route.params.type?.capitalize() || "Unknown";

const { app } = useStore()

const stores = computed(() => app.content.stores[type.toLowerCase()] || []);
</script>
