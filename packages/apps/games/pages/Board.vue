<template>
  <div id="game" class="w-full">
    <header>
      <Back />
    </header>
    <!-- Chess = HTML/Vue game -->
    <component
      v-if="name === 'chess'"
      :is="GameComponent"
      class="text-center"
    />

    <!-- Others = ThreeJS canvas -->
    <div v-else ref="gameDiv" class="w-full h-screen" />
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
  computed,
} from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";

const route = useRoute();
const { gamer } = useStore();

const name = route.params.id;
const gameDiv = ref(null);
let cleanup = null;

/* ---------------- HTML Games ---------------- */

const GameComponent = computed(() =>
  defineAsyncComponent(() => import(`../views/${name}/Index.vue`))
);

/* ---------------- ThreeJS Games ---------------- */

onMounted(async () => {
  cleanup = await gamer.newGame(name, gameDiv.value);
});

onBeforeUnmount(() => {
  if (cleanup) cleanup();
});
</script>

<script>
import { useStore } from "@/store";

export const path = "/:id/board";
export const routeMeta = {
  beforeEnter: async (to, from, next) => {
    const { gamer } = useStore();
    const name = to.params.id;

    // 🔥 Subscribe FIRST
    await gamer.instantiate(name);

    next();
  },
};
</script>
