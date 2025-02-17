import { ref } from "vue";
import axios from "axios";

export function usePhotos() {
  const photos = ref([]);
  const loading = ref(false);
  const noResults = ref(false);
  const searchQuery = ref("");

  const fetchPhotos = async (query = "africa") => {
    loading.value = true;
    noResults.value = false;
    searchQuery.value = query;

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=9`,
        {
          headers: {
            Authorization: `Client-ID ${
              import.meta.env.VITE_UNSPLASH_ACCESS_KEY
            }`,
          },
        }
      );
      photos.value = response.data.results;
      noResults.value = response.data.results.length === 0;
    } catch (error) {
      console.error("Error fetching photos:", error);
      noResults.value = true;
    } finally {
      loading.value = false;
    }
  };

  const searchPhotos = (query) => {
    fetchPhotos(query);
  };

  const resetSearch = () => {
    searchQuery.value = "";
    noResults.value = false;
    fetchPhotos(); // Reload initial images
  };

  return {
    photos,
    loading,
    noResults,
    searchQuery,
    fetchPhotos,
    searchPhotos,
    resetSearch,
  };
}
