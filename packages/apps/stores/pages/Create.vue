<template>
  <main class="bg-background-light dark:bg-background-dark text-slate-900 min-h-screen flex flex-col">
    <!-- Top Navigation Bar -->
    <header class="sticky top-0 z-50 pt-12 pb-4 px-4 bg-background-dark/60 backdrop-blur-md border-b border-primary/10">
      <div class="flex items-center justify-between mx-auto">
        <Back />

        <div class="flex flex-col items-center">
          <h1 class="text-lg font-bold tracking-tight">Create Your Store</h1>
          <span class="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
            Step 1 of 3
          </span>
        </div>

        <div class="w-10"></div>
      </div>

      <!-- Progress Indicator -->
      <div class="mx-auto mt-6 px-4">
        <div class="flex gap-2 h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
          <div class="h-full bg-primary w-1/3 rounded-full"></div>
          <div class="h-full bg-transparent w-1/3"></div>
          <div class="h-full bg-transparent w-1/3"></div>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="flex-1 mx-auto w-full px-6 py-8">
      <div class="mb-8 space-y-2">
        <h2 class="text-3xl font-extrabold text-white">Store Details</h2>
        <p class="text-slate-400 text-sm">
          Let's set up the foundation of your online business.
        </p>
      </div>

      <form class="space-y-6" @submit.prevent>
        <!-- Store Name -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-2 font-semibold text-slate-300">
            Store Name
          </label>
          <input v-model="store.name" type="text" placeholder="e.g. Neon Horizon Crafts" class="w-full h-14 px-4 rounded-xl text-white placeholder:text-slate-500
                   border border-slate-600 focus:border-primary
                   focus:ring-1 focus:ring-primary outline-none" />
        </div>

        <!-- Store Handle -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-2 font-semibold text-slate-300">
            Store Handle
          </label>
          <div class="relative flex items-center">
            <span class="absolute left-4 text-primary font-bold text-lg">@</span>
            <input v-model="store.handle" type="text" placeholder="handle" class="w-full h-14 pl-10 pr-12 rounded-xl text-white placeholder:text-slate-500
                     border border-slate-600 focus:border-primary
                     focus:ring-1 focus:ring-primary outline-none" />
            <div class="absolute right-4 flex items-center">
              <Icon icon="mdi:check-circle" class="text-primary w-5 h-5" />
            </div>
          </div>
          <p class="text-[11px] text-slate-400 ml-1">
            This will be your unique URL: marketplace.com/@handle
          </p>
        </div>

        <!-- Store Type -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-2 font-semibold text-slate-300">
            Store Type
          </label>

          <div class="flex overflow-x-auto gap-3 pb-2 no-scrollbar -mx-1 px-1">
            <button v-for="type in storeTypes" :key="type" type="button" @click="store.type = type" class="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium
                     border transition-all" :class="store.type === type
                      ? 'bg-primary/20 text-primary border-primary/50'
                      : 'border-slate-600 text-slate-300 hover:border-primary/30'">
              {{ pluralize(type) }}
            </button>
          </div>
        </div>

        <!-- Bio -->
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between items-end">
            <label class="text-sm font-semibold text-slate-300">
              Short Bio
            </label>
            <span class="text-[10px] text-slate-500">
              {{ store.bio.length }}/160
            </span>
          </div>
          <textarea v-model="store.bio" rows="4" maxlength="160"
            placeholder="Tell your customers what makes your store unique..." class="w-full p-4 rounded-xl text-white placeholder:text-slate-500
                   border border-slate-600 focus:border-primary
                   focus:ring-1 focus:ring-primary outline-none resize-none" />
        </div>

        <div class="h-24"></div>
      </form>
    </main>

    <!-- Bottom Action Area -->
    <div class="fixed bottom-0 left-0 right-0 p-6
             bg-gradient-to-t from-background-dark
             via-background-dark/95 to-transparent">
      <div class="mx-auto max-w-md">
        <!-- Error -->
        <p v-if="error" class="text-red-400 text-xs text-center mb-3">
          {{ error }}
        </p>

        <!-- Submit -->
        <button @click="submit" :disabled="loading" class="w-full h-16 bg-primary text-black font-extrabold text-lg
                 rounded-xl flex items-center justify-center gap-2
                 disabled:opacity-50 disabled:cursor-not-allowed
                 shadow-[0_8px_30px_rgb(19,236,19,0.3)]
                 active:scale-[0.98] transition-all">
          <span v-if="!loading">Create Store</span>
          <span v-else>Creating…</span>
          <Icon v-if="!loading" icon="mdi:arrow-right" class="w-6 h-6" />
        </button>

        <p class="text-center text-[10px] text-slate-500 mt-4 px-8">
          By clicking "Create Store", you agree to our Merchant Terms of Service
          and Privacy Policy.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const router = useRouter();
const { stores } = useStore();

const pluralize = inject("pluralize");

const loading = ref(false);
const error = ref(null);

const store = reactive({
  name: "",
  handle: "",
  type: "",
  bio: "",
});

const storeTypes = [
  "Jewelry",
  "Furniture",
  "Skincare",
  "Drink",
  "Fashion",
  "Gadget",
  "Hair",
];

async function submit() {
  error.value = null;

  if (!store.name || !store.handle || !store.type || !store.bio) {
    error.value = "Please fill in all fields.";
    console.warn("[CreateStore] Validation failed", { ...store });
    return;
  }

  loading.value = true;

  try {
    console.log("[CreateStore] Submitting:", { ...store });

    await stores.create({ ...store });

    router.push({
      name: "created",
      query: {
        name: store.name,
        handle: store.handle,
        type: store.type,
      },
    });
  } catch (err) {
    console.error("[CreateStore] Error:", err);

    if (err?.response?.errors?.length) {
      error.value = err.response.errors[0].message;
    } else if (err?.message) {
      error.value = err.message;
    } else {
      error.value = "Something went wrong. Please try again.";
    }
  } finally {
    loading.value = false;
  }
}
</script>
