<template>
  <body
    class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30"
  >
    <!-- Top App Bar -->
    <div
      class="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
    >
      <div class="flex items-center p-4 pb-2 justify-between mx-auto">
        <div
          class="text-primary flex size-12 shrink-0 items-center justify-start"
        >
          <Icon icon="mdi:sort" class="text-[28px]" />
        </div>

        <h2
          class="text-black dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center"
        >
          Stores
        </h2>

        <div class="flex w-12 items-center justify-end">
          <button
            class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary"
          >
            <Icon icon="mdi:account-circle" class="text-[24px]" />
          </button>
        </div>
      </div>
    </div>

    <!-- Main -->
    <main class="pt-20 pb-32 px-4 mx-auto">
      <header class="pt-4">
        <h1
          class="text-black dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-5"
        >
          Browse Categories
        </h1>
      </header>

      <!-- Search -->
      <div class="pb-6">
        <label class="flex flex-col min-w-40 h-12 w-full">
          <div
            class="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm"
          >
            <div
              class="text-primary flex border-none bg-white dark:bg-[#2f2348] items-center justify-center pl-4 rounded-l-xl"
            >
              <Icon icon="mdi:magnify" class="text-[20px]" />
            </div>

            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#2f2348] h-full placeholder:text-gray-400 dark:placeholder:text-[#a492c9] px-4 pl-2 text-base font-normal"
              placeholder="Search categories..."
            />
          </div>
        </label>
      </div>

      <!-- Create Store -->
      <div class="mb-6">
        <button
          class="create-store-card w-full rounded-2xl p-5 flex items-center justify-between group active:scale-[0.98] transition-all"
          @click="$router.push(!app.isAuthenticated?'/auth/signin':'/create')"
        >
          <div class="flex items-center gap-4">
            <div
              class="size-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(91,19,236,0.5)]"
            >
              <Icon icon="mdi:storefront" class="text-white text-2xl" />
            </div>

            <div class="text-left">
              <h3 class="text-white text-lg font-bold leading-none mb-1">
                Create Your Store
              </h3>
<p class="text-white/60 text-xs font-medium capitalize">
  <span v-if="!app.isAuthenticated">Sign in to </span>
  <span>launch your storefront today</span>
