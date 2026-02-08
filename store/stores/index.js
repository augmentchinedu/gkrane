import { useWebSocket } from "@/store/tools/ws.js";
import { useStore } from "@/store";

export function useStores() {
  const create = async (store) => {
    console.log("Creating store:", store);
    return true;
  };

  return {
    create,
  };
}
