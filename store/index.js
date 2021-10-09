export const state = () => ({
  // state
  userID: null,
  validated: false,
})

export const mutations = {
  // actions and mutations
  validateUser(state) {
    state.validated = true
    console.log(state.validated)
  },
  invalidateUser(state) {
    state.validated = false
    console.log(state.validated)
  }
}