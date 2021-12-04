<template>
  <div class="result-card">
    <h3 class="room-card-heading">{{ type }} #{{ roomNumber }}</h3>
    <p>{{ beds }} {{ numBeds }}</p>
    <p>${{ costPerNight }}</p>
    <input type=radio />
    <label>Book this room</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    roomNumber: {
      type: Number,
      default: null,
    },
    bedSize: {
      type: String,
      default: '',
    },
    cost: {
      type: String,
      default: '',
    },
    beds: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    bidet: {
      type: Boolean,
      default: false,
    }, 
  },
  computed: {
    costPerNight() {
      return `${this.cost.toFixed(2)} per night. Total includes tax.`
    },
    numBeds() {
      return this.beds > 1 ? this.bedSize + "\'s" : this.bedSize
    },
  }
}
</script>

<style scoped>
.result-card {
  /* background-color: #FFFACD; */
  border: 2px solid black;
  margin: 10px 10px 10px 10px;
  padding: 25px;
}
</style>