<template>
  <div id="chess" class="flex flex-col gap-4 p-2">
    <div id="game-board" class="flex flex-col gap-4">
      <profile-bar></profile-bar>
      <div
        ref="board"
        class="grid grid-cols-8 grid-rows-8 w-96 h-96 border border-black mx-auto"
      ></div>
      <profile-bar></profile-bar>
    </div>
    <div class="mx-auto w-96">
      <!-- Tabs -->
      <div class="flex border-b border-gray-300">
        <button
          class="flex-1 py-2 text-center"
          :class="
            activeTab === 'new'
              ? 'border-b-2 border-black font-semibold'
              : 'text-gray-500'
          "
          @click="activeTab = 'new'"
        >
          New Game
        </button>

        <button
          class="flex-1 py-2 text-center"
          :class="
            activeTab === 'games'
              ? 'border-b-2 border-black font-semibold'
              : 'text-gray-500'
          "
          @click="activeTab = 'games'"
        >
          Games
        </button>

        <button
          class="flex-1 py-2 text-center"
          :class="
            activeTab === 'players'
              ? 'border-b-2 border-black font-semibold'
              : 'text-gray-500'
          "
          @click="activeTab = 'players'"
        >
          Players
        </button>
      </div>

      <!-- Tab Content -->
      <div class="p-4">
        <NewGame v-if="activeTab === 'new'" />

        <Games v-else-if="activeTab === 'games'" />

        <Players v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createBoard, createPieces } from "@/functions/chess";
import ProfileBar from "./components/ProfileBar.vue";
import NewGame from "./components/NewGame.vue";
import Games from "./components/Games.vue";
import Players from "./components/Players.vue";

const board = ref(null);
const activeTab = ref("new"); // new | games | players

onMounted(() => {
  createBoard(board);
  createPieces(board);
});
</script>
<style>
.square {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

/* Dark squares */
.black {
  background-color: rgb(150 176 125);
}

/* Light squares */
.white {
  background-color: rgb(240 241 220);
}

.piece {
  width: 80%;
  height: 80%;
  pointer-events: none;
  user-select: none;
}
</style>
