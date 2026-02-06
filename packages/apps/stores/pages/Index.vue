<template>
  <main
    class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30 min-h-screen"
  >
    <!-- Top App Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md pt-[env(safe-area-inset-top)]"
    >
      <div
        class="flex items-center p-4 pb-2 justify-between max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
      >
        <!-- Menu -->
        <div
          class="text-primary flex size-12 shrink-0 items-center justify-start"
        >
          <Icon icon="mdi:sort-variant" class="text-[28px]" />
        </div>

        <h2
          class="text-black dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center"
        >
          Stores
        </h2>

        <!-- Profile -->
        <div class="flex w-12 items-center justify-end">
          <button
            class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary"
          >
            <Icon icon="mdi:account-circle" class="text-[24px]" />
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <section
      class="pt-24 pb-32 px-4 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
    >
      <header class="pt-4">
        <h1
          class="text-black dark:text-white tracking-tight text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5"
        >
          Browse by Category
        </h1>
      </header>

      <!-- Search -->
      <div class="pb-6">
        <label class="flex flex-col h-12 w-full">
          <div class="flex w-full h-full items-stretch rounded-xl shadow-sm">
            <div
              class="text-primary flex bg-white dark:bg-[#2f2348] items-center justify-center pl-4 rounded-l-xl"
            >
              <Icon icon="mdi:magnify" class="text-[20px]" />
            </div>
            <input
              class="flex w-full flex-1 rounded-r-xl text-black dark:text-white bg-white dark:bg-[#2f2348] placeholder:text-gray-400 dark:placeholder:text-[#a492c9] px-4 pl-2 text-base focus:outline-none"
              placeholder="Search categories..."
            />
          </div>
        </label>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="item in categories"
          :key="item.title"
          @click="goToCategory(item.title)"
          class="relative group cursor-pointer aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transition active:scale-[0.96] hover:scale-[1.02]"
        >
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url('${item.img}')` }"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          ></div>

          <div class="absolute bottom-0 left-0 right-0 p-3 glass-panel">
            <p class="text-white text-base sm:text-lg font-bold">
              {{ item.title }}
            </p>
            <p
              class="text-white/70 text-[10px] uppercase tracking-wider font-semibold"
            >
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Tab Bar (mobile only) -->
    <nav
      class="fixed bottom-0 left-0 right-0 z-50 ios-tab-bar border-t border-white/10 px-6 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] lg:hidden"
    >
      <div class="flex justify-between items-center max-w-md mx-auto">
        <button class="flex flex-col items-center gap-1 text-primary">
          <Icon icon="mdi:view-grid" class="text-[24px]" />
          <span class="text-[10px] font-bold">Categories</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:shopping-outline" class="text-[24px]" />
          <span class="text-[10px] font-medium">Stores</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:bookmark-outline" class="text-[24px]" />
          <span class="text-[10px] font-medium">Saved</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:bell-outline" class="text-[24px]" />
          <span class="text-[10px] font-medium">Updates</span>
        </button>
      </div>
    </nav>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const categories = [
  {
    title: "Jewelry",
    subtitle: "Fine collections",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAQSzJTKp9s-ZkHW273GN0LCQ_78WFe-QaG-No9VkYWPj5lEBdigdbbc4KYXi4AqANkpwmMVtujeP7MmrVpVKRpclCnFm49W28QaghaB1wSyUcNRzBBPk7iqjTzY936-mNe3JfS_r6ni8nf17v-huHPDoKwdJp10eGXcBIkgrSSn79DVmsnnJapkg5QhVwJqNfK6tyKLrykwx6vtJYwB579YNTDQxh88DNUaMcf-neqrNsqPaRRu95VBSIzDXS-qFdOYq4htyp_9U",
  },
  {
    title: "Furniture",
    subtitle: "Modern living",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp0eyf0zJ8ampzu3uFuORrIjXn0vdgYr_OSsxpSvEFARzokPbBWRgGLud3nfjh0jVVSjQkt5w7A5jPP9kOY21pPgzvQkigheFwqcW3BCEse3T-sTX2_zCBpkQkiOsh8LpLVap0PQ2KAGi2FqPCoE365CpiwChWTYEHF3V45dSYN2pBjLiu_Rptz_XlRJhF2Qnb6AA7bxCSdWuLYhmW_QoQUw_0DXIy78sYxPWClHNF2pIUN0Qxy_aBycA6qAFPEjx4c6opMDoMXuU",
  },
  {
    title: "Skincare",
    subtitle: "Organic glow",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKo8G-mgBqsJa551uvAbq3T7ZBoAlwxBWGsoZ6YNKiBa6WTIv_ze_7OXIvISoFjKCeLCWVCNYvgNTP0dVlljfBnVCEi7ORHWLR1P58aIxT51fxUtPQaAVjuqE0bVDH66kU_pXjpDrkKccfVR0NVTC0GUvfPcNPYyp2TATaftbH22ZAcMJ-6M0g90Cacj3adr3IJ0Hqjq81x1B5Y3vZw96o9T10p47RUsmEzp6CQ2ATMuh0TcfGcYEBgV8rfd_6-g0XpV8ktUoJgJg",
  },
  {
    title: "Drinks",
    subtitle: "Premium spirits",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQjvLLNrKsW9zXgcZMAnLefPIe03EgcJymXava-n46rtoEsx9GMhtfyWxs-wax2dy-Fn4A8qtyRZAoqsFo8TQuW8vnS3JMnnpsKH7j0F5wm8wbSAJrfPWwQvmkkH2ZrEEQOt2TElsfFwLIqLEDJXUT09Vc7ewamlk2sCoLkFj2v8u1kbb-WrfaRGWnMVM4BNhCQzh2bUrPgTs2P2GcgBj8rf_809ZecZbvAOWzymRQHPdH54jWozb5pp0c4AwRcBOsq1UhlF_P9Us",
  },
];

function goToCategory(title) {
  router.push(`/${title.toLowerCase()}`);
}
</script>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.ios-tab-bar {
  background: rgba(22, 16, 34, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
