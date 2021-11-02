export const state = () => ({
  // state
  userID: null,
  validated: 0,
  activeUser: null,
  users: null,
  rooms: null,
  bookings: null,
  counter: 0,
})

export const mutations = {
  // actions and mutations
  validateUser(state) {
    state.validated++
    console.log(state.validated)
  },
  invalidateUser(state) {
      state.validated--
      console.log(state.validated)
    },
  increment(state) {
      state.counter++
      console.log('counter', state.counter)
    },
}