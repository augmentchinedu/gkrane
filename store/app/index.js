import { ref } from "vue";

export const useApp = () => {
  const id = ref(null);
  const name = ref(null);
  const isInstantiated = ref(false);
  const isAuthenticated = ref(false);
  const isInitialized = ref(!!localStorage.getItem("isInitialized"));


  return {
    id,
    name,
    isInstantiated,
    isAuthenticated,
    isInitialized,
  };
};
