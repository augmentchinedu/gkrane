import { ref } from "vue";
import { createGame } from "@/functions";
import { useWebSocket } from "@/store/tools/ws.js";
import { useStore } from "@/store";

export function useGamer() {
  const htmlGames = ["chess"];
  const loading = ref(false);
  const store = useStore();

  let send;

  const instantiate = async (name) => {
    const token = localStorage.getItem("token");
    const endpoint =
      import.meta.env.MODE === "development"
        ? `ws://localhost:3000/gamer?type=${name}&token=${token}`
        : `wss://${window.location.host}/gamer?type=${name}&token=${token}`;

    send = useWebSocket(endpoint);
  };

  // Start a new game
  const newGame = async (name, gameDiv) => {
    loading.value = true;

    if (!htmlGames.includes(name)) {
      const extra = await createGame(name, gameDiv);
      Object.assign(store.game, extra);
    }

    loading.value = false;
    return store.game;
  };

  return {
    loading,
    newGame,
    instantiate,
  };
}
