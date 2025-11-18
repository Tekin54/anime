<template>
  <div class="relative my-[20px]">
    <div class="h-[0px] pb-[133.33%] relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-700">
      <img
        class="absolute inset-0 h-full w-full  object-cover"
        :src="`/img/${props.anime.img}`"
        alt="Bild"
      />
      <span
        class="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-purple-400 bg-opacity-75 p-2 text-center text-gray-700 dark:text-white"
      >
        {{ props.anime.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import useAnimeStore from '../stores/animesStore.js';
const animesStore = useAnimeStore();
const props = defineProps({ anime: Object });
</script>

<style lang="scss" scoped></style>
