import { reactive } from "vue";
import { defineStore } from "pinia";
import { client, gql } from "@/gql/index.js";
import { USER_BASE_FIELDS } from "@/gql/queries/user.base.js";
import { SIGNUP, SIGNIN } from "@/gql/mutations/auth.js";
import { useGamer } from "./gamer/index.js";
import { useStores } from "./stores/index.js";
import { useApp } from "./app/index.js";

export const useStore = defineStore("store", () => {
  const app = useApp();

  const user = reactive({});
  const game = reactive({});
  const gamer = useGamer(game);
  const stores = useStores();

  /* ---------------- INIT ---------------- */
  async function instantiate() {
    if (app.isInstantiated.value) return;

    const isDev = import.meta.env.MODE === "development";

    const variables = isDev
      ? {
          username: __USERNAME__,
          key: import.meta.env.VITE_DEVELOPMENT_KEY,
        }
      : {};

    try {
      const { client: clientData } = await client.request(
        gql`
          query GetClient($username: String, $key: String) {
            client(username: $username, key: $key) {
              id
              name
              username
              type
              content
            }
          }
        `,
        variables,
      );
      app.name = clientData.username;
      app.content = reactive(clientData.content || {});
      app.isAuthenticated.value = !!localStorage.getItem("token");
      app.isInstantiated.value = true;

      if (app.isAuthenticated.value) {
        const { user: userData } = await client.request(gql`
          ${USER_BASE_FIELDS}

          query GetUser {
            user {
              ...UserBaseFields
            }
          }
        `);

        Object.assign(user, userData);
      }

      // ✅ Dynamically load game package
      if (__PKG__ === "games") {
        const gameModule = await import("./gamer/index.js");
        Object.assign(game, gameModule);
        console.info("🎮 Game module loaded");
      }
    } catch (err) {
      console.error("GraphQL init error:", err);
    }

    console.info("Instantiated");
  }

  /* ---------------- SIGN UP ---------------- */

  async function signup({ fullname, username, email, password }) {
    try {
      const { signup } = await client.request(SIGNUP, {
        appName: app.name,
        fullname,
        username,
        email,
        password,
      });

      // ❌ Backend-level error (user exists, validation, etc)
      if (signup.error) {
        throw signup.error;
      }

      // ✅ Success
      localStorage.setItem("token", signup.token);
      app.isAuthenticated.value = true;
      Object.assign(user, signup.user);

      return signup.user;
    } catch (err) {
      console.error("Signup failed:", err);

      // Normalize error shape
      throw {
        code: err.code || "UNKNOWN_ERROR",
        message: err.message || "Signup failed",
      };
    }
  }
  /* ---------------- SIGN IN ---------------- */
  async function signin(identifier, password) {
    try {
      const resp = await client.request(SIGNIN, {
        identifier: identifier.toLowerCase().trim(),
        appName: app.name,
        password,
      });

      // Extract the payload safely
      const data = resp.signin ?? resp; // fallback for some clients

      if (!data.token || data.error) {
        throw new Error(data.error?.message || "Invalid credentials");
      }

      localStorage.setItem("token", data.token);
      app.isAuthenticated.value = true;
      Object.assign(user, data.user);

      return data.user;
    } catch (err) {
      console.error("Signin failed:", err);
      throw new Error(err.message || "Sign in failed");
    }
  }

  /* ---------------- LOGOUT ---------------- */

  function signout() {
    localStorage.removeItem("token");
    app.isAuthenticated.value = false;
    app.isInitialized.value = false;

    Object.keys(user).forEach((k) => delete user[k]);
  }

  return {
    instantiate,
    app,
    user,
    gamer,
    game,
    stores,
    signup,
    signin,
    signout,
  };
});
