<template>
  <div class="app">
    <SearchBar @search="searchPhotos" @reset="resetSearch" />

    <NoResults v-if="noResults" :query="searchQuery" />

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
import SearchBar from "./components/SearchBar.vue";
import ImageGrid from "./components/ImageGrid.vue";
import ImageModal from "./components/ImageModal.vue";
import NoResults from "./components/NoResults.vue";
import { usePhotos } from "./composables/usePhotos";

const selectedPhoto = ref(null);
const {
  photos,
  loading,
  noResults,
  searchQuery,
  fetchPhotos,
  searchPhotos,
  resetSearch,
} = usePhotos();

const openModal = (photo) => (selectedPhoto.value = photo);

onMounted(() => fetchPhotos());
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
