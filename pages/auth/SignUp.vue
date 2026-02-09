<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-background">
    <div class="w-full max-w-md">
      <!-- Card -->
      <div class="card p-8">
        <h2 class="text-2xl font-bold text-center mb-6 text-foreground">Sign Up</h2>

        <form @submit.prevent="handleSignUp" class="space-y-5">
          <!-- Error Message -->
          <div v-if="error" class="alert alert-destructive" role="alert">
            <svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd" />
            </svg>
            {{ error }}
          </div>

          <!-- Username Input -->
          <div class="space-y-2">
            <label for="username" class="block text-sm font-medium text-foreground">
              Username
            </label>
            <input id="username" v-model="username" type="text" required class="input w-full"
              placeholder="Choose a username" />
          </div>

          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-foreground">
              Email
            </label>
            <input id="email" v-model="email" type="email" required class="input w-full"
              placeholder="Enter your email" />
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium text-foreground">
              Password
            </label>
            <input id="password" v-model="password" type="password" required class="input w-full"
              placeholder="Create a password" minlength="8" />
            <p class="text-xs text-muted-foreground">
              Must be at least 8 characters
            </p>
          </div>

          <!-- Sign Up Button -->
          <button type="submit" :disabled="loading" class="btn btn-primary btn-md w-full">
            {{ loading ? "Creating account..." : "Sign Up" }}
          </button>
        </form>

        <!-- Sign In Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-muted-foreground">
            Already have an account?
            <router-link :to="{ name: 'signin', query: route.query }"
              class="text-primary hover:text-primary/80 font-medium hover:underline ml-1">
              Sign In
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";

const { signup } = useStore();
const router = useRouter();
const route = useRoute();

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

    // Redirect to signin preserving all query params
    router.push({ name: "signin", query: route.query });
  } catch (err) {
    error.value = err.message || "Sign up failed";
  } finally {
    loading.value = false;
  }
}
</script>