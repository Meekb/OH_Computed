<template>
  <div class="result-card">
    <h3 class="room-card-heading">
      <input type=radio name="roomNumber" @change="setSelection" :disabled="activeSelection"/>
    <label>
      Book {{ type }} #{{ roomNumber }}
    </label>
    </h3>
    <p>{{ beds }} {{ numBeds }}</p>
    <p>${{ costPerNight }}</p>
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
      type: Number,
      default: null,
    },
    beds: {
      type: Number,
      default: null,
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
  data() {
    return {
      activeSelection: false,
    }
  },
  computed: {
    costPerNight() {
      return `${this.cost.toFixed(2)} per night. Total includes tax.`
    },
    numBeds() {
      return this.beds > 1 ? this.bedSize + " bed\'s" : this.bedSize + " bed"
    },
  },
  methods: {
    setSelection() {
      this.activeSelection = true
      this.$emit('selection', this.roomNumber)
    }
  },
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