</p>
            </div>
          </div>

          <Icon
            icon="mdi:chevron-right"
            class="text-white/40 group-hover:text-white transition-colors"
          />
        </button>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div
          v-for="(item, i) in [
            {
              title: 'Jewelry',
              subtitle: 'Fine collections',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAQSzJTKp9s-ZkHW273GN0LCQ_78WFe-QaG-No9VkYWPj5lEBdigdbbc4KYXi4AqANkpwmMVtujeP7MmrVpVKRpclCnFm49W28QaghaB1wSyUcNRzBBPk7iqjTzY936-mNe3JfS_r6ni8nf17v-huHPDoKwdJp10eGXcBIkgrSSn79DVmsnnJapkg5QhVwJqNfK6tyKLrykwx6vtJYwB579YNTDQxh88DNUaMcf-neqrNsqPaRRu95VBSIzDXS-qFdOYq4htyp_9U',
            },
            {
              title: 'Furniture',
              subtitle: 'Modern living',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp0eyf0zJ8ampzu3uFuORrIjXn0vdgYr_OSsxpSvEFARzokPbBWRgGLud3nfjh0jVVSjQkt5w7A5jPP9kOY21pPgzvQkigheFwqcW3BCEse3T-sTX2_zCBpkQkiOsh8LpLVap0PQ2KAGi2FqPCoE365CpiwChWTYEHF3V45dSYN2pBjLiu_Rptz_XlRJhF2Qnb6AA7bxCSdWuLYhmW_QoQUw_0DXIy78sYxPWClHNF2pIUN0Qxy_aBycA6qAFPEjx4c6opMDoMXuU',
            },
            {
              title: 'Skincare',
              subtitle: 'Organic glow',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKo8G-mgBqsJa551uvAbq3T7ZBoAlwxBWGsoZ6YNKiBa6WTIv_ze_7OXIvISoFjKCeLCWVCNYvgNTP0dVlljfBnVCEi7ORHWLR1P58aIxT51fxUtPQaAVjuqE0bVDH66kU_pXjpDrkKccfVR0NVTC0GUvfPcNPYyp2TATaftbH22ZAcMJ-6M0g90Cacj3adr3IJ0Hqjq81x1B5Y3vZw96o9T10p47RUsmEzp6CQ2ATMuh0TcfGcYEBgV8rfd_6-g0XpV8ktUoJgJg',
            },
            {
              title: 'Drink',
              subtitle: 'Premium spirits',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQjvLLNrKsW9zXgcZMAnLefPIe03EgcJymXava-n46rtoEsx9GMhtfyWxs-wax2dy-Fn4A8qtyRZAoqsFo8TQuW8vnS3JMnnpsKH7j0F5wm8wbSAJrfPWwQvmkkH2ZrEEQOt2TElsfFwLIqLEDJXUT09Vc7ewamlk2sCoLkFj2v8u1kbb-WrfaRGWnMVM4BNhCQzh2bUrPgTs2P2GcgBj8rf_809ZecZbvAOWzymRQHPdH54jWozb5pp0c4AwRcBOsq1UhlF_P9Us',
            },
            {
              title: 'Fashion',
              subtitle: 'New trends',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzbPq0Lu5IbFhGGh8eg_L5xmAjJSeeszlJpWDvbf1KyYCF6-36hAPfYaMPM_nWL9FjYOQxrf5RDTf7mJ_DTnxKyI5cx3uvJm807o4LQVtwOmxCiwMuOYL2KsOkx_Y5IygIPBO7gAuab40URLPf8Dbz4lxEeC--hRvcGW_Ic9EkcXI71G5TvBYk2vRD8lMApfAgHiWvyORA-BtGxKasDA6iqctPLE9j-He2d4axmCJaelMEQ2Er-BLvJPfBU0fp24tNXfs9BAk7whA',
            },
            {
              title: 'Gadget',
              subtitle: ' Smart tech',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82HPbSXjnMPVOs8hvspEKrIvD_jWSrDFlDGxvZMIOhj8wKKkmE08u7v_QslDjV4_KPkGXFGBvzajX7g1WV4MeHArkD9_A91FXw8GtzrgAJCLGELm5E2YHyDg5sW1Rt5PRcZtZacFML5iC80kiLYU6C8yHxCdfJWHp2F7hXDiCCC5Q3QFaml4gWyVTzD3JUzPT-hTRBQY6D09xA-SfKUzWC8mUMRrpugsDkLr2dwNED-sxWYg8JeaUw-yAAan1b5n_XagXyCPh6s0',
            },
            {
              title: 'Hair',
              subtitle: 'Styling & Care',
              img: 'https://img.grouponcdn.com/seocms/43RYZ77uFqFrveh7Zquw2jRVtqYK/hero_png-600x390',
            },
          ]"
          :key="i"
          @click="goToCategory(item.title)"
          class="relative group cursor-pointer aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transition-transform active:scale-[0.96]"
        >
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${item.img})` }"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          />
          <div class="absolute bottom-0 left-0 right-0 p-3 glass-panel">
            <p class="text-white text-lg font-bold">{{ item.title }}</p>
            <p
              class="text-white/70 text-[10px] uppercase tracking-wider font-semibold"
            >
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Bottom Nav -->
    <nav
      class="fixed bottom-0 left-0 right-0 z-50 ios-tab-bar border-t border-white/10 px-6 pb-8 pt-3"
    >
      <div class="flex justify-between items-center mx-auto">
        <button class="flex flex-col items-center gap-1 text-primary">
          <Icon icon="mdi:view-grid" class="text-xl" />
          <span class="text-[10px] font-bold">Categories</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:shopping" class="text-xl" />
          <span class="text-[10px] font-medium">Stores</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:bookmark-outline" class="text-xl" />
          <span class="text-[10px] font-medium">Saved</span>
        </button>

        <button class="flex flex-col items-center gap-1 text-gray-500">
          <Icon icon="mdi:bell-outline" class="text-xl" />
          <span class="text-[10px] font-medium">Updates</span>
        </button>
      </div>
    </nav>
  </body>
</template>

<script setup>
import { useRouter } from "vue-router";
import {useStore} from '@/store'

const router = useRouter();
const {app} = useStore()

const toRoute = (title) => {
  return title.toLowerCase().trim().replace(/\s+/g, "-");
};

const goToCategory = (title) => {
  router.push(`/${toRoute(title)}`);
};
</script>

<style scoped>
.create-store-card {
  background: linear-gradient(
    135deg,
    rgba(91, 19, 236, 0.4),
    rgba(91, 19, 236, 0.1)
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(91, 13, 236, 0.3);
}
</style>
