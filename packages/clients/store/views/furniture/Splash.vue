<template>
  <div class="relative h-screen w-full overflow-hidden bg-white">
    <!-- 1️⃣ Chair (PRIMARY ANCHOR) -->
    <img
      src="https://storage.googleapis.com/great-unknown.appspot.com/images/stores/furniture/comfie/splash-bg.png"
      alt="Furniture background"
      class="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[14%] w-[88%] max-w-none object-contain z-[100]"
    />

    <!-- 2️⃣ Decorative circle (LOCKED to chair) -->
    <div
      class="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[14%] pointer-events-none z-[5]"
    >
      <div
        class="w-[420px] h-[420px] rounded-full border border-neutral-200/70"
      />
    </div>

    <!-- 3️⃣ Front flower (foreground, overlaps chair) -->
    <img
      src="https://storage.googleapis.com/great-unknown.appspot.com/images/stores/furniture/comfie/splash-flower-1.png"
      alt="Decor plant front"
      class="absolute top-[60%] left-6 w-28 z-[20]"
    />

    <!-- 4️⃣ Back flower (behind chair) -->
    <img
      src="https://storage.googleapis.com/great-unknown.appspot.com/images/stores/furniture/comfie/splash-flower-2.png"
      alt="Decor plant back"
      class="absolute top-[40%] right-6 w-32 z-[0]"
    />

    <!-- Content -->
    <div class="relative z-[30] h-full flex flex-col px-6 pt-24 pb-10">
      <!-- Headline -->
      <div class="max-w-xs">
        <div class="flex items-start gap-3">
          <span class="w-1 h-14 bg-orange-500 mt-1"></span>
          <h1 class="text-3xl font-semibold leading-tight">
            <span class="text-orange-500">Comfort</span>
            <span class="text-neutral-800"> Meets</span><br />
            <span class="text-neutral-800">Craftsmanship</span>
          </h1>
        </div>
      </div>

      <div class="flex-1" />

      <!-- CTA -->
      <div class="flex justify-center">
        <button
          class="relative w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg active:scale-95 transition"
        >
          <span
            class="absolute inset-[-6px] rounded-full border-2 border-orange-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 5l8 7-8 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// purely presentational
</script>
