<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6">Sign In</h2>

      <form @submit.prevent="handleSignIn" class="space-y-4">
        <!-- Error Message -->
        <div
          v-if="error"
          class="bg-red-50 border border-red-300 text-red-700 text-sm px-4 py-2 rounded"
        >
          {{ error }}
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Email or Username</label
          >
          <input
            v-model="identifier"
            type="text"
            required
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            required
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? "Signing in..." : "Sign In" }}
        </button>
      </form>

      <p class="mt-4 text-sm text-center">
        Don't have an account?
        <router-link
          :to="{ name: 'signup', query: route.query }"
          class="text-blue-600 hover:underline"
          >Sign Up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";

const store = useStore();
const route = useRoute();
const router = useRouter();

const identifier = ref("");
const password = ref("");
const error = ref(null);
const loading = ref(false);

async function handleSignIn() {
  error.value = null;
  loading.value = true;

  try {
    await store.signin(identifier.value, password.value);

    if (route.query.redirect) router.push(route.query.redirect);
    else router.push("/"); // redirect after successful SignIn
  } catch (err) {
    // display backend or network errors
    error.value = err.message || "Sign in failed";
  } finally {
    loading.value = false;
  }
}
</script>
