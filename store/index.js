export const state = () => ({
  // state
  validated: false,
  userID: null,
  bookings: null,
  firstName: null,
  lastName: null,
  rooms: null,
})

export const mutations = {
  // actions and mutations
  validateUser(state) {
    state.validated = true
  },
  logoutUser(state) {
    state.validated = false
    state.userID = null
    state.firstName = null
    state.lastName = null
    state.bookings = null
    state.rooms = null
  },
  setUserID(state, id) {
    state.userID = id
  },
  setBookings(state, bookings) {
    state.bookings = bookings
  },
  setUserProfile(state, profile) {
    state.firstName = profile.name.split(' ')[0]
    state.lastName = profile.name.split(' ')[1]
  },
}