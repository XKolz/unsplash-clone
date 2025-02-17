<template>
  <div class="no-results">
    <img src="@/assets/no-results.svg" alt="No results found" />
    <h2>No results found for "{{ query }}"</h2>
    <p>Try adjusting your search terms...</p>
  </div>
</template>

<script setup>
defineProps({
  query: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
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
</style>
