<template>
  <div class="modal" @click.self="$emit('close')">
    <!-- Close Button -->
    <button class="close-btn" @click="$emit('close')">×</button>
    <div class="modal-content">
      <!-- Image -->
      <img
        :src="photo.urls.regular"
        :alt="photo.alt_description"
        class="modal-image"
      />

      <!-- Photo Details -->
      <div class="photo-info">
        <p class="name">{{ photo.user.name }}</p>
        <p class="location">{{ photo.user.location || "Unknown location" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ photo: Object });
</script>

<style scoped>
/* Modal Background */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  position: relative;
  background: white;
  width: 70%;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Image Styling */
.modal-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

/* Info Section */
.photo-info {
  padding: 15px;
  background: white;
  border-top: 1px solid #ddd;
}

.name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.location {
  font-size: 14px;
  color: #777;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}
.close-btn svg {
  width: 24px;
  height: 24px;
  fill: white !important; /* Explicitly set white fill */
}
</style>
