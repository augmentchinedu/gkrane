<template>
  <main
    class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen"
  >
    <!-- Header -->
    <div
      class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800"
    >
      <div class="p-4 space-y-4">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold tracking-tight">Persons</h1>
          <button
            class="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-primary"
          >
            <Icon icon="mdi:plus" class="text-xl" />
          </button>
        </div>

        <!-- Search -->
        <div class="relative">
          <Icon
            icon="mdi:magnify"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
          />
          <input
            class="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all"
            placeholder="Search contacts"
            type="text"
          />
        </div>
      </div>
    </div>

    <!-- Contact List -->
    <main class="pb-28">
      <div class="px-4 space-y-8 mt-4">
        <!-- Example Contact Row -->
        <section>
          <div
            class="sticky top-[133px] bg-background-light dark:bg-background-dark py-2 z-10"
          >
            <span class="text-primary font-bold text-lg">A</span>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-4 group">
              <img
                alt="Avatar"
                class="size-14 rounded-2xl bg-slate-200 dark:bg-slate-800 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARI4H1DKSNkOn6gYdrR79n9HXBmLrYUcuLskbdCf74Eoxtpgqmv913Kh2ViM0NG0CGXqh8nJInrX9GAgblm-fKlhP7qKDT3gYiHrni0IffwpfTU3ZDoO78R4JCwCd8nvxLRw4Iq4KvlwwL0hHLI9p1Lw-dtBq8lrWrd-AxEVSPg7NDJpVluZqqBfRE4GPSYAnCOieqGWYxqDMipTfoaHomQNexM9oeRUhoBpB-Yt2zhPn9uogoOh99dUwQfneDZbU1tUiwAjB8qE4"
              />

              <div
                class="flex-1 border-b border-slate-100 dark:border-slate-800/50 pb-4 flex items-center justify-between"
              >
                <div>
                  <h4 class="font-bold">Alex Thompson</h4>
                  <p class="text-xs text-slate-500">Mobile • +1 234 567 890</p>
                </div>

                <div class="flex gap-2">
                  <button
                    class="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400"
                  >
                    <Icon icon="mdi:chat-outline" class="text-lg" />
                  </button>
                  <button
                    class="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <Icon icon="mdi:phone-outline" class="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Alphabet Scroll -->
    <div
      class="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 z-40"
    >
      <a class="text-[10px] font-bold text-primary" href="#">A</a>
      <a class="text-[10px] font-medium text-slate-400" href="#">B</a>
      <a class="text-[10px] font-medium text-slate-400" href="#">C</a>
      <span class="text-[10px] font-medium text-slate-400">•</span>
      <a class="text-[10px] font-medium text-slate-400" href="#">Z</a>
    </div>

    <!-- Bottom Navigation -->
    <nav
      class="fixed bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-6 pb-4 z-50"
    >
      <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
        <Icon icon="mdi:star-outline" class="text-xl" />
        <span class="text-[10px] font-medium">Favorite</span>
      </a>

      <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
        <Icon icon="mdi:history" class="text-xl" />
        <span class="text-[10px] font-medium">Recents</span>
      </a>

      <a class="flex flex-col items-center gap-1 text-primary" href="#">
        <Icon icon="mdi:account" class="text-xl" />
        <span class="text-[10px] font-bold">Contacts</span>
      </a>

      <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
        <Icon icon="mdi:dialpad" class="text-xl" />
        <span class="text-[10px] font-medium">Keypad</span>
      </a>

      <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
        <Icon icon="mdi:voicemail" class="text-xl" />
        <span class="text-[10px] font-medium">Voicemail</span>
      </a>
    </nav>
  </main>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
