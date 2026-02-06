<template>
  <div class="w-full">
    <!-- Sub Tabs -->
    <div class="flex border-b border-gray-300">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="flex-1 py-2 text-sm text-center transition"
        :class="
          activeTab === tab.key
            ? 'border-b-2 border-black font-semibold'
            : 'text-gray-500 hover:text-black'
        "
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Content -->
    <div class="p-4">
      <div v-if="activeTab === 'daily'">🗓️ Daily Games</div>

      <div v-else-if="activeTab === 'history'">📜 Game History</div>

      <div v-else>👀 Watch Games</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  { key: "daily", label: "Daily Games" },
  { key: "history", label: "Game History" },
  { key: "watch", label: "Watch" },
];

const activeTab = ref("daily");
</script>
