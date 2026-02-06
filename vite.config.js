import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

const pkg = process.env.PACKAGE;
const username = process.env.USERNAME;
const ws = process.env.WEBSOCKET;
const theme = process.env.THEME ? JSON.parse(process.env.THEME) : {};

const DIST_DIR = path.resolve("clients");
const outDir = path.join(DIST_DIR, pkg);

export default defineConfig({
  root: path.resolve("."),
  plugins: [vue(), tailwindcss()],
  define: {
    __PKG__: JSON.stringify(pkg),
    __USERNAME__: JSON.stringify(username),
    "import.meta.env.WS": JSON.stringify(ws),
    "import.meta.env.THEME": JSON.stringify(theme),
  },
  resolve: {
    alias: {
      "@": path.resolve("."),
      "package-pages": path.resolve(__dirname, `packages/${pkg}/pages`),
      "global-pages": path.resolve(__dirname, `pages`),
      gql: path.resolve(__dirname, `packages/${pkg}/gql`),
    },
  },
  server: {
    strictPort: true,
    port: Number(process.env.PORT) || 5173,
  },
  build: {
    outDir,
    emptyOutDir: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: [
      "tests/global/**/*.{test,spec}.{js,ts,vue}",
      "tests/**/*.{test,spec}.{js,ts,vue}",
      "packages/*/tests/**/*.{test,spec}.{js,ts,vue}",
    ],
    exclude: ["tests/e2e/**", "**/node_modules/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
