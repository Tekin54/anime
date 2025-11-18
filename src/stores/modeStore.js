import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const useModeStore = defineStore('DefaultId', () => {
  const isDark = ref(useDark());
  const toggleDark = useToggle(isDark);

  return { isDark, toggleDark };
});

export default useModeStore;
