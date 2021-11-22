<template>
  <div class="rooms-container">
    <div v-if="!isSearching" class="room-images">
      <div class="res-container">
        <NuxtLink to="/residential-suite">
          <img
            src="../static/residential_suite.jpeg"
            alt="Overlook Residential Suite"
            class="res-suite"
          />
        </NuxtLink>
          <p>
            Residential Suite
          </p>
      </div>
      <div class="queen-container">
        <NuxtLink to="/queen-quarters">
        <img
          src="../static/queen.jpeg"
          alt="Overlook Queen"
          class="queen"
        />
        </NuxtLink>
        <p>
          Queen Quarters
        </p>
      </div>
      <div class="single-container">
        <NuxtLink to="/single-room">
        <img
          src="../static/single_room.jpeg"
          alt="Overlook Single"
          class="single"
        />
        </NuxtLink>
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

<style>
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