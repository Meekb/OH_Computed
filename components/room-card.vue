<template>
  <div class="result-card">
    <div>
      <h3 class="room-card-heading">
        <!-- <button type=submit @click="setSelection" class="book-btn">See</button> -->
        <button @click="show">Show Details</button>
      <label>
        {{ type }} #{{ roomNumber }}
      </label>
      </h3>
      <p>{{ beds }} {{ numBeds }}</p>
      <p>${{ costPerNight }}</p>
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
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      roomImgType: this.type,
    }
  },
  computed: {
    costPerNight() {
      return `${this.cost.toFixed(2)} per night. Total includes tax.`
    },
    numBeds() {
      return this.beds > 1 ? this.bedSize + " bed\'s" : this.bedSize + " bed"
    },
    // source() {
    //   const type = this.type
    //   if (type === 'residential suite') {
    //     return "../static/residential-suite.jpeg"
    //   } else if (type === 'junior suite') {
    //     return "../static/queen.jpeg"
    //   } else {
    //     return "../static/single_room.jpeg"
    //   }
    // }
  },
  methods: {
    setSelection() {
      this.$emit('selection', {
        room: this.roomNumber,
        cost: this.cost
      })
    },
    show() {
      this.showModal = true
      this.$emit('show', this.showModal)
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
  display: flex;
  justify-content: space-evenly;
}
.book-btn{
  font-size: 16px;
  font-weight: bold;
  border-radius: 1rem;
  margin-right: 5px;
}
</style>