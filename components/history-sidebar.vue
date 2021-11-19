<template>
  <aside class="history-sidebar">
    <p class="sidebar-heading">
      Your history at The Overlook Hotel
    </p>
    <button class="details-btn" v-if="!historyVisible" @click="showUserHistory">Show Details</button>
    <button class="details-btn" v-if="historyVisible" @click="hideUserHistory">Hide Details</button>
    <img v-if="!historyVisible" src="@/static/red_pool.jpeg" alt="Overlook Skypool" class="sidebar-image"/>
    <h3 v-if="historyVisible">
      Total spent at Overlook: ${{ total }}
    </h3>
    <div
      v-for="(card, index) in this.history"
      :key="index"
      class="history-card-container"
    >
      <HistoryCard
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
    firstName: {
      type: String,
      default: '',
    },
    history: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
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
  background-color: #a76d40;
  height: 76.3vh;
  width: 35vw;
  text-align: center;
  overflow: scroll;
  color: black;
}
.details-btn {
  background-color: #FFFACD;
  border-color: #FFFACD;
  width: 150px;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 18px;
  margin-left: 10px;
}
.sidebar-heading {
  font-size: 23px;
  font-weight: 600;
}
.sidebar-image {
  margin-top: 75px;
  max-width: 100%;
  min-height: 60%;
}
</style>