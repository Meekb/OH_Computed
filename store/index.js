export const state = () => ({
  // state
  validated: false,
  userID: null,
  firstName: null,
  lastName: null,
  bookings: null,
  rooms: null,
  userHistory: null,
  userTotal: 0,
  lastStay: null,
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
  setRooms(state, rooms) {
    state.rooms = rooms
  },
  setUserProfile(state, profile) {
    state.firstName = profile.name.split(' ')[0]
    state.lastName = profile.name.split(' ')[1]
  },
  setUserHistory(state) {
    const userBookings = state.bookings.filter(b => b.userID === Number(state.userID))
    state.userHistory = userBookings
    state.userHistory.forEach(b => {
      b.date = b.date.split('/')
      b.date = `${b.date[1]}-${b.date[2]}-${b.date[0]}`
      const rmDetail = state.rooms.find(rm => {
        return rm.number === b.roomNumber
      })
      b.roomType = rmDetail.roomType
      b.bedSize = rmDetail.bedSize
      b.numBeds = rmDetail.numBeds
      b.bidet = rmDetail.bidet
      b.total = rmDetail.costPerNight
    })
    return state.userHistory.sort((a,b) => new Date(a.date) - new Date(b.date))
  },
  setUserTotal(state) {
    state.userTotal = state.userHistory.reduce((acc, cur) => {
      return acc += cur.total
    }, 0)
    state.userTotal = state.userTotal.toFixed(2)
    return state.userTotal
  },
  getLastStay(state) {
    return state.lastStay = state.userHistory[state.userHistory.length - 1].date
  },
}