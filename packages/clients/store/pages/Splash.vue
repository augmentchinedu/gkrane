<template>
  <splash></splash>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useStore } from "@/store";

const { app } = useStore();

const type = app.type; // could come from server, username, or host
const Splash = defineAsyncComponent(() =>
  import(`../views/${type}/Splash.vue`)
);
</script>
