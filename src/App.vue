<template>
  <div class="app">
    <SearchBar @search="searchPhotos" />
    <ImageGrid :photos="photos" :loading="loading" @image-click="openModal" />
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

const fetchPhotos = async (query = "africa") => {
  loading.value = true;
  try {
    const response = await axios.get(
      // `https://api.unsplash.com/photos/random?query=${query}&count=8`,
      `https://api.unsplash.com/search/photos?query=${query}&per_page=9`,
      {
        headers: {
          Authorization: `Client-ID ${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`,
        },
      }
    );
    // photos.value = response.data;
    photos.value = response.data.results;
    console.log("photos", photos.value);
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    loading.value = false;
  }
};

const searchPhotos = (query) => fetchPhotos(query);
const openModal = (photo) => (selectedPhoto.value = photo);

onMounted(() => fetchPhotos());
</script>

<style scoped>
.app {
  /* padding: 20px; */
  text-align: center;
}
</style>
