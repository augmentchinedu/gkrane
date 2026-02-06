import { ref } from "vue";

export const useApp = () => {
  const id = ref(null);
  const name = ref(null);
  const isInstantiated = ref(false);
  const isAuthenticated = ref(false);
  const isInitialized = ref(!!localStorage.getItem("isInitialized"));

  function updateTheme(theme) {
    if (!theme) {
      console.warn(`Theme "${themeName}" not found`);
      return;
    }

    const root = document.documentElement;

    Object.entries(theme).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
      console.log(variable, value);
    });
  }

  return {
    id,
    name,
    isInstantiated,
    isAuthenticated,
    isInitialized,
    updateTheme,
  };
};
