<template>
  <main
    class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30"
  >
    <!-- Top App Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
    >
      <div class="flex items-center p-4 pb-2 justify-between mx-auto">
        <Back />
        <h2
          class="text-black dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center"
        >
          Stores
        </h2>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary"
          >
            <Icon icon="mdi:magnify" class="text-[24px]" />
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <main class="pt-20 pb-28 px-4 mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1
          class="text-black dark:text-white tracking-tight text-[32px] font-bold leading-none"
        >
          {{ type }} Stores
        </h1>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-black dark:text-white text-sm font-medium border border-white/10"
        >
          <Icon icon="mdi:filter-variant" class="text-sm" />
          Filter
        </button>
      </div>

      <!-- Stores Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="store in stores"
          :key="store.name"
          class="store-card flex flex-col rounded-2xl overflow-hidden group"
        >
          <div class="relative aspect-square overflow-hidden bg-[#2f2348]">
            <img
              :alt="store.name"
              :src="store.image"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-2 right-2">
              <div
                class="px-2 py-1 rounded-full glass-panel text-white text-[10px] font-bold flex items-center gap-1"
              >
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
              <span
                class="text-primary text-[11px] font-bold uppercase tracking-wider"
              >
                Visit Store
              </span>
              <button
                class="size-7 flex items-center justify-center rounded-full bg-white/10 text-white active:scale-90 transition-transform"
              >
                <Icon icon="mdi:chevron-right" class="text-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav
      class="fixed bottom-0 left-0 right-0 z-50 ios-tab-bar border-t border-white/10 px-6 pb-8 pt-3"
    >
      <div class="flex justify-between items-center mx-auto">
        <button
          class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors"
        >
          <Icon icon="mdi:view-grid" class="text-lg" />
          <span class="text-[10px] font-medium">Categories</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-primary">
          <Icon icon="mdi:store" class="text-lg" />
          <span class="text-[10px] font-bold">Stores</span>
        </button>

        <button
          class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors"
        >
          <Icon icon="mdi:bookmark" class="text-lg" />
          <span class="text-[10px] font-medium">Saved</span>
        </button>

        <button
          class="flex flex-col items-center gap-1 text-gray-500 active:text-primary transition-colors"
        >
          <Icon icon="mdi:bell" class="text-lg" />
          <span class="text-[10px] font-medium">Updates</span>
        </button>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const type = route.params.type?.capitalize() || "Unknown";

const stores = [
  {
    name: "Tech Haven",
    products: "1,200",
    rating: 4.8,
    location: "Global",
    locationIcon: "mdi:earth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB82HPbSXjnMPVOs8hvspEKrIvD_jWSrDFlDGxvZMIOhj8wKKkmE08u7v_QslDjV4_KPkGXFGBvzajX7g1WV4MeHArkD9_A91FXw8GtzrgAJCLGELm5E2YHyDg5sW1Rt5PRcZtZacFML5iC80kiLYU6C8yHxCdfJWHp2F7hXDiCCC5Q3QFaml4gWyVTzD3JUzPT-hTRBQY6D09xA-SfKUzWC8mUMRrpugsDkLr2dwNED-sxWYg8JeaUw-yAAan1b5n_XagXyCPh6s0",
  },
  {
    name: "Gadget Grove",
    products: "850",
    rating: 4.7,
    location: "London, UK",
    locationIcon: "mdi:map-marker",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADiZoNAvY0_NV3cQKzRHskzp1_bI9Le_wvjsWv9g06ffmFrlpNO4DXwm7dEVK5LrS_1RcOzTb3gfO3pOSwpA1UnR5Z5khnWpePU3020YybD_WhWFAUfIj8eSTpVvLweCFQOv5KpVYFN4_5PYGA4iYdl0mMUjUFXnCpLZ20rr7VE7JQGSY5YmNR-BNQ7AhH9q-_eItJzwhBDCdWAT-NAPtdWUrML1o9P69V8RvPOrtCHhbzK88ImO1t-WFmjC_USo71DYqAs0VAqJY",
  },
  {
    name: "Pixel Point",
    products: "3,420",
    rating: 4.9,
    location: "Global",
    locationIcon: "mdi:earth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NYtRngb5CiOw_31E-i6eVzRwB0mQmuAMxwcClJ9wYUgSUXZRZTq-Sye8ksTHAsbBPlyQ8CIE79a_HQ8v7ZQ9vKLgyR4RIT0NCjWspsEfS2EIl6Kyukv2faA5SwX8H3_nu7OJqrkNTTSGhpfXjUse0mBGiFMooiFQ8ocAcZU6AnyrTU5GlBrL6QJDAmB_d3tSAov8TwIKAMS5raZ1BRTOJx6zeiYRMhfyFuqNjuPdurClXhGbaXdgMD335LcV0PSiHw50Y3ysokE",
  },
  {
    name: "Audio Arc",
    products: "540",
    rating: 4.6,
    location: "Berlin, DE",
    locationIcon: "mdi:map-marker",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xcNtS1nbeqkCz9R4TGOnowYhtBc0GGESJ5PljrX8FZlhhjKLl_-nOyBA-NCC_7P43X-NvccghX77U8iL5gvyS0hQkDsBHlm_wezQUOajEzbIPYFPs0tD6NKeWDRHEiFjd-vqL8hqPKx68BMn3RqdltcijCKPc694ZHP3ra5P2VjF7axOBhB3CGpEKu0J0AQCp8djDF9qwrtLUNot3FJ3GvjtS-f6w7Q48hDsqWyKVvzjv_P6erMm5VwqH79115gp-KnBqvZHof0",
  },
  {
    name: "Future Flow",
    products: "2,100",
    rating: 4.5,
    location: "Global",
    locationIcon: "mdi:earth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6JaHSD4S_PE4E59mSmFqgQHsTdKlrh9glXOiBFoMsIt_Zsrb8koFNx0aCv7b_nWH8QXw6jr_Xc00WnWlp_xuAhUJgSFh61vPdRKCtrufVwmZple264chG7mstqMsd_WQfbmb5TWyLt8HrXluZSkVWkyN--XAjnNte--MwUg0WC9rhZR36iqCDS6cmeuPfwED4XNLBpHr2EmXW_tRXp0AUgCTa9VuPw6FbIPt6ddPBRJH5Esqi6a7R_p9Va9bPaDnzBCfceAdXzDo",
  },
  {
    name: "Nova Store",
    products: "1,850",
    rating: 4.8,
    location: "Tokyo, JP",
    locationIcon: "mdi:map-marker",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQzMZhe97_eVq4F0Qyx9HNB1SQ8OJywu98aDDK3knmyzXfz9quUbWBq-3AyEgtedrUc6JtdQYAwzVMkvFNGOruEE33kwz_MiIWYbz1CpWjFlUHugO590C7REEK2UoymTysCB4EgS0nnCksznu1vsCJ-7oo_pmMCMZKzAPYw35-JpCqExUv0qKEfTMzruF0dy0q-ugEoGo_EIFWjb9MqsEeMAquUUqsUDQYFp3dih4nk-5JUtJ4oFUAb5ReK0OwvU8I-wc0fGQ4_Ac",
  },
];
</script>
