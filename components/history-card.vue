<template>
  <div class="card-container">
    <div class="history-card">
      <h3>
        {{ this.typeCaseRoom(roomType) }} #{{ roomNumber }}
      </h3>
      <p>
        {{ date }}
      </p>
      <p>
        {{ numBeds }} {{ this.typeCaseBed(bedSize) }} {{ this.formatBeds(numBeds) }}
      </p>
      <p v-if="bidet">
        This room includes a bidet!
      </p>
      <p>
        Total: ${{ total }}
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
    total: {
      type: Number,
      default: null,
    },
  },
  methods: {
    typeCaseRoom(roomType) {
      roomType = roomType + ''
      const formattedRoom = roomType.split('').map((l, i) => {
        if (!i) {
          return l.toUpperCase()
        } else {
          return l
        }
      })
      return formattedRoom.join('')
    },
    typeCaseBed(bedSize) {
      bedSize = bedSize + ''
      const formattedSize = bedSize.split('').map((l, i) => {
        if (!i) {
          return l.toUpperCase()
        } else {
          return l
        }
      })
      return formattedSize.join('')
    },
    formatBeds(numBeds) {
      if (numBeds > 1) {
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