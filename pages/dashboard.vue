<template>
  <div class="main-container">
    <UserHeader
      :firstName="this.$store.state.firstName"
      :history="this.$store.state.userHistory"
    />
    <main class="main-dashboard">
      <HistorySidebar
        :firstName="this.$store.state.firstName"
        :total="this.$store.state.userTotal"
        :history="this.$store.state.userHistory"
      />
      <BookingForm
        :firstName="this.$store.state.firstName" :lastName="this.$store.state.lastName"
        :allRooms="this.$store.state.rooms"
        :allBookings="this.$store.state.bookings" 
      />
    </main>
  </div>
</template>

<script>
export default {
  async created() {
    const bookings = await this.$axios.$get('http://localhost:3001/api/v1/bookings')
    this.$store.commit('setBookings', bookings.bookings)
    const rooms = await this.$axios.$get('http://localhost:3001/api/v1/rooms')
    this.$store.commit('setRooms', rooms.rooms)
    const profile = await 
    this.$axios.$get(`http://localhost:3001/api/v1/customers/${this.$store.state.userID}`)
    this.$store.commit('setUserProfile', profile)
    this.$store.commit('setUserHistory')
    // this.$store.commit('setUserTotal')
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.main-dashboard {
  display: flex;
}
</style>