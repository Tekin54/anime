import { defineStore } from 'pinia';
import { ref } from 'vue';
import useAnimeStore from './animesStore.js';

const animesStore = useAnimeStore();

const useCheckboxStore = defineStore('checkboxId', () => {
  let checkboxes = ref([
    { name: 'drama', genreid: 1, checked: ref(false) },
    { name: 'action', genreid: 2, checked: ref(false) },
    { name: 'romance', genreid: 3, checked: ref(false) },
    { name: 'comedy', genreid: 4, checked: ref(false) },
    { name: 'scifi', genreid: 5, checked: ref(false) },
    { name: 'fantasy', genreid: 6, checked: ref(false) },
    { name: 'sclifeoflife', genreid: 7, checked: ref(false) },
  ]);
  const checkboxesbackup = ref([
    { name: 'drama', genreid: 1, checked: ref(false) },
    { name: 'action', genreid: 2, checked: ref(false) },
    { name: 'romance', genreid: 3, checked: ref(false) },
    { name: 'comedy', genreid: 4, checked: ref(false) },
    { name: 'scifi', genreid: 5, checked: ref(false) },
    { name: 'fantasy', genreid: 6, checked: ref(false) },
    { name: 'sclifeoflife', genreid: 7, checked: ref(false) },
  ]);
  const updateCheckbox = (id) => {
    const index = checkboxes.value.indexOf(checkboxes.value.find((x) => x.genreid === id));
    checkboxes.value[index].checked = !checkboxes.value[index].checked;
  };
  const removefilter = () => {
    animesStore.animeList = animesStore.animeList_backup;
    checkboxes.value = checkboxesbackup.value; // Änderung hier
  };

  return { checkboxes, checkboxesbackup, updateCheckbox, removefilter };
});

export default useCheckboxStore;
