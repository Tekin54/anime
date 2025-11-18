import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAnimeStore = defineStore('AnimeId', () => {
  const animeList = ref([
    { name: 'Sao', id: 1, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Pso', id: 2, genreid: 2, img: 'mainimage.jpg' },
    { name: 'Eureka Seven', id: 3, genreid: 3, img: 'profile_mag-maxwidth-1280.avif' },
    { name: 'NHK', id: 4, genreid: 4, img: 'Welcome_to_the_NHK.webp' },
    { name: 'Re zero', id: 5, genreid: 5, img: 'Sword_Art_Online.webp' },
    { name: 'Gankutsuou', id: 6, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Castlevania', id: 7, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Attack on titan', id: 8, genreid: 1, img: 'Sword_Art_Online.webp' },
  ]);
  const animeList_backup = ref([
    { name: 'Sao', id: 1, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Pso', id: 2, genreid: 2, img: 'mainimage.jpg' },
    { name: 'Eureka Seven', id: 3, genreid: 3, img: 'profile_mag-maxwidth-1280.avif' },
    { name: 'NHK', id: 4, genreid: 4, img: 'Welcome_to_the_NHK.webp' },
    { name: 'Re zero', id: 5, genreid: 5, img: 'Sword_Art_Online.webp' },
    { name: 'Gankutsuou', id: 6, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Castlevania', id: 7, genreid: 1, img: 'Sword_Art_Online.webp' },
    { name: 'Attack on titan', id: 8, genreid: 1, img: 'Sword_Art_Online.webp' },
  ]);
  const noresult_text = ref('');
  const input = ref('');

  return { animeList, animeList_backup, noresult_text, input };
});

export default useAnimeStore;
