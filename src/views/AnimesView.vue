<template>
  <div class="text-xl">
    <div class="grid grid-rows-1 gap-4">
      <GenreComp></GenreComp>
      <SearchComp></SearchComp>
      <div
        class="grid grid-cols-2 xl:gap-4 overflow-visible rounded-3xl shadow-2xl shadow-gray-950 dark:bg-gray-700 dark:shadow-gray-950 sm:grid-cols-3 lg:grid-cols-5"
      >
        <AnimeComp
          class="hover:scale-110' cursor-pointer p-3 transition delay-150 duration-300 ease-in-out hover:translate-y-[-10px]"
          v-for="a of animesStore.animeList"
          :key="a.id"
          :alt="a.name"
          :title="a.name"
          :anime="a"
        ></AnimeComp>
      </div>
    </div>
  </div>
</template>
<script setup>
import useDefaultStore from '@/stores/defaultStore.js';
import AnimeComp from '@/components/AnimeComp.vue';
import SearchComp from '@/components/SearchComp.vue';
import GenreComp from '@/components/GenreComp.vue';
import useAnimeStore from '../stores/animesStore.js';
import checkboxgenreComp from '@/components/checkboxgenreComp.vue';
import { ref } from 'vue';
const animesStore = useAnimeStore();
const store = useDefaultStore();
let isopen = ref(false);

let aa = [1, 2, 3, 4, 5, 6];
</script>
