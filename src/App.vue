<template>
  <div class="min-h-screen dark:bg-gray-950">
    <div class="container mx-auto text-center">
      <div class="pt-6"><NavbarComp></NavbarComp></div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue';
import { RouterView } from 'vue-router';
import UsemodeStore from '../src/stores/modeStore.js';
const modeStore = UsemodeStore();
</script>

<style>
.body {
  @apply bg-gray-950;
}
</style>
