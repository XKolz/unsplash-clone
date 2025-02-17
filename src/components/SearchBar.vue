<template>
  <div class="search-container">
    <div class="search-bar">
      <img
        src="@/assets/search-icon.svg"
        alt="Search"
        class="search-icon"
        :class="{ hidden: query.length > 0 }"
      />
      <input
        v-model="query"
        type="text"
        placeholder="Search for photo"
        @keyup.enter="search"
      />
      <button @click="search">Search</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);
const query = ref("");

const search = () => {
  if (query.value.trim()) {
    emit("search", query.value);
  }
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

button img {
  width: 20px;
}
</style>
