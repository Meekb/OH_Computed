<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>Roomtype Number Blah!</h6>
      <p>Room Details Here</p>
      <button @click="closeModal">Go Home</button>
    </div>
    <div class="close">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
      this.$emit('close', this.showModal)
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
