<template>
  <div class="result-card">
    <SavedModal v-show="showModal" :details="{roomNumber, typeOfRoom, bedSize, beds, cost, bidet}" @close="closeModal" @selection="setSelection" />
    <div>
      <h3 class="room-card-heading">
        <!-- <button type=submit @click="setSelection" class="book-btn">See</button> -->
      <p>
        {{ typeOfRoom }} #{{ roomNumber }}
      </p>
      <button class="details-btn" @click="show">See Details</button>
      </h3>
      <!-- <p>{{ beds }} {{ numBeds }}</p>
      <p>${{ costPerNight }}</p> -->
    </div>
    <div>
      <img v-show="this.roomImgType === 'residential suite'" src="../static/residential-suite.jpeg" style="width: 15vw; border-radius: 1rem;" />
      <img v-show="this.roomImgType === 'suite'" src="../static/queen.jpeg" style="width: 15vw; border-radius: 1rem;" />
      <img v-show="this.roomImgType === 'single' || this.roomImgType === 'junior suite'" src="../static/single_room.jpeg" style="width: 15vw; border-radius: 1rem;" />
    </div>
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
      roomImgType: this.type,
      showModal: false,
    }
  },
  computed: {
    costPerNight() {
      return `${this.cost.toFixed(2)} per night. Total includes tax.`
    },
    numBeds() {
      return this.beds > 1 ? this.bedSize + " bed\'s" : this.bedSize + " bed"
    },
    typeOfRoom() {
      const text = this.type;
      return text.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    },
  },
  methods: {
    setSelection(payload) {
      // console.log('room card rec payload', payload)
      this.$emit('selection', payload)
    },
    show() {
      this.showModal = true
      this.$emit('show', this.showModal)
    },
    closeModal() {
      this.showModal = false
    }
  },
}
</script>

<style scoped>
.result-card {
  /* background-color: #FFFACD; */
  width: 25vw;
  border: 2px solid black;
  margin: 10px 10px 10px 10px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
}
.details-btn{
  background-color: #660000;
  color: #FFFACD;
  font-size: 16px;
  font-weight: bold;
  border-radius: 1rem;
  margin-right: 5px;
}
</style>