<template>
  <main
    class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col"
  >
    <!-- Top Navigation Bar -->
    <header
      class="sticky top-0 z-50 pt-12 pb-4 px-4 bg-background-dark/60 backdrop-blur-md border-b border-primary/10"
    >
      <div class="flex items-center justify-between max-w-md mx-auto">
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full glass-input"
        >
          <Icon icon="mdi:chevron-left" class="text-white w-6 h-6" />
        </button>
        <div class="flex flex-col items-center">
          <h1 class="text-lg font-bold tracking-tight">Create Your Store</h1>
          <span
            class="text-[10px] uppercase tracking-[0.2em] text-primary font-bold"
            >Step 1 of 3</span
          >
        </div>
        <div class="w-10"></div>
      </div>

      <!-- Progress Indicator -->
      <div class="max-w-md mx-auto mt-6 px-4">
        <div
          class="flex gap-2 h-1.5 w-full bg-primary/20 rounded-full overflow-hidden"
        >
          <div class="h-full bg-primary w-1/3 rounded-full"></div>
          <div class="h-full bg-transparent w-1/3"></div>
          <div class="h-full bg-transparent w-1/3"></div>
        </div>
      </div>
    </header>

    <main class="flex-1 max-w-md mx-auto w-full px-6 py-8">
      <div class="mb-8 space-y-2">
        <h2 class="text-3xl font-extrabold text-white">Store Details</h2>
        <p class="text-slate-400 text-sm">
          Let's set up the foundation of your online business.
        </p>
      </div>

      <form class="space-y-6">
        <!-- Store Name -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-4 font-semibold text-slate-300"
            >Store Name</label
          >
          <input
            class="w-full h-14 px-4 rounded-xl text-white placeholder:text-slate-500 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            placeholder="e.g. Neon Horizon Crafts"
            type="text"
          />
        </div>

        <!-- Store Handle -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-4 font-semibold text-slate-300"
            >Store Handle</label
          >
          <div class="relative flex items-center">
            <span class="absolute left-4 text-primary font-bold text-lg"
              >@</span
            >
            <input
              class="w-full h-14 pl-10 pr-12 rounded-xl text-white placeholder:text-slate-500 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="handle"
              type="text"
            />
            <div class="absolute right-4 flex items-center">
              <Icon icon="mdi:check-circle" class="text-primary w-5 h-5" />
            </div>
          </div>
          <p class="text-[11px] text-slate-400 ml-1">
            This will be your unique URL: marketplace.com/@handle
          </p>
        </div>

        <!-- Store Type Selector -->
        <div class="flex flex-col space-y-2">
          <label class="text-sm mb-4 font-semibold text-slate-300 ml-1"
            >Store Type</label
          >
          <div class="flex overflow-x-auto gap-3 pb-2 no-scrollbar -mx-1 px-1">
            <button
              class="whitespace-nowrap px-5 py-2.5 rounded-full border border-primary/40 bg-primary/20 text-primary text-sm font-medium"
              type="button"
            >
              Jewelry
            </button>
            <button
              class="whitespace-nowrap px-5 py-2.5 rounded-full border border-slate-600 text-slate-300 text-sm font-medium"
              type="button"
            >
              Furniture
            </button>
            <button
              class="whitespace-nowrap px-5 py-2.5 rounded-full border border-slate-600 text-slate-300 text-sm font-medium"
              type="button"
            >
              Gadgets
            </button>
            <button
              class="whitespace-nowrap px-5 py-2.5 rounded-full border border-slate-600 text-slate-300 text-sm font-medium"
              type="button"
            >
              Apparel
            </button>
            <button
              class="whitespace-nowrap px-5 py-2.5 rounded-full border border-slate-600 text-slate-300 text-sm font-medium"
              type="button"
            >
              Digital Art
            </button>
          </div>
        </div>

        <!-- Store Description -->
        <div class="flex flex-col space-y-2">
          <div class="flex justify-between items-end ml-1">
            <label class="text-sm mb-4 font-semibold text-slate-300"
              >Short Bio</label
            >
            <span class="text-[10px] text-slate-500">0/160</span>
          </div>
          <textarea
            class="w-full p-4 rounded-xl text-white placeholder:text-slate-500 border border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
            placeholder="Tell your customers what makes your store unique..."
            rows="4"
          ></textarea>
        </div>

        <div class="h-24"></div>
      </form>
    </main>

    <!-- Bottom Action Area -->
    <div
      class="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent"
    >
      <div class="max-w-md mx-auto">
        <button
          class="w-full h-16 bg-primary text-black font-extrabold text-lg rounded-xl shadow-[0_8px_30px_rgb(19,236,19,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          Create Store
          <Icon icon="mdi:arrow-right" class="w-6 h-6 font-bold" />
        </button>
        <p class="text-center text-[10px] text-slate-500 mt-4 px-8">
          By clicking "Create Store", you agree to our Merchant Terms of Service
          and Privacy Policy.
        </p>
      </div>
    </div>
  </main>
</template>
