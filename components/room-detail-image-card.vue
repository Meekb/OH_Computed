<template>
  <div class="detail-image-container">
    <img :src="imageUrl" class="detail-room-image" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.detail-image-container {
  
}
.detail-room-image {
  border: 3px solid #660000;
  border-radius: 1rem;
}
</style>
