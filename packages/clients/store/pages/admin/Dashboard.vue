<template>
  <main class="text-white min-h-screen flex flex-col pb-28">
    <!-- HEADER -->
    <header
      class="sticky top-0 z-50 px-6 py-5 flex items-center justify-between bg-background-dark/60 backdrop-blur-xl"
    >
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-primary/50 to-transparent">
          <img
            alt="Store Logo"
            class="w-full h-full rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdUHSivPUhBnqHzprxpHOyHRslxPqm0ZAc33NS9dzHz1KlYgzhFFhZlZjojeJvMs_o7_L_cpi6ibx5tZV1L0j1queB9NHQENYglTlntnv273-BI9B6En79qJQ5btdgB_FxoVav4dx3OpUENwOFJQtPkRD_-9imqcNTWixNDFET7om3IKJGCo5NCBO-kCoqe47R-T8qBtl_q7_KqvhuNj4I77s_IIEusLlWXGCb3Qltu-8nuRw4LHgEyThkmcn5D7uzZ2Q5GmM6l8M"
          />
        </div>
        <div>
          <h1 class="text-xs font-bold text-white/40 uppercase tracking-widest leading-none mb-1">
            Store Owner
          </h1>
          <p class="text-xl font-bold text-white tracking-tight capitalize">
            {{ app.name }} Dashboard
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button class="w-10 h-10 flex items-center justify-center rounded-full glass-card">
          <Icon icon="mdi:magnify" class="text-white text-xl" />
        </button>

        <button class="w-10 h-10 flex items-center justify-center rounded-full glass-card relative">
          <Icon icon="mdi:bell-outline" class="text-white text-xl" />
          <span
            class="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background-dark"
          />
        </button>
      </div>
    </header>

    <!-- CONTENT -->
    <main class="flex-1 px-6 pt-4 space-y-8">
      <!-- STATS -->
      <section>
        <div class="glass-card rounded-3xl p-6 relative overflow-hidden shadow-2xl">
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
          <div class="grid grid-cols-3 gap-2 relative z-10">
            <div class="flex flex-col border-r border-white/10 pr-2">
              <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-2">
                Total Sales
              </span>
              <span class="text-2xl font-bold">$12.4k</span>
              <div class="flex items-center gap-1 mt-2 text-primary">
                <Icon icon="mdi:trending-up" class="text-xs" />
                <span class="text-[10px] font-bold">+14%</span>
              </div>
            </div>

            <div class="flex flex-col border-r border-white/10 px-4">
              <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-2">
                Active
              </span>
              <span class="text-2xl font-bold">24</span>
              <span class="text-[10px] font-bold text-white/40 mt-2">Orders</span>
            </div>

            <div class="flex flex-col pl-4">
              <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-2">
                Views
              </span>
              <span class="text-2xl font-bold">1.8k</span>
              <div class="flex items-center gap-1 mt-2 text-blue-400">
                <Icon icon="mdi:eye-outline" class="text-xs" />
                <span class="text-[10px] font-bold">Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTIONS -->
      <section>
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-xl font-bold tracking-tight">Store Actions</h2>
          <button class="text-primary text-sm font-semibold flex items-center gap-1">
            Edit Layout
            <Icon icon="mdi:pencil-outline" class="text-sm" />
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <button class="glass-card p-5 rounded-2xl flex flex-col gap-4">
            <div class="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <Icon icon="mdi:package-variant-closed" class="text-primary text-2xl" />
            </div>
            <div>
              <span class="block text-sm font-bold">Manage Inventory</span>
              <span class="text-[10px] text-white/40">142 Items</span>
            </div>
          </button>

          <button class="glass-card p-5 rounded-2xl flex flex-col gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center">
              <Icon icon="mdi:chart-line" class="text-blue-400 text-2xl" />
            </div>
            <div>
              <span class="block text-sm font-bold">Analytics</span>
              <span class="text-[10px] text-white/40">Growth +8.2%</span>
            </div>
          </button>

          <button class="glass-card p-5 rounded-2xl flex flex-col gap-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center">
              <Icon icon="mdi:bullhorn-outline" class="text-purple-400 text-2xl" />
            </div>
            <div>
              <span class="block text-sm font-bold">Promotions</span>
              <span class="text-[10px] text-white/40">2 Active</span>
            </div>
          </button>

          <button class="glass-card p-5 rounded-2xl flex flex-col gap-4">
            <div class="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <Icon icon="mdi:cog-outline" class="text-amber-400 text-2xl" />
            </div>
            <div>
              <span class="block text-sm font-bold">Store Settings</span>
              <span class="text-[10px] text-white/40">General & SEO</span>
            </div>
          </button>
        </div>
      </section>
    </main>

    <!-- TAB BAR -->
    <nav class="fixed bottom-0 left-0 right-0 ios-tab-bar px-6 pt-3 pb-4 z-50">
      <div class="grid grid-cols-5 items-end text-center">
        <button class="flex flex-col items-center gap-1.5 text-primary translate-y-1">
          <Icon icon="mdi:view-dashboard-outline" />
          <span class="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>

        <button class="flex flex-col items-center gap-1.5 text-white/40 translate-y-1">
          <Icon icon="mdi:receipt-text-outline" />
          <span class="text-[10px] font-bold uppercase tracking-widest">Orders</span>
        </button>

        <div class="relative flex justify-center">
          <button
            @click="isAddProductVisible = true"
            class="w-16 h-16 -mt-6 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-2xl ring-[6px] ring-background-dark"
          >
            <Icon icon="mdi:plus" class="text-3xl" />
          </button>
        </div>

        <button class="flex flex-col items-center gap-1.5 text-white/40 translate-y-1">
          <Icon icon="mdi:grid" />
          <span class="text-[10px] font-bold uppercase tracking-widest">Catalog</span>
        </button>

        <button class="flex flex-col items-center gap-1.5 text-white/40 translate-y-1">
          <Icon icon="mdi:storefront-outline" />
          <span class="text-[10px] font-bold uppercase tracking-widest">Store</span>
        </button>
      </div>
    </nav>

    <AddProduct v-if="isAddProductVisible" @close="isAddProductVisible = false" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store'
import AddProduct from '../../components/AddProduct.vue'

const { app } = useStore()
const isAddProductVisible = ref(false)
</script>
