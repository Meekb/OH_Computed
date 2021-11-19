<template>
  <header class="user-header">
    <h1 class="user-greeting">
      Hello {{ name }}
    </h1>
    <p class="last-stay">
      Your last stay with us was on {{ lastStay }}
    </p>
    <button class="logout-btn" @click="logout">
        Sign Out
    </button>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    lastStay: {
      type: String,
      default: '',
    }
  },
  methods: {
    logout() {
      this.$store.commit('logoutUser')
      this.$router.push({ path:"/" })
    },
  }
}
</script>

<style>
.user-header {
  background-color: #bd8b9ad1;
  color: black;
  border:1px solid #4d041dd1;
  /* border: 2px solid tomato; */
}
.last-stay {
  font-size: 18px;
  text-align: center;
}
.logout-btn {
  background-color: #bd8b9ad1;
  border-color: #4d041dd1;
  border-radius: 1rem;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
  margin-left: 10px;
}
.user-greeting {
  margin-top: 0px;
  padding-top: 25px;
  text-align: center;
}
</style>