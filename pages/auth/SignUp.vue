<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <form @submit.prevent="handleSignUp" class="space-y-4">
        <div
          v-if="error"
          class="bg-red-50 border border-red-300 text-red-700 text-sm px-4 py-2 rounded"
        >
          {{ error }}
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            required
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="text"
            required
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
            class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? "Creating account..." : "Sign Up" }}
        </button>
      </form>

      <p class="mt-4 text-sm text-center">
        Already have an account?
        <router-link
          :to="{ name: 'signin', query: route.query }"
          class="text-green-600 hover:underline"
          >Sign In</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";

const { signup } = useStore();
const router = useRouter();
const route = useRoute(); // <-- access current route

const username = ref("");
const email = ref("");
const password = ref("");
const error = ref(null);
const loading = ref(false);

async function handleSignUp() {
  error.value = null;
  loading.value = true;

  try {
    await signup({
      fullname: "",
      username: username.value,
      email: email.value,
      password: password.value,
    });

    // ✅ Redirect to signin preserving all query params
    router.push({ name: "signin", query: route.query });
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>
