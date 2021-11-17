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
    <button v-if="!validated" @click="validateLogin" class="login-btn">Enter Overlook</button>
  </div>
</template>

  <script>
export default {
  data () {
    return {
      username: '',
      password: '',
      error: false,
      validated: false,
    }
  },
  methods: {
    errorTimeout () {
      this.username = ''
      this.password = ''
      this.error = false
    },
    validateLogin () {
      // error scenarios
      const setup = this.username.split('r')
      const userError1 = this.username.length < 9
      const userError2 = this.username.length > 10
      const userError3 = (setup[0] !== 'custome')
      const userError4 = (Number(setup[1]) < 1)
      const userError5 = (Number(setup[1]) > 50)
      const passError1 = (this.password !== 'overlook2021')
      // check for errors
      if (userError1 || userError2 || userError3 || userError4 || userError5 || passError1) {
        this.error = true
        this.username = ''
        this.password = ''
        // if login error, throw error and reset in 3..2..1..
        setTimeout(this.errorTimeout, 3000)
        return
      }
      if (!this.error) {
        this.validated = true 
        const userId = this.username.split('r')[1]
        this.$store.commit('validateUser')
        this.$store.commit('setUserID', userId)
        this.$router.push({ path: '/dashboard' })
      } 
    },
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
  font-size: 18px;
  font-weight: bold;
  border-radius: 1rem;
  margin-top: 35px;
  width: 160px;
}
.validate-btn {
  font-size: 20px;
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