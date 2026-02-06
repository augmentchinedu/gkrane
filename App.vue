<template>
  <div id="main" class="min-h-dvh w-full flex relative">
    <SideBar />

    <RouterView class="w-full" />

    <BottomNavigation />
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
</script>
