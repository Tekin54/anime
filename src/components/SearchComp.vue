<template>
  <div>
    <div class="">
      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="input"
            @keyup="filtgenre(input)"
            class="block w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
            placeholder="Search Naruto, Berserk..."
            required
          />
          <button
            type="submit"
            class="absolute bottom-2.5 right-2.5 rounded-xl bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import useAnimeStore from '../stores/animesStore.js';
import usecheckboxStore from '../stores/checkboxStore.js';
import { ref } from 'vue';
const animesStore = useAnimeStore();
const checkboxStore = usecheckboxStore();
let input = ref('');
const filtgenre = (input) => {
  //Liste von den genres, die true bei checked haben.
  let genrearray = checkboxStore.checkboxes.filter((x) => x.checked == true).map((x) => x.genreid);
  console.log('genrearray');
  console.log(genrearray);
  //Überprüfung, wenn keine Eingabe oder checkbox angeklickt
  if (!input && genrearray.length === 0) {
    animesStore.animeList = animesStore.animeList_backup;
  } else {
    if (genrearray.length > 0) {
      animesStore.animeList = animesStore.animeList_backup.filter((x) =>
        genrearray.some((y) => y == x.genreid),
      );
    }
    animesStore.animeList = animesStore.animeList.filter((x) => {
      return x.name.toLowerCase().includes(input.toLowerCase());
    });
  }
};
</script>

<style lang="scss" scoped></style>
