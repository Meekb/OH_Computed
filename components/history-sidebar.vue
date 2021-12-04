<template>
  <aside class="history-sidebar">
    <p class="sidebar-heading">
      Your history at The Overlook Hotel
    </p>
    <button class="details-btn" v-if="!historyVisible" @click="showUserHistory">Show Details</button>
    <button class="details-btn" v-if="historyVisible" @click="hideUserHistory">Hide Details</button>
    <div v-if="!historyVisible" class="initial-sidebar">
      <img src="@/static/red_pool.jpeg" alt="Overlook Skypool" class="sidebar-image" v-lazy-load/>
      <p>
        Overlook Garden Pool
      </p>
    </div>
    <h3 v-if="historyVisible">
      Total spent at Overlook: ${{ total }}
    </h3>
    <p v-if="historyVisible" class="last-stay">
      Your last stay was on {{ lastStay }}
    </p>
    <div
      v-for="(card, index) in history"
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
      default: () => [],
    },
    total: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      historyVisible: false,
    }
  },
  computed: {
    total () {
      const total = this.history.reduce((acc, cur) => {
        return acc += cur.total
      }, 0)
      return total.toFixed(2)
    },
    lastStay () {
      const lastStay = this.history.reduce((acc, cur, i) => {
        if (i === 0) {
          return cur
        }
        else {
          return acc
        }
      }, '')
        return lastStay.date
    },
  },
  methods: {
    showUserHistory() {
      this.historyVisible = true
    },
    hideUserHistory() {
      this.historyVisible = false
    },
  }
}
</script>

<style scoped>
.history-sidebar {
  background-color: #660000;
  width: 35vw;
  height: 81vh;
  text-align: center;
  overflow: scroll;
  color: #FFFACD;
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
.initial-sidebar {
  margin-top: 100px;
}
.sidebar-image {
  /* margin-top: 125px; */
  max-width: 100%;
  min-height: 60%;
  /* border-radius: 1rem; */
}
.last-stay {
  font-size: 18px;
}
</style>