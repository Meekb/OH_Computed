<template>
  <div class="rooms-container">
    <div v-show="selected" class="room-images">
      <p>TEST</p>
    </div>
    <div class="room-results">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.rooms-container {
  display: flex;
  flex-direction: column;
}
.room-images {
  display: flex;
}
.room-results {
  display: flex;
}
</style>