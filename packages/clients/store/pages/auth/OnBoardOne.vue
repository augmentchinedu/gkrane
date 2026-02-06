<template>
  <div class="h-screen w-full bg-neutral-100 flex items-center justify-center">
    <div class="relative h-full w-full bg-neutral-200 rounded-2xl shadow-lg">
      <!-- Background image -->
      <img
        src="https://storage.googleapis.com/great-unknown.appspot.com/images/stores/fashion/velar/sitting.jpg"
        alt="Onboarding"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Left overlay -->
      <div
        class="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-neutral-100/90 to-neutral-100/60 backdrop-blur-sm"
      />

      <!-- Content -->
      <div class="relative z-10 flex flex-col h-full px-6 py-8">
        <!-- Header -->
        <div class="text-lg font-serif tracking-wide text-slate-800">Velar</div>

        <!-- Main text -->
        <div class="mt-28">
          <h1 class="text-2xl font-semibold text-slate-800 leading-snug">
            Shop the<br />
            most modern<br />
            essentials
          </h1>
        </div>

        <!-- Spacer -->
        <div class="flex-1" />

        <!-- CTA -->
        <button
          class="w-full max-w-xs mx-auto bg-slate-900 text-white py-4 rounded-xl flex items-center justify-center gap-3 text-base font-medium active:scale-[0.98] transition"
        >
          Get Started
          <span class="text-xl">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// no logic needed
</script>
