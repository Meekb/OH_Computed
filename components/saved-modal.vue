<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>{{ roomTypeDisplay }} #{{ roomNumber }}</h6>
      <p>{{ bedSituation }}</p>
      <p>{{ bidetSituation }}</p>
      <p>${{ costOfRoom }} per night, with tax</p>
      <button @click="setSelection">Book</button>
      <button @click="closeModal">Close</button>
    </div>
    <div class="close">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bedSize: {
      type: String,
      default: '',
    },
    cost: {
      type: Number,
      default: null,
    },
    roomNumber: {
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
      roomNumber: this.$attrs.details.roomNumber,
      price: this.$attrs.details.cost,
    }
  },
  computed: {
    roomTypeDisplay() {
      return this.$attrs.details.typeOfRoom
    },
    roomNumber() {
      return this.$attrs.details.roomNumber
    },
    costOfRoom() {
      return this.$attrs.details.cost
    },
    bidetSituation() {
      return this.$attrs.details.bidet ? 'Luxury bath with bidet' : 'Luxury bath'
    },
    bedSituation() {
      return this.$attrs.details.beds > 1 ?

        `${this.$attrs.details.beds} ${this.$attrs.details.bedSize.charAt(0).toUpperCase()
        + this.$attrs.details.bedSize.slice(1)} beds`

        : `${this.$attrs.details.beds} ${this.$attrs.details.bedSize.charAt(0).toUpperCase()
        + this.$attrs.details.bedSize.slice(1)} bed`
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    setSelection() {
      this.closeModal()
      this.$emit('selection', {
        room: this.roomNumber,
        cost: this.price
      })
    },
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  font-size: 16px;
  margin: 20px 0;
}
button {
  background-color: #660000;
  color: #FFFACD;
  width: 150px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 1rem;
  margin-top: 50px;
}
</style>
