<template>
  <div class="flex items-center">
    <input
      :id="'checkbox-item-' + props.genreobj.genreid"
      type="checkbox"
      v-model="props.genreobj.checked"
      class="rounded- h-4 w-4 rounded-3xl border-gray-300 bg-gray-100 text-purple-600 accent-purple-700 focus:ring-2 focus:ring-purple-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-purple-600 dark:focus:ring-offset-gray-700"
    />
    <label
      :for="'checkbox-item-' + props.genreobj.genreid"
      class="ml-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ props.genreobj.name }}
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['genreobj']);
</script>

<style lang="scss" scoped></style>
