<template>
  <div class="bg-background-light dark:bg-background-dark font-display">
    <!-- Main OS Container -->
    <div
      class="relative flex h-screen w-full flex-col bg-os-blur dark group/design-root overflow-hidden"
    >
      <!-- Top App Bar -->
      <div class="flex items-center p-4 pb-2 justify-between mt-8">
        <div
          class="text-white flex size-12 shrink-0 items-center justify-center rounded-full glass-card"
        >
          <Icon icon="material-symbols:close" />
        </div>
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex items-center justify-center rounded-full h-12 w-12 glass-card text-white"
          >
            <Icon icon="material-symbols:info" />
          </button>
        </div>
      </div>

      <!-- Hero Section -->
      <div
        class="flex flex-1 flex-col items-center justify-center px-6 text-center"
      >
        <div class="relative mb-8 flex items-center justify-center">
          <div
            class="absolute w-64 h-64 bg-primary/20 rounded-full blur-[60px]"
          ></div>
          <div class="relative z-10 w-64 h-64 flex items-center justify-center">
            <div
              class="bg-center bg-no-repeat aspect-square bg-contain w-full rounded-full"
              style="
                background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCcYLnlXbBEkXIRC44tdoLGpdUcf9sBYRgzE79iqYMGDkfizFxa_wS6PYIttBc6WOFLMa9dmC_3efRU1FNr1Tbm_zaGwL-iiPkctrIyoJ-YurP4EaodutgWKZlF20nNGeS7BkJmYzKjLRBr_CrCbeoGknlRYNfDd1Ll5gkzq2vIiD9WRheSf1f6Tb5Y--OxKQjcCOXjzDEKWp08wp6YNz541lc_ouwmBd_mQcbsKzRRbdZUJXztbdOzbL7s-rCGPg5mEPyG13C2V2I&quot;);
              "
            />
          </div>
        </div>

        <h1
          class="text-9xl font-bold tracking-tighter glass-text leading-none mb-4"
        >
          404
        </h1>

        <div class="flex max-w-[480px] flex-col items-center gap-3">
          <h2
            class="text-white text-2xl font-bold leading-tight tracking-tight"
          >
            Lost in Space
          </h2>
          <p
            class="text-white/70 text-base font-normal leading-relaxed max-w-[320px]"
          >
            Oops! This page has drifted into another realm. It's either gone or
            never existed in this orbit.
          </p>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="flex flex-col gap-3 px-6 pb-12 pt-6">
        <div class="flex flex-col gap-3 w-full max-w-md mx-auto">
          <button
            class="flex w-full items-center justify-center rounded-xl h-14 bg-primary text-white font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          >
            Go Home
          </button>
          <button
            class="flex w-full items-center justify-center rounded-xl h-14 glass-card text-white font-bold active:scale-95 transition-transform"
          >
            Try Again
          </button>
        </div>
      </div>

      <!-- Home Indicator -->
      <div class="flex justify-center pb-2">
        <div class="w-32 h-1.5 bg-white/30 rounded-full"></div>
      </div>

      <!-- Bottom Nav -->
      <div class="flex gap-2 bg-transparent px-4 pb-3 pt-2">
        <a class="flex flex-1 flex-col items-center justify-end text-white/50">
          <Icon icon="material-symbols:home" />
        </a>
        <a class="flex flex-1 flex-col items-center justify-end text-white/50">
          <Icon icon="material-symbols:search" />
        </a>
        <a class="flex flex-1 flex-col items-center justify-end text-white/50">
          <Icon icon="material-symbols:add-circle" />
        </a>
        <a class="flex flex-1 flex-col items-center justify-end text-white/50">
          <Icon icon="material-symbols:notifications" />
        </a>
        <a class="flex flex-1 flex-col items-center justify-end text-white/50">
          <Icon icon="material-symbols:person" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-text {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.bg-os-blur {
  background: linear-gradient(135deg, #161022 0%, #2f2348 100%);
  position: relative;
}
.bg-os-blur::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, #5b13ec 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, #221933 0%, transparent 50%);
  filter: blur(80px);
  opacity: 0.6;
  z-index: -1;
}
</style>
