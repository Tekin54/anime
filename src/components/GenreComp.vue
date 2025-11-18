<template>
  <div>
    <div class="relative">
      <div
        class="grid grid-cols-2 gap-3 rounded-3xl p-3 text-gray-700 dark:border-4 dark:border-purple-700 dark:bg-gray-700 dark:text-white sm:grid-cols-4 lg:grid-cols-7"
      >
        <div class="h-20 rounded-2xl bg-purple-700 font-bold">
          <button
            @click="isopen = !isopen"
            class="flex h-full w-full items-center justify-center rounded-2xl transition-all duration-300"
            :class="{ 'bg-purple-800': isopen }"
          >
            <span class="px-2">Genre</span>
            <Icon
              class="mt-1"
              icon="material-symbols:keyboard-arrow-down-rounded"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            ></Icon>
          </button>
        </div>
        <div
          class="relative h-20 rounded-2xl bg-purple-700 text-center text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <input
            class="absolute flex h-full w-full items-center justify-center rounded-2xl bg-inherit text-center"
            type="number"
            id="seasons"
            placeholder="Seasons"
            max="50"
          />
        </div>
        <transition name="fade">
          <div
            class="absolute left-0 top-[100px] z-10 w-full max-w-xs rounded-xl border-4 border-purple-700 bg-white shadow dark:bg-gray-700"
            v-if="isopen"
          >
            <div class="mx-auto max-h-56 max-w-xs">
              <ul class="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
                <li
                  class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  v-for="c of checkboxStore.checkboxes"
                  :key="c.genreid"
                >
                  <div class="overflow-hidden">
                    <checkboxgenreComp :genreobj="c" :checked="c.checked"></checkboxgenreComp>
                  </div>
                </li>
                <button @click="checkboxStore.removefilter()">Filter entfernen</button>
              </ul>
            </div>
          </div>
        </transition>
        <button
          @click="filtgenre(animesStore.input)"
          class="flex h-20 items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-900"
        >
          <span class="px-2 font-bold dark:text-white">Filter</span>
          <Icon class="mt-1" width="32" height="32" icon="material-symbols:filter-alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useAnimeStore from '../stores/animesStore.js';
import usecheckboxStore from '../stores/checkboxStore.js';
import UsemodeStore from '../stores/modeStore.js';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import checkboxgenreComp from '@/components/checkboxgenreComp.vue';
const modeStore = UsemodeStore();

const animesStore = useAnimeStore();
const checkboxStore = usecheckboxStore();
console.log(modeStore.isDark);
let isopen = ref(false);
let aa = [1, 2, 3, 4, 5, 6];
console.log('checkboxStore.checkboxes');
console.log(checkboxStore.checkboxes);
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
