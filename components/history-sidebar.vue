<template>
  <aside class="history-sidebar">
    <h2>
      {{ name }}'s History Overlook
    </h2>
    <button class="details-btn" v-if="!historyVisible" @click="showUserHistory">Show Details</button>
    <button class="details-btn" v-if="historyVisible" @click="hideUserHistory">Hide Details</button>
    <h3 v-if="historyVisible">
      Total spent at Overlook $ {{ total }}
    </h3>
    <div
      v-for="(card, index) in this.history"
      :key="index"
      class="history-card-container"
    >
      <history-card
        v-if="historyVisible"
        :id="index"
        :date="card.date"
        :roomNumber="card.roomNumber" 
        :roomType="card.roomType" 
        :bedSize="card.bedSize" 
        :bidet="card.bidet" 
        :numBeds="card.numBeds" 
        :total="card.total" 
      />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    history: {
      type: Array,
      default: [],
    },
    total: {
      type: String,
      default: 0,
    },
  },
  data() {
    return {
      historyVisible: false,
    }
  },
  methods: {
    showUserHistory() {
      this.historyVisible = true
      console.log()
    },
    hideUserHistory() {
      this.historyVisible = false
    },
  }
}
</script>

<style scoped>
.history-sidebar {
  background-color: gold;
  height: 82.3vh;
  width: 35vw;
  text-align: center;
  overflow: scroll;
}
.details-btn {
  background-color: ivory;
  border-color: ivory;
  border-radius: 1rem;
  font-size: 18px;
  margin-left: 10px;
}
</style>