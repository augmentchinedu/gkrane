<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <Back />
    </header>

    <!-- CENTRALIZED CONTENT AREA -->
    <main class="flex-1 flex items-center justify-center px-4">
      <div class="w-full max-w-md">
        <div
          class="rounded-lg p-6 flex flex-col items-center bg-white shadow-md hover:shadow-lg transition"
        >
          <img :src="game.image" :alt="game.name" class="rounded w-64 mb-4" />

          <div class="text-center font-semibold text-lg mb-4">
            {{ game.name }}
          </div>

          <button
            class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            @click="handleButtonClick"
          >
            {{
              Object.keys(user).length > 0 ? `Play ${game.name}` : "Get Started"
            }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store";

const { app, user } = useStore();
const router = useRouter();
const route = useRoute();
const gameId = route.params.id;

// Find the game by ID
const game = computed(() => app.content?.games?.find((g) => g.id === gameId));

function handleButtonClick() {
  console.log(user, gameId);
  if (user?.id) {
    router.push({
      name: "board",
      params: { id: gameId },
    });
  } else {
    router.push({
      name: "signin",
      query: { redirect: `/${gameId}/board` },
    });
  }
}
</script>

<script>
export const path = "/:id";
export const routeMeta = {
  drawer: false,
};
</script>
