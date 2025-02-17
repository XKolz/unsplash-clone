<template>
  <div class="image-grid">
    <div v-if="loading" class="skeleton-grid">
      <div v-for="n in 6" :key="n" class="skeleton"></div>
    </div>
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="image-card"
      @click="$emit('image-click', photo)"
    >
      <img :src="photo.urls.small" :alt="photo.alt_description" />
      <div class="overlay"></div>
      <div class="info">
        <p class="name">{{ photo.user.name }}</p>
        <p class="location">{{ photo.user.location || "Unknown location" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  photos: Array,
  loading: Boolean,
});
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Ensure 3 columns */
  gap: 20px;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}

.image-card {
  width: 100%; /* Fill the grid column */
  height: 320px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive Fix */
@media (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 images per row */
  }
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 image per row */
  }
}

.image-card:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.5)
  );
}

.info {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
}

.name {
  font-weight: bold;
}

.location {
  font-size: 14px;
}
</style>
