<template>
  <div class="min-h-screen text-white flex">
    <!-- Main content -->
    <section class="flex-1 p-6 space-y-6">
      <NavBar />

      <!-- Top Stats -->
      <!-- TopStats.vue -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Amounts" value="Sum 0" color="bg-red-600" />
        <StatCard
          title="Total Purchase Prices"
          value="Sum 0"
          color="bg-red-700"
        />
        <StatCard
          title="Total Current Equity Values"
          value="Sum 0"
          color="bg-green-600"
        />
        <StatCard
          title="Average Percentage Ownerships"
          value="Avg 0"
          color="bg-blue-600"
        />
      </div>

      <div>
        <h4 class="text-sm mb-2 text-neutral-400">Available Statuses</h4>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatusCard label="Occupied" />
          <StatusCard label="Available" />
          <StatusCard label="Reserved" />
          <StatusCard label="Total" />
        </div>
      </div>

      <div>
        <h4 class="text-sm mb-3 text-neutral-400">Quick Links</h4>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <QuickLink label="Add New Business Suite" />
          <QuickLink label="Add New Rental Income" />
          <QuickLink label="Add New Fractional Ownership" />
          <QuickLink label="Add New Plaza Project" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="Equity Appreciation by Market Value" />
        <ChartCard title="Purchase Price by Current Equity Value" />
      </div>
    </section>
  </div>
</template>

<script setup>
import StatCard from "./components/StatCard.vue";
import StatusCard from "./components/StatusCard.vue";
import QuickLink from "./components/QuickLink.vue";
import ChartCard from "./components/ChartCard.vue";
</script>

<script>
export const meta = {
  auth: true,
};
</script>
