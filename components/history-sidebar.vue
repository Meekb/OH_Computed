<template>
  <aside class="history-sidebar">
    <h2 class="sidebar-heading">
      Reivew Your History At Overlook
    </h2>
    <button class="details-btn" v-if="!historyVisible" @click="showUserHistory">Show Details</button>
    <button class="details-btn" v-if="historyVisible" @click="hideUserHistory">Hide Details</button>
    <img v-if="!historyVisible" src="@/static/overlook-skypool.png" alt="Overlook Skypool" class="sidebar-image"/>
    <h3 v-if="historyVisible">
      Total spent at Overlook: ${{ total }}
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
  background-color: #b88660;
  height: 76.3vh;
  width: 35vw;
  text-align: center;
  overflow: scroll;
  color: black;
}
.details-btn {
  background-color: #bd8b9ad1;
  border-color: #4d041dd1;
  width: 150px;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  font-size: 18px;
  margin-left: 10px;
}
.sidebar-image{
  border: 2px solid #4d041dd1;
  border-radius: 1rem;
  margin-top: 20px;
  width: 30vw;
  height: 60vh;
}
</style>