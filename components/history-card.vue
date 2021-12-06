<template>
  <div class="card-container">
    <div class="history-card">
      <h3>
        {{ typeCaseRoom }} #{{ roomNumber }}
      </h3>
      <p>
        {{ date }}
      </p>
      <p>
        {{ numBeds }} {{ typeCaseBed }} {{ formatBeds }}
      </p>
      <p v-if="bidet">
        This room includes a bidet!
      </p>
      <p>
        Total: ${{ cost }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: null,
    },
    roomNumber: {
      type: Number,
      default: null,
    },
    roomType: {
      type: String,
      default: '',
    },
    bedSize: {
      type: String,
      default: '',
    },
    bidet: {
      type: Boolean,
      default: false,
    },
    numBeds: {
      type: Number,
      default: null,
    },
    cost: {
      type: Number,
      default: null,
    },
  },
  computed: {
    typeCaseRoom() {
      const roomType = this.roomType + ''
      const formattedRoom = roomType.split('').map((l, i) => {
        if (!i) {
          return l.toUpperCase()
        } else {
          return l
        }
      })
      return formattedRoom.join('')
    },
    typeCaseBed() {
      const bedSize = this.bedSize + ''
      const formattedSize = bedSize.split('').map((l, i) => {
        if (!i) {
          return l.toUpperCase()
        } else {
          return l
        }
      })
      return formattedSize.join('')
    },
    formatBeds() {
      if (this.numBeds > 1) {
        return "beds"
      } else {
        return "bed"
      }
    },
  }
}
</script>

<style scoped>
.history-card {
  border: 2px solid black;
  border-radius: 0.5rem;
  margin: 5px 15px 15px 15px;
  background-color: #FFFACD;
  color: black;
}
p {
  font-weight: 600;
}
</style>