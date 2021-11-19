<template>
  <div class="main-container">
    <user-header :name="this.$store.state.firstName"/>
    <main class="main-dashboard">
      <history-sidebar
        :name="this.$store.state.firstName"
        :total="this.$store.state.userTotal"
        :history="this.$store.state.userHistory"
      />
    </main>
  </div>
</template>

<script>
export default {
  async created(payload, $axios) {
    const bookings = await this.$axios.$get('http://localhost:3001/api/v1/bookings')
    this.$store.commit('setBookings', bookings.bookings)
    const rooms = await this.$axios.$get('http://localhost:3001/api/v1/rooms')
    this.$store.commit('setRooms', rooms.rooms)
    const profile = await 
    this.$axios.$get(`http://localhost:3001/api/v1/customers/${this.$store.state.userID}`)
    this.$store.commit('setUserProfile', profile)
    this.$store.commit('setUserHistory')
    this.$store.commit('setUserTotal')
  },
  methods: {},
}
</script>

<style scoped>
.main-dashboard {
  display: flex;
}
</style>