<template>
  <div class="search-container">
    <div v-if="!searchPerformed" class="search-bar">
      <img
        src="@/assets/search-icon.svg"
        alt="Search"
        class="search-icon"
        :class="{ hidden: query.length > 0 }"
      />
      <input
        v-model="query"
        type="text"
        placeholder="Search for a photo"
        @keyup.enter="search"
      />
      <button @click="search">Search</button>
    </div>
    <div v-else class="search-results-header">
      <button class="back-button" @click="resetSearch">←</button>
      <h2>
        Search Results for "<span>{{ query }}</span
        >"
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search", "reset"]);
const query = ref("");
const searchPerformed = ref(false);

const search = () => {
  if (query.value.trim()) {
    searchPerformed.value = true;
    emit("search", query.value);
  }
};

const resetSearch = () => {
  searchPerformed.value = false;
  query.value = "";
  emit("reset");
};
</script>

<style scoped>
.search-container {
  background: #e0e4e7;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  padding: 10px 20px;
  width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.search-icon {
  width: 20px;
  position: absolute;
  left: 15px;
  transition: opacity 0.2s ease-in-out;
}

.hidden {
  opacity: 0;
}

input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px 10px 10px 40px;
  width: 100%;
  background: transparent;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.search-results-header {
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.search-results-header h2 {
  font-weight: bold;
}

.search-results-header span {
  color: #0073e6;
}

.back-button {
  background: black;
  border-radius: 50%;
  height: 30px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  margin-right: 10px;
}
</style>
