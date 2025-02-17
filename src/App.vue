<template>
  <div class="app">
    <SearchBar @search="searchPhotos" @reset="resetSearch" />

    <div v-if="noResults" class="no-results">
      <img src="@/assets/no-results.svg" alt="No results found" />
      <h2>No results found for "{{ searchQuery }}"</h2>
      <p>Try adjusting your search terms...</p>
    </div>

    <!-- Image Grid (Shows skeleton when loading) -->
    <ImageGrid :photos="photos" :loading="loading" @image-click="openModal" />

    <!-- Image Modal -->
    <ImageModal
      v-if="selectedPhoto"
      :photo="selectedPhoto"
      @close="selectedPhoto = null"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import ImageGrid from "./components/ImageGrid.vue";
import ImageModal from "./components/ImageModal.vue";

const photos = ref([]);
const loading = ref(false);
const selectedPhoto = ref(null);
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

const openModal = (photo) => (selectedPhoto.value = photo);

onMounted(() => fetchPhotos());
</script>

<style scoped>
.app {
  text-align: center;
}

.no-results {
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.no-results img {
  width: 200px;
  margin-bottom: 20px;
  opacity: 0.8;
}

.no-results h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
}

.no-results p {
  color: #666;
  margin-bottom: 24px;
}

.browse-button {
  background: #0073e6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.browse-button:hover {
  background: #0066cc;
}
</style>
