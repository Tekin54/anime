<template>
  <div
    class="mx-3 mb-12 flex grid-cols-3 justify-center rounded-full bg-gray-200 px-10 py-6 pt-6 dark:bg-gray-700 sm:grid"
  >
    <RouterLink class="flex items-center" to="/">
      <Icon icon="logos:vue" class="mr-2 h-auto w-12" />
      <span class="hidden font-extrabold dark:text-white sm:block sm:text-xl">Vue Template</span>
    </RouterLink>
    <nav class="flex items-center justify-center text-xl text-gray-900 dark:text-white">
      <RouterLink
        to="/"
        class="decoration-purple-30 mr-5 rounded-xl px-5 decoration-purple-300 underline-offset-8 focus:font-extrabold focus:text-purple-500"
        >Home
      </RouterLink>
      <RouterLink
        to="/animes"
        class="decoration-purple-30 mr-5 rounded-xl px-5 decoration-purple-300 underline-offset-8 focus:font-extrabold focus:text-purple-500 dark:decoration-purple-700"
      >
        Animes
      </RouterLink>
      <RouterLink
        to="/animes"
        class="decoration-purple-30 mr-5 rounded-xl px-5 decoration-purple-300 underline-offset-8 focus:font-extrabold focus:text-purple-500 dark:decoration-purple-700"
      >
        <button
          @click="modeStore.toggleDark()"
          class="bg-gray-600 px-4 py-2 text-white dark:bg-purple-700"
        >
          Dark Toggle
        </button>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
import UsemodeStore from '../stores/modeStore.js';
const modeStore = UsemodeStore();
</script>
