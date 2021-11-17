export const state = () => ({
  // state
  validated: false,
  userID: null,
  firstName: null,
  lastName: null,
  bookings: null,
  rooms: null,
  userHistory: null,
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
    console.log('Bookings', bookings)
  },
  setRooms(state, rooms) {
    state.rooms = rooms
    console.log('Rooms', state.rooms)
  },
  setUserProfile(state, profile) {
    state.firstName = profile.name.split(' ')[0]
    state.lastName = profile.name.split(' ')[1]
  },
  setUserHistory(state) {
    const userBookings = state.bookings.filter(b => b.userID === Number(state.userID))
    state.userHistory = userBookings
    state.userHistory.forEach(b => {
      const rmDetail = state.rooms.find(rm => {
        return rm.number === b.roomNumber
      })
      b.roomType = rmDetail.roomType
      b.bedSize = rmDetail.bedSize
      b.numBeds = rmDetail.numBeds
      b.bidet = rmDetail.bidet
    })
    return state.setUserHistory
  },
}