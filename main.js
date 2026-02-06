import "./main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { createAppRouter } from "./router";
import { useStore } from "./store";

import { Icon } from "@iconify/vue";

// Global components
import NavBar from "./components/NavIcon.vue";
import Back from "./components/Back.vue";
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";

import { initTheme } from "./scripts/theme.js";

async function bootstrap() {
  // 1️⃣ Create app & Pinia
  const app = createApp(App);
  const pinia = createPinia();
  app.use(pinia);

  // 2️⃣ Instantiate store BEFORE router
  const store = useStore();
  await store.instantiate();

  // 3️⃣ Setup router AFTER store
  const router = await createAppRouter();
  app.use(router);

  // 4️⃣ Register global components
  app.component("Icon", Icon);
  app.component("NavBar", NavBar);
  app.component("Back", Back);
  app.component("Input", Input);
  app.component("Button", Button);

  initTheme();

  await router.isReady();

  // 5️⃣ Mount app
  app.mount("#app");
}

// Execute bootstrap
bootstrap().catch((err) => {
  console.error("❌ App bootstrap failed:", err);
});
