<template>
  <div v-if="!this.$store.validated" class="login-input-container">
    <div class="please-login">
      <p class="login-please-text">
        Please login to continue.
      </p>
      <p class="login-please-text">
        Not a member yet? Accepting new members this Fall!
      </p>
  </div>
    <div class="username-container">
      <label class="login-label">
        Username:
      </label>
      <input 
        class="login-input username" 
        v-model="username" 
        type="text" 
        required/>
    </div>
    <div class="password-container">
      <label class="login-label">
        Password:
      </label>
      <input 
        class="login-input password" 
        v-model="password" 
        type="password" 
        required/>
      <div class="login-error-message">
        <login-error v-if="this.error"/>
      </div>
    </div>
    <nuxt-link to="dashboard">
      <button @click="validateLogin" class="login-btn">Login</button>
    </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: false,
    }
  },
  methods: {
    errorTimeout () {
      this.username = ''
      this.password = ''
      this.error = false
    },
    validateLogin () {
      const setup = this.username.split('r')
      const userError1 = this.username.length < 9
      const userError2 = this.username.length > 10
      const userError3 = (setup[0] !== 'custome')
      const userError4 = (Number(setup[1]) < 1)
      const userError5 = (Number(setup[1]) > 50)
      const passError1 = (this.password !== 'overlook2021')
      if (userError1 || userError2 || userError3 || userError4 || userError5 || passError1) {
        this.error = true
        return
      } 
      this.$store.commit('validateUser')
      console.log('validation state', this.$state.validated)
      const userId = this.username.split('r')[1]
      console.log('userID', userId)
      return 
      // this.$emit('is-validated', {userId})
    },
    async asyncData(payload, $axios) {
      const bookings = await this.$axios.$get('http://localhost:3001/api/v1/bookings')
      this.$state.bookings = bookings.bookings
      console.log(this.$state.bookings)
    },
    upTheCounter(e) {
      e.preventDefault()
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
.login-input-container {
  display: flex;
  flex-direction: column;
}
.login-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: 150px;
}
.login-btn {
  font-size: 22px;
  font-weight: bold;
  border-radius: 1rem;
  margin-top: 35px;
  width: 150px;
}
.login-input {
  margin: 8px;
}
.login-label {
  font-size: 18px;
}
.login-please-text {
  font-size: 18px;
}
.password {
  margin-left: 11px;
}
</style>