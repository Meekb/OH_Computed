<template>
  <main>
    <user-header :name="this.$store.state.firstName"/>
    <button @click="logout">
      Sign Out
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  async created(payload, $axios) {
    const bookings = await this.$axios.$get('http://localhost:3001/api/v1/bookings')
    this.$store.commit('setBookings', bookings.bookings)
    const rooms = await this.$axios.$get('http://localhost:3001/api/v1/rooms')
    this.$store.commit('setRooms', rooms.rooms)
    const profile = await 
    this.$axios.$get(`http://localhost:3001/api/v1/customers/${this.$store.state.userID}`)
    this.$store.commit('setUserProfile', profile)
  },
  methods: {
    logout() {
      this.$store.commit('logoutUser')
      this.$router.push({ path:"/" })
    }
  }
}
</script>