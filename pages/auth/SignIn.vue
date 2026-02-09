<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-background">
    <div class="w-full max-w-md">
      <!-- Card -->
      <div class="card p-8">
        <h2 class="text-2xl font-bold text-center mb-6 text-foreground">Sign In</h2>

        <form @submit.prevent="handleSignIn" class="space-y-5">
          <!-- Error Message -->
          <div 
            v-if="error" 
            class="alert alert-destructive"
            role="alert"
          >
            <svg class="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            {{ error }}
          </div>

          <!-- Email/Username Input -->
          <div class="space-y-2">
            <label 
              for="identifier" 
              class="block text-sm font-medium text-foreground"
            >
              Email or Username
            </label>
            <input
              id="identifier"
              v-model="identifier"
              type="text"
              required
              class="input w-full"
              placeholder="Enter your email or username"
            />
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <label 
              for="password" 
              class="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="input w-full"
              placeholder="Enter your password"
            />
          </div>

          <!-- Sign In Button -->
          <button 
            type="submit" 
            :disabled="loading"
            class="btn btn-primary btn-md w-full"
          >
            {{ loading ? "Signing in..." : "Sign In" }}
          </button>
        </form>

        <!-- Sign Up Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-muted-foreground">
            Don't have an account?
            <router-link 
              :to="{ name: 'signup', query: route.query }" 
              class="text-primary hover:text-primary/80 font-medium hover:underline ml-1"
            >
              Sign Up
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
    else router.push("/");
  } catch (err) {
    error.value = err.message || "Sign in failed";
  } finally {
    loading.value = false;
  }
}
</script>