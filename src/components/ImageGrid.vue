<template>
  <div class="image-grid">
    <!-- Skeleton Loader -->
    <div v-if="loading" class="skeleton-grid">
      <div v-for="n in 6" :key="n" class="skeleton"></div>
    </div>

    <!-- Image Cards -->
    <div
      v-else
      v-for="(photo, index) in photos"
      :key="photo.id"
      class="image-card"
      :class="`span-${(index % 5) + 1}`"
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  grid-auto-flow: dense;
}

/* Skeleton Loader */
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 15px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  grid-auto-flow: dense;
}

.skeleton {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite linear;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Assign random row spans for a natural look */
.image-card {
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.image-card.span-1 {
  grid-row: span 25;
}
.image-card.span-2 {
  grid-row: span 30;
}
.image-card.span-3 {
  grid-row: span 20;
}
.image-card.span-4 {
  grid-row: span 35;
}
.image-card.span-5 {
  grid-row: span 25;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

/* Responsive Fix */
@media (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
