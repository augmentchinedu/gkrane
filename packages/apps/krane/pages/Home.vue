<template>
  <main class="font-display bg-background-light dark:bg-background-dark min-h-screen">
    <div class="relative flex h-screen w-full flex-col overflow-hidden abstract-bg">
      <!-- App Grid -->
      <div class="flex-1 px-6 pt-4 pb-4 overflow-y-auto">
        <div class="grid grid-cols-4 gap-y-7 gap-x-4">
          <a v-for="app in apps" :key="app.name" :href="`https://${app.name.toLowerCase()}.gkrane.online`"
            target="_blank" rel="noopener noreferrer" class="flex flex-col items-center gap-1.5">
            <div :class="['app-icon', app.bg]">
              <Icon :icon="app.icon" :class="app.color" />
            </div>
            <span class="app-label">{{ app.name }}</span>
          </a>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="px-6 pb-8 space-y-4">
        <div class="px-2">
          <div class="flex w-full items-stretch glass-effect rounded-2xl h-10">
            <div class="text-white/60 flex border-none items-center justify-center pl-4">
              <Icon icon="material-symbols:search" class="text-lg" />
            </div>
            <input
              class="form-input flex w-full min-w-0 flex-1 bg-transparent border-none text-white focus:ring-0 placeholder:text-white/50 px-4 pl-2 text-sm font-normal"
              placeholder="Search" />
          </div>
        </div>

        <div class="glass-effect rounded-[2.5rem] p-3 flex justify-around items-center">
          <router-link v-for="action in actions" :key="action.name" :to="`/${action.name.toLowerCase()}`"
            class="flex flex-col items-center justify-center size-14 rounded-xl transition-transform active:scale-90">
            <div :class="[
              'size-12 rounded-2xl flex items-center justify-center shadow-md',
              action.bg,
            ]">
              <Icon :icon="action.icon" :class="action.color" />
            </div>
          </router-link>
        </div>

        <div class="w-full flex justify-center pt-2">
          <div class="w-32 h-1.5 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

if (import.meta.env.MODE === "production" && window.location.hostname !== "gkrane.online") {
  router.push({ name: 'notfound' });
}

// App grid data
const apps = [
  {
    name: "Stores",
    icon: "material-symbols:storefront",
    bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    color: "text-white text-3xl",
  },
  {
    name: "Gallery",
    icon: "material-symbols:photo-library",
    bg: "bg-white",
    color: "text-rose-500 text-3xl",
  },
  {
    name: "Wallet",
    icon: "material-symbols:account-balance-wallet",
    bg: "bg-neutral-800",
    color: "text-white text-3xl",
  },
  {
    name: "Calculator",
    icon: "material-symbols:calculate",
    bg: "bg-orange-500",
    color: "text-white text-3xl",
  },
  {
    name: "Music",
    icon: "material-symbols:music-note",
    bg: "bg-gradient-to-br from-pink-500 to-rose-600",
    color: "text-white text-3xl",
  },
  {
    name: "Videos",
    icon: "material-symbols:smart-display",
    bg: "bg-blue-600",
    color: "text-white text-3xl",
  },
  {
    name: "Films",
    icon: "material-symbols:movie",
    bg: "bg-purple-600",
    color: "text-white text-3xl",
  },
  {
    name: "Kingdom",
    icon: "material-symbols:castle",
    bg: "bg-amber-500",
    color: "text-white text-3xl",
  },
  {
    name: "Realm",
    icon: "material-symbols:fort",
    bg: "bg-emerald-600",
    color: "text-white text-3xl",
  },
  {
    name: "Country",
    icon: "material-symbols:flag",
    bg: "bg-sky-600",
    color: "text-white text-3xl",
  },
  {
    name: "State",
    icon: "material-symbols:map",
    bg: "bg-teal-600",
    color: "text-white text-3xl",
  },
  {
    name: "Town",
    icon: "material-symbols:location-city",
    bg: "bg-lime-600",
    color: "text-white text-3xl",
  },
  {
    name: "Games",
    icon: "material-symbols:sports-esports",
    bg: "bg-red-500",
    color: "text-white text-3xl",
  },
  {
    name: "Notes",
    icon: "material-symbols:description",
    bg: "bg-yellow-400",
    color: "text-neutral-900 text-3xl",
  },
  {
    name: "Community",
    icon: "material-symbols:groups",
    bg: "bg-blue-400",
    color: "text-white text-3xl",
  },
  {
    name: "Realty",
    icon: "material-symbols:real-estate-agent",
    bg: "bg-violet-500",
    color: "text-white text-3xl",
  },
  {
    name: "News",
    icon: "material-symbols:newspaper",
    bg: "bg-slate-100",
    color: "text-slate-800 text-3xl",
  },
  {
    name: "Sports",
    icon: "material-symbols:sports-soccer",
    bg: "bg-green-500",
    color: "text-white text-3xl",
  },
  {
    name: "Events",
    icon: "material-symbols:event",
    bg: "bg-pink-400",
    color: "text-white text-3xl",
  },
  {
    name: "Recorder",
    icon: "material-symbols:mic",
    bg: "bg-red-600",
    color: "text-white text-3xl",
  },
  {
    name: "Mail",
    icon: "material-symbols:mail",
    bg: "bg-blue-500",
    color: "text-white text-3xl",
  },
  {
    name: "Clock",
    icon: "material-symbols:schedule",
    bg: "bg-black border border-white/10",
    color: "text-white text-3xl",
  },
  {
    name: "Slides",
    icon: "material-symbols:co-present",
    bg: "bg-amber-600",
    color: "text-white text-3xl",
  },
  {
    name: "Drive",
    icon: "material-symbols:add-to-drive",
    bg: "bg-white",
    color: "text-blue-500 text-3xl",
  },
  {
    name: "Contacts",
    icon: "material-symbols:group",
    bg: "bg-neutral-200",
    color: "text-neutral-800 text-3xl",
  },
  {
    name: "FairPay",
    icon: "material-symbols:finance-chip",
    bg: "bg-neutral-200",
    color: "text-neutral-800 text-3xl",
  },
  {
    name: "Spendly",
    icon: "mdi:finance",
    bg: "bg-emerald-400",
    color: "text-neutral-800 text-3xl",
  },
];

// Bottom actions
const actions = [
  {
    name: "Call",
    icon: "material-symbols:call",
    bg: "bg-gradient-to-br from-green-500 to-green-600",
    color: "text-white text-2xl",
  },
  {
    name: "Language",
    icon: "material-symbols:language",
    bg: "bg-white",
    color: "text-sky-500 text-3xl",
  },
  {
    name: "Chat",
    icon: "material-symbols:chat",
    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    color: "text-white text-2xl",
  },
  {
    name: "Camera",
    icon: "material-symbols:photo-camera",
    bg: "bg-neutral-800",
    color: "text-neutral-300 text-2xl",
  },
];
</script>
