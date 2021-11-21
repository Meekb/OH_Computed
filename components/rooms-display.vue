<template>
  <div class="rooms-container">
    <div v-if="!isSearching" class="room-images">
      <div class="res-container">
        <img
          src="../static/residential_suite.jpeg"
          alt="Overlook Residential Suite"
          class="res-suite"
        />
        <p>
          Residential Suite
        </p>
      </div>
      <div class="queen-container">
        <img
          src="../static/queen.jpeg"
          alt="Overlook Queen"
          class="queen"
        />
        <p>
          Queen Room
        </p>
      </div>
      <div class="single-container">
        <img
          src="../static/single_room.jpeg"
          alt="Overlook Single"
          class="single"
        />
        <p>
          Single Room
        </p>
      </div>
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
    },
    roomType: {
      type: String,
      default: '',
    },
    checkinInput: {
      type: String,
      default: '',
    },
    isSearching: {
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
  margin-top: 95px;
}
.room-images {
  display: flex;
}
.room-results {
  display: flex;
}
.res-suite,
.queen,
.single {
  border: 2px solid #660000;
  border-radius: 1rem;
  width: 300px;
  margin-left: 40px;
}
.res-suite:hover,
.queen:hover,
.single:hover {
  border: 2px solid lime;
}
.res-container,
.queen-container,
.single-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>